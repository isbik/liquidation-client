import {
  Condition,
  CreateProductForm,
  DeliveryMethod,
  DeliverySize,
  Supplier,
  UnitType,
} from "@/features/product/product.types";

export const DEFAULT_PRODUCT_CREATE = {
  name: "",
  shortDescription: "",
  description: "",
  categoryId: null,
  subCategoryId: null,
  seller: "",
  condition: Condition.new,
  price: null,
  minRate: null,
  recommendedRetailPrice: null,
  quantity: 1,
  totalWeight: null,
  unitType: UnitType.kg,

  location: "",
  supplier: Supplier.owner,
  images: [],
  manifestoFile: null,
};

export const PRODUCT_CREATE: CreateProductForm = {
  name: "Цемент",
  shortDescription: "Описание",
  description: "Длинное описание",

  categoryId: 11,
  subCategoryId: 12,
  seller: "OOO GASPROM",
  condition: Condition.new,
  price: 5000,
  minRate: 1000,
  recommendedRetailPrice: 2500,
  quantity: 1,
  totalWeight: 1000,
  unitType: UnitType.kg,

  location: "Москва дом ленина",
  supplier: Supplier.owner,
  images: [],
  manifestoFile: null,

  deliveryMethod: DeliveryMethod.PERSONAL_COURIER,
  deliverySize: DeliverySize.BOX,
};

export const CONDITION = [
  { value: "new", text: "Новое" },
  { value: "as_new", text: "Как новое" },
  { value: "good", text: "Хорошее" },
  { value: "acceptable", text: "Допустимое" },
  { value: "bad", text: "Плохое" },
];

export const UNIT_TYPES = [
  { value: "kg", text: "Килограммы" },
  {
    value: "tone",
    text: "Тонны",
  },
];

export const PRODUCT_STATUSES = [
  { value: "draft", text: "Черновик" },
  { value: "active", text: "Активный" },
  { value: "finished", text: "Закончен" },
  { value: "sold", text: "Продан" },
];

export const SUPPLIER_VALUES = [
  { value: "owner", text: "Владелец" },
  { value: "customer", text: "Покупатель" },
];

export const DELIVERY_METHODS = [
  {
    value: DeliveryMethod.RUSSIA_POST,
    text: "Почта России",
  },
  {
    value: DeliveryMethod.PERSONAL_COURIER,
    text: "Личный курьер",
  },
  {
    value: DeliveryMethod.PICKUP,
    text: "Самовывоз",
  },
];

export const DELIVERY_SIZE = [
  { value: DeliverySize.BOX, text: "Коробка" },
  { value: DeliverySize.PALLET_SMALL, text: "Поддон 1200*800*100" },
  { value: DeliverySize.PALLET, text: "Поддон 1200*1000*100" },
  { value: DeliverySize.EUROPALLET, text: "Европаллет 800*1200*145" },
  { value: DeliverySize.TRUCK_1_5, text: "Грузовик 1.5 - 1.7 тонн" },
  { value: DeliverySize.TRUCK_3_5, text: "Грузовик 3.5 тонн" },
  { value: DeliverySize.TRUCK_5, text: "Грузовик 5 тонн" },
  { value: DeliverySize.TRUCK_10, text: "Грузовик 10-15 тонн" },
  { value: DeliverySize.EUROFURA, text: "Еврофура 20-22 тонны" },
  { value: DeliverySize.CONTAINER_22, text: "Контейнер 22 тонны" },
  { value: DeliverySize.CONTAINER_26, text: "Контейнер 26 тонн" },
  { value: DeliverySize.CONTAINER_30, text: "Контейнер 30 тонн" },
];
