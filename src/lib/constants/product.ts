import {
  Condition,
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

export const PRODUCT_CREATE = {
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
  { value: "seller", text: "Покупатель" },
];
