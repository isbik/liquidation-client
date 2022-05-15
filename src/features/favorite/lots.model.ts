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

const fetchFavoriteLotsFx = createEffect<{ page: number }, Paginated<never>>({
  handler: async ({ page }) => {
    const products = await api.get("/favorites/lots", {
      params: {
        limit: PER_PAGE,
        offset: PER_PAGE * page,
      },
    });

    return products.data;
  },
});

const fetchFavoriteLots = createEvent();

const $favoriteLots = createStore<Product[]>([]).on(
  fetchFavoriteLotsFx.doneData,
  (_, data) => data.items
);

const $total = createStore<number>(0).on(
  fetchFavoriteLotsFx.doneData,
  (_, data) => data.total
);

const changePage = createEvent<number>();

const $page = restore<number>(changePage, 0);

sample({
  clock: [fetchFavoriteLots, changePage],
  source: [$page],
  fn: ([page]) => ({ page }),
  target: fetchFavoriteLotsFx,
});

export { $favoriteLots, fetchFavoriteLots, $total, fetchFavoriteLotsFx };
