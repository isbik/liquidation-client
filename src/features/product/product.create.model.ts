import { PRODUCT_CREATE } from "@/lib";
import { api } from "@/services";
import { CloudFile } from "@/types";
import {
  createEffect,
  createEvent,
  createStore,
  restore,
  sample,
} from "effector";
import { toast } from "react-toastify";
import { CreateProductForm } from "./product.types";

const createProduct = createEvent<void>();

const createProductFx = createEffect<CreateProductForm, void>({
  handler: (data) => {
    return new Promise<void>((resolve, reject) => {
      api
        .post("/products", data)
        .then(() => {
          toast.success("Объявление было успешно создано");
          resolve();
        })
        .catch((error) => {
          if (error.response.status === 400) {
            toast.error("Введенные данные не соответствуют формату");
          } else {
            toast.error("При создание произошла ошибка, попробуйте позже");
          }
          reject();
        });
    });
  },
});

const changeCreateProductForm = createEvent<{ key: string; value: string }>();

const $createProductForm = createStore<CreateProductForm>(PRODUCT_CREATE)
  .on(changeCreateProductForm, (state, { key, value }) => ({
    ...state,
    [key]: value,
  }))
  .reset(createProductFx.doneData);

const setImages = createEvent<CloudFile[]>();

const $images = createStore<CloudFile[]>([])
  .on(setImages, (_, payload) => payload)
  .reset(createProductFx.doneData);

sample({
  // @ts-ignore
  clock: createProduct,
  source: [$createProductForm, $images],
  fn: ([form, images]: [CreateProductForm, CloudFile[]]) => {
    const { manifestoFile, ...rest } = form;

    return {
      ...rest,
      imageIds: images.map(({ id }) => id),
      manifestoFileId: manifestoFile?.id || null,
    };
  },
  target: createProductFx,
});

const changeIsPreview = createEvent<boolean>();

const resetCreatedProduct = createEvent();

const $isCreatedProduct = createStore(false)
  .on(createProductFx.doneData, () => true)
  .reset(resetCreatedProduct);

const $isPreview = restore(changeIsPreview, false).reset(
  createProductFx.doneData
);

export {
  $createProductForm,
  changeCreateProductForm,
  $isPreview,
  changeIsPreview,
  createProduct,
  createProductFx,
  resetCreatedProduct,
  $isCreatedProduct,
  $images,
  setImages,
};
