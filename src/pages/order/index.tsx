import { PageHead } from "@/components";
import {
  $selectedCartItemsLength,
  $totalPrice,
  $totalWeight
} from "@/features/cart/cart.model";
import {
  $orderData,
  createOrder,
  setOrderData
} from "@/features/order/create_order.model";
import { DELIVERY_METHODS } from "@/lib";
import { useStore } from "effector-react";
import Link from "next/link";
import React from "react";

const PreOrderPage = () => {
  const totalWeight = useStore($totalWeight);
  const totalPrice = useStore($totalPrice);
  const selectedCartItemsLength = useStore($selectedCartItemsLength);

  const orderData = useStore($orderData);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    createOrder();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderData({ key: event.target.name, value: event.target.value });
  };

  return (
    <>
      <PageHead title="Оформление заказа" />

      {selectedCartItemsLength === 0 ? (
        <div className="container">
          <div className="col-12">
            <h1 className="mb-4">
              Для заказа нужно выбрать продукты из корзины
            </h1>
            <Link href="/account/cart">
              <a className="text-black">Перейти в корзину</a>
            </Link>
          </div>
        </div>
      ) : (
        <form action="" className="ordering" onSubmit={handleSubmit}>
          <div className="container">
            <div className="col-12">
              <h1>Заказ товара</h1>
            </div>
            <div className="col-12">
              <div className="ordering-items mob-step-1">
                <div className="ordering-title">Выберите способ получения</div>
                <div className="ordering-item">
                  <label className="input-title">Город*</label>
                  <input
                    onChange={handleChange}
                    value={orderData.city}
                    name="city"
                    required
                    className="input"
                    type="text"
                  />
                </div>
                <div className="ordering-item">
                  <label className="input-title">Улица*</label>
                  <input
                    onChange={handleChange}
                    value={orderData.street}
                    name="street"
                    required
                    className="input"
                    type="text"
                  />
                </div>
                <div className="ordering-item">
                  <label className="input-title">Квартира</label>
                  <input
                    onChange={handleChange}
                    value={orderData.apartment}
                    name="apartment"
                    className="input"
                    type="text"
                  />
                </div>
                <div className="ordering-item">
                  <label className="input-title">Индекс*</label>
                  <input
                    onChange={handleChange}
                    value={orderData.postalCode}
                    name="postalCode"
                    required
                    className="input"
                    type="text"
                  />
                </div>
                <div className="ordering-checkboxes">
                  {DELIVERY_METHODS.map(({ value, text }) => (
                    <div
                      onClick={() =>
                        setOrderData({ key: "deliveryMethod", value })
                      }
                      className="checkbox"
                      key={value}
                    >
                      <input
                        className="custom-radio"
                        type="radio"
                        name="deliveryMethod"
                        checked={orderData.deliveryMethod === value}
                        value={value}
                        required
                      />
                      <label htmlFor={value}>{text}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ordering-items mob-step-2">
                <div className="ordering-title">Ваши личные данные</div>
                <div className="ordering-item wide">
                  <label className="input-title">Фамилия и имя*</label>
                  <input
                    onChange={handleChange}
                    value={orderData.fio}
                    name="fio"
                    required
                    className="input"
                    type="text"
                  />
                </div>
                <div className="ordering-item">
                  <label className="input-title">Email адрес*</label>
                  <input
                    onChange={handleChange}
                    value={orderData.email}
                    name="email"
                    required
                    className="input"
                    type="text"
                  />
                </div>
                <div className="ordering-item">
                  <label className="input-title">Телефон*</label>
                  <input
                    onChange={handleChange}
                    value={orderData.phone}
                    name="phone"
                    required
                    className="input"
                    type="text"
                  />
                </div>
                <div className="col-12">
                  <div className="my-4 ordering-total">
                    Общая стоимость товара: <span>{totalPrice} р.</span>
                  </div>
                  <div className="my-4 ordering-total">
                    Общий вес товара: <span>{totalWeight} тонн</span>
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
      )}

      
    </>
  );
};

PreOrderPage.requireAuth = true;

export default PreOrderPage;
