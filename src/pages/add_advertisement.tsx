import { Footer, Header } from "@/components";
import React from "react";

type Props = {};

const AddAdvertisement = (props: Props) => {
  return (
    <>
      <Header />
      <section className="add-advertisement">
        <form action="">
          <div className="container">
            <div className="col-12">
              <h1>Добавление объявления</h1>
            </div>
            <div className="col-12">
              <div className="item-wrapper">
                <div className="title">Наименование</div>
                <input type="text" />
              </div>
            </div>
            <div className="col-12">
              <div className="item-wrapper">
                <div className="title">Краткое описание</div>
                <textarea rows={3}></textarea>
              </div>
            </div>
            <div className="col-12">
              <div className="items-wrapper">
                <div className="item-wrapper custom-item">
                  <div className="title">Категория товара</div>
                  <select name="" id=""></select>
                </div>
                <div className="item-wrapper custom-item">
                  <div className="title">Подкатегория</div>
                  <select name="" id=""></select>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="items-wrapper">
                <div className="item-wrapper custom-item">
                  <div className="title">Продавец</div>
                  <input type="text" />
                </div>
                <div className="item-wrapper custom-item">
                  <div className="title">Состояние</div>
                  <select name="" id=""></select>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="items-wrapper">
                <div className="item-wrapper custom-item">
                  <div className="title">Цена</div>
                  <input type="text" />
                </div>
                <div className="item-wrapper custom-item">
                  <div className="title">Минимальная ставка</div>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="item-wrapper">
                <div className="title">Рекомендованная розничная цена</div>
                <input type="text" />
              </div>
            </div>
            <div className="col-12">
              <div className="items-wrapper">
                <div className="item-wrapper custom-item">
                  <div className="title">Колличество единиц</div>
                  <input type="text" />
                </div>
                <div className="item-wrapper custom-item">
                  <div className="title">Общий вес</div>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="item-wrapper">
                <div className="title">Единицы измерения</div>
                <select name="" id=""></select>
              </div>
            </div>
            <div className="col-12">
              <div className="item-wrapper">
                <div className="title">Расположение товара</div>
                <input type="text" />
              </div>
            </div>
            <div className="col-12">
              <div className="items-wrapper">
                <div className="item-wrapper custom-item">
                  <div className="title">Кто осуществляет доставку</div>
                  <select name="" id=""></select>
                </div>
                <div className="item-wrapper custom-item">
                  <div className="title">Способ доставки</div>
                  <select name="" id=""></select>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="items-wrapper">
                <div className="item-wrapper custom-item">
                  <div className="title">Размер доставки</div>
                  <select name="" id=""></select>
                </div>
                <div className="item-wrapper custom-item">
                  <div className="title">Предпочитаемый способ оплаты</div>
                  <select name="" id=""></select>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="item-wrapper">
                <div className="title">Описание</div>
                <textarea rows={8}>
                  Полное описание товара, характеристики, размеры, детали
                  состояния...
                </textarea>
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
        </form>
      </section>
      <Footer />
    </>
  );
};

export default AddAdvertisement;
