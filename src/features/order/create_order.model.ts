import { messageResponseToErrorsArray } from "@/lib/errors";
import { api } from "@/services";
import { createEffect, createEvent, createStore, sample } from "effector";
import { toast } from "react-toastify";
import { $selectedCartItemsIds } from "../cart/cart.model";
import { MOCK_CREATE_ORDER } from "./order.constants";

const setOrderData = createEvent<{ key: string; value: any }>();

const createOrder = createEvent<void>();

const createOrderFx = createEffect<void, unknown>({
  handler: async (data) => {
    api
      .post("/orders", data)
      .then((response) => {
        const { paymentLink } = response.data || {};

        if (!paymentLink) {
          toast.error("Не удалось создать счет для оплаты, попробуйте позже");
        }

        window.location.href = response.data.paymentLink;
      })
      .catch((error) => {
        if (error.response.status === 400) {
          const { message } = error.response.data;

          const errors = messageResponseToErrorsArray(message);

          errors.forEach((m) => toast.warn(m));
        } else {
          toast.error("При оформления заказа произошла ошибка");
        }
      });
  },
});

const $orderData = createStore({
  ...MOCK_CREATE_ORDER,
}).on(setOrderData, (state, { key, value }) => ({
  ...state,
  [key]: value,
}));

sample({
  clock: createOrder,
  source: [$orderData, $selectedCartItemsIds],
  fn: ([orderData, productIds]) => ({ ...orderData, productIds }),
  target: createOrderFx,
});

export { createOrder, setOrderData, $orderData };
