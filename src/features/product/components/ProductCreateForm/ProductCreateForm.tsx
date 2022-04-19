import { CategorySelect } from "@/components/inputs/CategorySelect";
import { useStore } from "effector-react";
import React, { useCallback } from "react";
import { toast } from "react-toastify";
import {
  $createProductForm,
  changeCreateProductForm,
  changeIsPreview,
} from "../../product.create.model";
import { Supplier, UnitType } from "../../product.types";

const ProductCreateForm = () => {
  const productForm = useStore($createProductForm);

  const handleChange = useCallback(
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      changeCreateProductForm({
        key: event.target.name,
        value: event.target.value,
      });
    },
    []
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const isAllFilled = Object.values(productForm).every(Boolean);

    if (isAllFilled) changeIsPreview(true);
    else toast.warn("Заполните все поля");
  };

  return (
    <>
      <section className="add-advertisement">
        <form action="" id="formSteps" onSubmit={handleSubmit}>
          <div className="container">
            <div className="col-12">
              <h1>Добавление объявления</h1>
            </div>
            <div className="col-12">
              <div className="item-wrapper">
                <div className="title">Наименование</div>
                <input
                  onChange={handleChange}
                  value={productForm.name}
                  name="name"
                  type="text"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="item-wrapper">
                <div className="title">Краткое описание</div>
                <textarea
                  onChange={handleChange}
                  name="shortDescription"
                  value={productForm.shortDescription}
                  rows={3}
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <div className="items-wrapper">
                <div className="item-wrapper custom-item">
                  <div className="title">Категория товара</div>
                  <CategorySelect
                    name="categoryId"
                    value={productForm.categoryId || ""}
                    onChange={(event) => {
                      changeCreateProductForm({
                        key: "categoryId",
                        value: event.target.value,
                      });
                    }}
                  />
                </div>

                <div className="item-wrapper custom-item">
                  <div className="title">Подкатегория</div>
                  <CategorySelect
                    value={productForm.subCategoryId || ""}
                    parentCategoryId={productForm.categoryId || null}
                    name="subCategoryId"
                    disabled={productForm.categoryId === null}
                    onChange={(event) => {
                      changeCreateProductForm({
                        key: "subCategoryId",
                        value: event.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="items-wrapper">
                <div className="item-wrapper custom-item">
                  <div className="title">Продавец</div>
                  <input
                    value={productForm.seller}
                    onChange={handleChange}
                    type="text"
                    name="seller"
                  />
                </div>
                <div className="item-wrapper custom-item">
                  <div className="title">Состояние</div>
                  <select
                    value={productForm.condition}
                    name="condition"
                    onChange={handleChange}
                  >
                    <option value="new">Новое</option>
                    <option value="as_new">Как новое</option>
                    <option value="good">Хорошее</option>
                    <option value="acceptable">Допустимое</option>
                    <option value="bad">Плохое</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="items-wrapper">
                <div className="item-wrapper custom-item">
                  <div className="title">Цена</div>
                  <input
                    value={productForm.price || ""}
                    name="price"
                    type="number"
                    onChange={handleChange}
                  />
                </div>
                <div className="item-wrapper custom-item">
                  <div className="title">Минимальная ставка</div>
                  <input
                    value={productForm.minRate || ""}
                    name="minRate"
                    type="number"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="item-wrapper">
                <div className="title">Рекомендованная розничная цена</div>
                <input
                  type="number"
                  name="recommendedRetailPrice"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="items-wrapper">
                <div className="item-wrapper custom-item">
                  <div className="title">Количество единиц</div>
                  <input
                    type="number"
                    name="quantity"
                    onChange={handleChange}
                  />
                </div>
                <div className="item-wrapper custom-item">
                  <div className="title">Общий вес</div>
                  <input
                    value={productForm.totalWeight || ""}
                    type="number"
                    name="totalWeight"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="item-wrapper">
                <div className="title">Единицы измерения</div>
                <select
                  value={productForm.unitType}
                  name="unitType"
                  onChange={handleChange}
                >
                  <option value={UnitType.kg}>Килограммы</option>
                  <option value={UnitType.tone}>Тонны</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="item-wrapper">
                <div className="title">Расположение товара</div>
                <input name="location" type="text" onChange={handleChange} />
              </div>
            </div>
            <div className="col-12">
              <div className="items-wrapper">
                <div className="item-wrapper custom-item">
                  <div className="title">Кто осуществляет доставку</div>
                  <select name="supplier" onChange={handleChange}>
                    <option value={Supplier.owner}>Владелец</option>
                    <option value={Supplier.customer}>Заказчик</option>
                  </select>
                </div>
                <div className="item-wrapper custom-item">
                  <div className="title">Способ доставки</div>
                  <select name="" id="" disabled></select>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="items-wrapper">
                <div className="item-wrapper custom-item">
                  <div className="title">Размер доставки</div>
                  <select name="" id="" disabled></select>
                </div>
                <div className="item-wrapper custom-item">
                  <div className="title">Предпочитаемый способ оплаты</div>
                  <select name="" id="" disabled></select>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="item-wrapper">
                <div className="title">Описание</div>
                <textarea
                  placeholder="Полное описание товара, характеристики, размеры, детали
                  состояния..."
                  name="description"
                  rows={8}
                  value={productForm.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <label>Мультизагрузка файлов:</label>
                  <input
                    type="file"
                    id="fileMulti"
                    name="fileMulti[]"
                    multiple
                  />
                </div>
                <div className="row">
                  <span id="outputMulti"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-hidden">
            <input
              type="submit"
              className="submit-btn"
              value="Добавить объявление"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export { ProductCreateForm };
