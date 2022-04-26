import { api } from "@/services";
import { Paginated } from "@/types";
import {
  createEffect,
  createEvent,
  createStore,
  restore,
  sample,
} from "effector";
import { Product } from "../product/product.types";

const PER_PAGE = 6;

const fetchProductsFx = createEffect<{ page: number }, Paginated<never>>({
  handler: async ({ page }) => {
    const products = await api.get("/products", {
      params: {
        limit: PER_PAGE,
        offset: PER_PAGE * page,
      },
    });
    return products.data;
  },
});

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

const $page = restore<number>(changePage, 0);

sample({
  clock: [fetchProducts, changePage],
  source: [$page],
  fn: ([page]) => ({ page }),
  target: fetchProductsFx,
});

export { $products, fetchProducts, $total, $page, changePage };
