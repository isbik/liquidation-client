import { api } from "@/services";
import { Paginated } from "@/types";
import {
  createEffect,
  createEvent,
  createStore,
  restore,
  sample,
} from "effector";

type Paginate = {
  url: string;
  perPage?: number;
  params?: object;
};

const paginate = ({ url, perPage = 6, params = {} }: Paginate) => {
  const fetchItemsFx = createEffect<{ page: number }, Paginated<never>>({
    handler: async ({ page }) => {
      const products = await api.get(url, {
        params: {
          limit: perPage,
          offset: perPage * page,
          ...params,
        },
      });
      return products.data;
    },
  });

  const fetchItems = createEvent();

  const $items = createStore<never[]>([]).on(
    fetchItemsFx.doneData,
    (_, data) => data.items
  );

  const $total = createStore<number>(0).on(
    fetchItemsFx.doneData,
    (_, data) => data.total
  );

  const changePage = createEvent<number>();

  const $page = restore<number>(changePage, 0);

  sample({
    clock: [fetchItems, changePage],
    source: [$page],
    fn: ([page]) => ({ page }),
    target: fetchItemsFx,
  });

  return { $items, fetchItems, $total, $page, changePage };
};

export { paginate };
