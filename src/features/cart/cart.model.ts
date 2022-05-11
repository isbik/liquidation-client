import {
  combine,
  createEffect,
  createEvent,
  createStore,
  forward,
  guard,
  sample,
} from "effector";
import { api } from "../../services";
import { Product, UnitType } from "../product/product.types";

const setCoupon = createEvent<string>();
const $coupon = createStore("").on(setCoupon, (_, payload) => payload);

const fetchCartItems = createEvent();

const fetchCartItemsFx = createEffect({
  handler: async () => {
    const response = await api.get("/cart");
    return response.data;
  },
});

const $cartItems = createStore<Array<Product & { isFavorite: boolean }>>([]);

const $cartItemsLength = $cartItems.map((state) => state.length);

forward({
  from: fetchCartItemsFx.doneData,
  to: $cartItems,
});

sample({
  clock: fetchCartItems,
  target: fetchCartItemsFx,
});

const toggleSelectCartItem = createEvent<Product>();

const selectAllCartItems = createEvent();
const resetSelectedCartItems = createEvent();

const $selectedCartItems = createStore<Product[]>([])
  .on(toggleSelectCartItem, (state, payload) => {
    if (state.map(({ id }) => id).includes(payload.id)) {
      return state.filter(({ id }) => id !== payload.id);
    }

    return [...state, payload];
  })
  .reset(resetSelectedCartItems);

const $selectedCartItemsIds = $selectedCartItems.map((state) =>
  state.map(({ id }) => id)
);

const $isSelectedAll = combine(
  $cartItems,
  $selectedCartItems,
  (card, selected) => {
    return card.length === selected.length;
  }
);

guard({
  clock: selectAllCartItems,
  source: $cartItems,
  filter: $isSelectedAll.map((state) => !state),

  target: $selectedCartItems,
});

const $selectedCartItemsLength = $selectedCartItems.map(
  (state) => state.length
);

const $totalWeight = combine($selectedCartItems, (products) => {
  const weight = products.reduce((acc, product) => {
    if (product.unitType === UnitType.kg) {
      acc += product.totalWeight;
    }

    if (product.unitType === UnitType.tone) {
      acc += product.totalWeight * 100;
    }

    return acc;
  }, 0);

  // Оставлять максимум 4 цифры после запятой, а если там нули то их обрезать
  return (weight / 1000).toFixed(4).replace(/\.?0+$/, "");
});

const $totalPrice = combine($selectedCartItems, (products) => {
  return products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
});

export {
  $coupon,
  setCoupon,
  $cartItems,
  fetchCartItems,
  $cartItemsLength,
  $selectedCartItems,
  $selectedCartItemsIds,
  $selectedCartItemsLength,
  toggleSelectCartItem,
  selectAllCartItems,
  resetSelectedCartItems,
  $totalPrice,
  $totalWeight,
};
