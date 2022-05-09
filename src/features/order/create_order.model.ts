import { messageResponseToErrorsArray } from "@/lib/errors";
import { api } from "@/services";
import { createEffect, createEvent, createStore } from "effector";
import { toast } from "react-toastify";
import { MOCK_CREATE_ORDER } from "./order.constants";

const setOrderData = createEvent<{ key: string; value: any }>();

const createOrderFx = createEffect<void, unknown>({
  handler: async (data) => {
    api
      .post("/orders", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          const { message } = error.response.data;

          const errors = messageResponseToErrorsArray(message);

          errors.forEach((m) => toast.warn(m));
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

export { createOrderFx, setOrderData, $orderData };
