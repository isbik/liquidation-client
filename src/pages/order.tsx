import { Footer, Header } from "@/components";
import React from "react";

type Props = {};

const Order = (props: Props) => {
  return (
    <>
      <Header />

      <form action="" className="ordering">
        <div className="container">
          <div className="col-12">
            <h1>Заказ товара</h1>
          </div>
          <div className="col-12">
            <div className="ordering-items mob-step-1">
              <div className="ordering-title">Выберите способ получения</div>
              <div className="ordering-item">
                <label className="input-title">Город*</label>
                <input required className="input" type="text" />
              </div>
              <div className="ordering-item">
                <label className="input-title">Улица*</label>
                <input required className="input" type="text" />
              </div>
              <div className="ordering-item">
                <label className="input-title">Квартира</label>
                <input className="input" type="text" />
              </div>
              <div className="ordering-item">
                <label className="input-title">Индекс*</label>
                <input required className="input" type="text" />
              </div>
              <div className="ordering-checkboxes">
                <div className="checkbox">
                  <input
                    checked
                    className="custom-radio"
                    name="delivery-method"
                    type="radio"
                    id="cdek"
                    value="cdek"
                  />
                  <label htmlFor="cdek">СДЭК</label>
                </div>
                <div className="checkbox">
                  <input
                    className="custom-radio"
                    name="delivery-method"
                    type="radio"
                    id="mail"
                    value="mail"
                  />
                  <label htmlFor="mail">Почта России</label>
                </div>
                <div className="checkbox">
                  <input
                    className="custom-radio"
                    name="delivery-method"
                    type="radio"
                    id="courier"
                    value="courier"
                  />
                  <label htmlFor="courier">Личный курьер</label>
                </div>
                <div className="checkbox">
                  <input
                    className="custom-radio"
                    name="delivery-method"
                    type="radio"
                    id="pickup"
                    value="pickup"
                  />
                  <label htmlFor="pickup">Самовывоз</label>
                </div>
              </div>
            </div>
            <div className="ordering-items mob-step-2">
              <div className="ordering-title">Ваши личные данные</div>
              <div className="ordering-item wide">
                <label className="input-title">Фамилия и имя*</label>
                <input required className="input" type="text" />
              </div>
              <div className="ordering-item">
                <label className="input-title">Email адрес*</label>
                <input required className="input" type="text" />
              </div>
              <div className="ordering-item">
                <label className="input-title">Телефон*</label>
                <input required className="input" type="text" />
              </div>
              <div className="col-12">
                <div className="ordering-total">
                  Общая стоимость товара:
                  <span>8 449 р.</span>
                </div>
                <input
                  type="submit"
                  className="btn-blue"
                  value="Оформить заказ"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Order;
