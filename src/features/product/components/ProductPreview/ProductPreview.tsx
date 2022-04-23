import { useStore } from "effector-react";
import { useRouter } from "next/router";
import React from "react";
import {
  $createProductForm,
  changeIsPreview,
  createProduct,
} from "../../product.create.model";
import { getConditionText, getUnitTypeText } from "../../product.utils";

type Props = {};

const ProductPreview = (props: Props) => {
  const router = useRouter();

  const productForm = useStore($createProductForm);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createProduct();
  };

  return (
    <>
      <section className="advertisiment-preview">
        <div className="container">
          <div className="col-12">
            <h1>Добавление объявления</h1>
            <h2>Предпросмотр объявления</h2>
          </div>
          <div className="col-4 col-m-12 order-m-1">
            <div className="preview-block">
              <h3>Изображения</h3>
              <div className="imgs-wrapper">
                <div className="thumb">
                  <img src="/static/preview-item.png" alt="" />
                </div>
                <div className="thumb">
                  <img src="/static/preview-item.png" alt="" />
                </div>
                <div className="thumb">
                  <img src="/static/preview-item.png" alt="" />
                </div>
                <div className="thumb">
                  <img src="/static/preview-item.png" alt="" />
                </div>
                <div className="thumb">
                  <img src="/static/preview-item.png" alt="" />
                </div>
              </div>
            </div>
            <div className="preview-block">
              <h3>Манифест</h3>
              <p className="desc">Не загружен</p>
            </div>
          </div>
          <div className="col-4 col-m-12">
            <div className="preview-block">
              <h3>Наименование</h3>
              <p className="desc">{productForm.name}</p>
            </div>
            <div className="preview-block">
              <h3>Категория товара</h3>
              <p className="desc">{productForm.categoryId}</p>
            </div>
            <div className="preview-block">
              <h3>Продавец</h3>
              <p className="desc">{productForm.seller}</p>
            </div>
            <div className="preview-block">
              <h3>Рекомендованная розничная цена</h3>
              <p className="desc">{productForm.recommendedRetailPrice} ₽</p>
            </div>
            <div className="preview-block">
              <h3>Колличество единиц</h3>
              <p className="desc">{productForm.quantity}</p>
            </div>
            <div className="preview-block">
              <h3>Единицы измерения</h3>
              <p className="desc">{getUnitTypeText(productForm.unitType)}</p>
            </div>
            <div className="preview-block">
              <h3>Расположение товара</h3>
              <p className="desc">{productForm.location}</p>
            </div>
            <div className="preview-block">
              <h3>Размер доставки</h3>
              <p className="desc">Грузовик 1.5 - 1.7 тонн</p>
            </div>
            <div className="preview-block">
              <h3>Описание</h3>
              <p className="desc">{productForm.description}</p>
            </div>
          </div>
          <div className="col-4 col-m-12">
            <div className="preview-block">
              <h3>Краткое описание</h3>
              <p className="desc">{productForm.shortDescription}</p>
            </div>
            <div className="preview-block">
              <h3>Подкатегория</h3>
              <p className="desc">{productForm.subCategoryId}</p>
            </div>
            <div className="preview-block">
              <h3>Состояние</h3>
              <p className="desc">{getConditionText(productForm.condition)}</p>
            </div>
            <div className="preview-block">
              <h3>Минимальная ставка</h3>
              <p className="desc">{productForm.minRate} ₽</p>
            </div>
            <div className="preview-block">
              <h3>Общий вес</h3>
              <p className="desc">{productForm.totalWeight} кг</p>
            </div>
            <div className="preview-block">
              <h3>Кто осуществляет доставку</h3>
              <p className="desc">{productForm.supplier}</p>
            </div>
            <div className="preview-block">
              <h3>Предпочитаемый способ оплаты</h3>
              <p className="desc">Перевод на расчётный счёт</p>
            </div>
          </div>
          <div className="col-12 order-m-1">
            <div className="col-12">
              <button
                onClick={() => changeIsPreview(false)}
                className="edit-btn"
              >
                Редактировать
              </button>
            </div>
            <div className="col-12">
              <div className="desc-for-input">
                <p>Проверьте правильность введенных данных.</p>
                <p>Если все введено корректно, нажмите на кнопку ниже.</p>
              </div>
              <input
                onClick={handleSubmit}
                type="submit"
                value="Добавить объявление"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { ProductPreview };
