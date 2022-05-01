import { api } from "@/services";
import { Paginated } from "@/types";
import { createEffect, createEvent, createStore, guard } from "effector";
import { Product } from "../product/product.types";

const PER_PAGE = 6;

const fetchProductsFx = createEffect<
  [page: number, filters: Record<string, string | number | null>],
  Paginated<never>
>({
  handler: async ([page, filters]) => {
    const products = await api.get("/products/search", {
      params: {
        limit: PER_PAGE,
        offset: PER_PAGE * page,
        ...filters,
      },
    });
    return products.data;
  },
});

const $isNotLoading = fetchProductsFx.pending.map((pending) => !pending);

const setFilters = createEvent<Record<string, string | number | null>>();

const $filters = createStore({}).on(setFilters, (_, payload) => payload);

const fetchProducts = createEvent();

const $products = createStore<Product[]>([]).on(
  fetchProductsFx.doneData,
  (_, data) => data.items
);

const $total = createStore<number>(0).on(
  fetchProductsFx.doneData,
  (_, data) => data.total
);

const changePage = createEvent<number>();

const $page = createStore<number>(0).on(changePage, (_, payload) => payload);

guard({
  clock: [fetchProducts, changePage, setFilters],
  source: [$page, $filters],
  filter: $isNotLoading,
  target: fetchProductsFx,
});

export {
  $products,
  fetchProducts,
  $total,
  $page,
  changePage,
  $filters,
  setFilters,
};
