import { api } from "@/services";
import { Paginated } from "@/types";
import { createEffect, createEvent, createStore, sample } from "effector";
import { throttle } from "patronum/throttle";
import { Condition, Product } from "../product/product.types";

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

const fetchProducts = createEvent<any>();

const setFilters = createEvent<Record<string, any>>();

const runSearch = throttle({
  source: fetchProducts,
  timeout: 500,
  target: fetchProductsFx,
});

const $filters = createStore({
  condition: [] as Condition[],
  priceFrom: "",
  priceTo: "",
}).on(setFilters, (state, payload) => ({ ...state, ...payload }));

const $products = createStore<Product[]>([]).on(
  fetchProductsFx.doneData,
  (_, data) => data.items
);

const $total = createStore<number>(0).on(
  fetchProductsFx.doneData,
  (_, data) => data.total
);

const changePage = createEvent<number>();

const $page = createStore<number>(0)
  .on(changePage, (_, payload) => payload)
  .reset(setFilters);

sample({
  clock: [changePage, setFilters],
  source: [$page, $filters],
  target: fetchProducts,
});

runSearch.watch((v) => {
  console.log(v, "v");
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
