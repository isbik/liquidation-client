import { api } from "@/services";
import { Paginated } from "@/types";
import {
  createEffect,
  createEvent,
  createStore,
  restore,
  sample,
} from "effector";
import { FavoriteOrganization } from "./favorite.types";

const PER_PAGE = 6;

const fetchFavoriteOrganizationsFx = createEffect<
  { page: number },
  Paginated<never>
>({
  handler: async ({ page }) => {
    const products = await api.get("/favorites/organizations", {
      params: {
        limit: PER_PAGE,
        offset: PER_PAGE * page,
      },
    });

    return products.data;
  },
});

const fetchFavoriteOrganizations = createEvent();

const $favoriteOrganizations = createStore<FavoriteOrganization[]>([]).on(
  fetchFavoriteOrganizationsFx.doneData,
  (_, data) => data.items
);

const $total = createStore<number>(0).on(
  fetchFavoriteOrganizationsFx.doneData,
  (_, data) => data.total
);

const changePage = createEvent<number>();

const $page = restore<number>(changePage, 0);

sample({
  clock: [fetchFavoriteOrganizations, changePage],
  source: [$page],
  fn: ([page]) => ({ page }),
  target: fetchFavoriteOrganizationsFx,
});

export {
  $favoriteOrganizations,
  fetchFavoriteOrganizations,
  $total,
  fetchFavoriteOrganizationsFx,
};
