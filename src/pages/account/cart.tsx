import { Footer, Header, PageHead } from "@/components";
import Link from "next/link";
import React from "react";

type Props = {};

const CartPage = (props: Props) => {
  return (
    <>
      <PageHead title="Корзина" />

      <Header />
      <section className="account-section cart-section">
        <div className="container">
          <form action="">
            <div className="col-12 cart-title">
              <h1>Корзина</h1>
              <span className="cart-id">
                <span>№</span>xxxx-xxxx-xxxx
              </span>
            </div>
            <div className="col-12 cart-checkbox">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span>Выделить все</span>
              </label>
            </div>
            <div className="col-9 col-m-12">
              <div className="account-cart">
                <div className="cart-titles">
                  <div className="col-8">
                    <div className="title">Наименование</div>
                  </div>
                  <div className="col-1">
                    <div className="title">Цена</div>
                  </div>
                  <div className="col-3">
                    <div className="title">Кол-во</div>
                  </div>
                </div>
                <div className="cart-items">
                  <div className="cart-item">
                    <div className="col-3">
                      <label className="custom-checkbox">
                        <input type="checkbox" />
                      </label>
                      <div className="img-wrapper">
                        <img src="/static/cart-item.png" alt="" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="info">
                        <div className="title">Iphone Xr уцененные</div>
                        <p>2020-2022 года, 64-256 гб, 10 штук</p>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="item-info item-price">240 000 ₽</div>
                    </div>
                    <div className="col-2">
                      <div className="item-info item-qty">1 лот</div>
                    </div>
                    <div className="col-1">
                      <div className="icons-wrapper">
                        <i className="add-favorite active"></i>
                        <i className="remove-item"></i>
                      </div>
                    </div>
                  </div>
                  <div className="cart-item">
                    <div className="col-3">
                      <label className="custom-checkbox">
                        <input type="checkbox" />
                      </label>
                      <div className="img-wrapper">
                        <img src="/static/cart-item1.png" alt="" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="info">
                        <div className="title">BMW 5 series седан</div>
                        <p>Хорошее состояние240 л.с.</p>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="item-info item-price">4 290 000 ₽</div>
                    </div>
                    <div className="col-2">
                      <div className="item-info item-qty">1 ед.</div>
                    </div>
                    <div className="col-1">
                      <div className="icons-wrapper">
                        <i className="add-favorite"></i>
                        <i className="remove-item"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/catalog">
                  <a className="continue-shop">Продолжить покупку</a>
                </Link>
              </div>
            </div>
            <div className="col-3 col-m-12">
              <div className="cart-order">
                <div className="title">Ваш заказ</div>
                <div className="cart-info">
                  <div className="item">
                    Выбрано товаров:
                    <span>3 шт.</span>
                  </div>
                  <div className="item">
                    Вес заказа:
                    <span>1.8 т</span>
                  </div>
                  <div className="item">
                    Общая стоимость:
                    <span>4 530 000 ₽</span>
                  </div>
                </div>
                <div className="input-wrapper">
                  <input placeholder="Введите промокод" type="text" />
                  <input type="submit" value="Оформить заказ" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CartPage;
