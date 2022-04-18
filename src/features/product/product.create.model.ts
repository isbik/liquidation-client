import { createEvent, createStore } from "effector";
import { Condition, CreateProductForm, Supplier, UnitType } from "./product.types";

const changeCreateProductForm = createEvent<{ key: string; value: string }>();

const $createProductForm = createStore<CreateProductForm>({
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
  imageIds: [],
  manifestoFileId: null,
}).on(changeCreateProductForm, (state, { key, value }) => ({
  ...state,
  [key]: value,
}));

export { $createProductForm, changeCreateProductForm };
