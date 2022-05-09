import { DeliveryMethod } from "../product/product.types";

export const MOCK_CREATE_ORDER = {
  city: "Москва",
  street: "Шимульна",
  apartment: "55",
  postalCode: "45633",
  deliveryMethod: DeliveryMethod.RUSSIA_POST,

  fio: "Иванов Иван",
  email: "test@gmail.com",
  phone: "89221221222",
  productIds: [],

  coupon: "TEST",
};

export const DEFAULT_CREATE_ORDER = {
  city: "",
  street: "",
  apartment: "",
  postalCode: "",
  deliveryMethod: DeliveryMethod.RUSSIA_POST,

  fio: "",
  email: "",
  phone: "",
  productIds: [],

  coupon: "",
};
