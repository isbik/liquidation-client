import {
  createEffect,
  createEvent,
  createStore,
  forward,
  sample,
} from "effector";
import { api } from "../../services";

const fetchCartItems = createEvent();

const fetchCartItemsFx = createEffect({
  handler: async () => {
    const response = await api.get("/cart");

    return response.data;
  },
});

const $cartItems = createStore([]);

forward({
  from: fetchCartItemsFx.doneData,
  to: $cartItems,
});

sample({
  clock: fetchCartItems,
  target: fetchCartItemsFx,
});

export { $cartItems, fetchCartItems };
