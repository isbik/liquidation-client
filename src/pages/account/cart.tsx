import { Footer, Header, PageHead } from "@/components";
import {
  $cartItems,
  $cartItemsLength,
  $coupon,
  $selectedCartItems,
  $selectedCartItemsLength,
  $totalPrice,
  $totalWeight,
  resetSelectedCartItems,
  selectAllCartItems,
  setCoupon,
  toggleSelectCartItem,
} from "@/features/cart/cart.model";
import { useStore } from "effector-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CartPage = () => {
  const router = useRouter();
  const coupon = useStore($coupon);
  const cartItems = useStore($cartItems);
  const cartItemsLength = useStore($cartItemsLength);
  const selectedCartItems = useStore($selectedCartItems);
  const selectedCartItemsLength = useStore($selectedCartItemsLength);
  const totalWeight = useStore($totalWeight);
  const totalPrice = useStore($totalPrice);

  const handleSelectAll = () => {
    if (cartItemsLength === selectedCartItemsLength) {
      resetSelectedCartItems();
    } else {
      selectAllCartItems();
    }
  };

  const handleSubmitMakeOrder = (event: React.MouseEvent) => {
    event.preventDefault();

    router.push("/order");
  };

  return (
    <>
      <PageHead title="Корзина" />

      <Header />
      <section className="account-section cart-section">
        <div className="container">
          <form action="">
            <div className="col-12 cart-title">
              <h1>Корзина</h1>
            </div>
            <div className="col-12 cart-checkbox">
              <label className="custom-checkbox">
                <input
                  onChange={handleSelectAll}
                  checked={selectedCartItemsLength === cartItemsLength}
                  type="checkbox"
                />
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
                  {cartItems.map((cartItem) => (
                    <div key={cartItem.id} className="cart-item">
                      <div className="col-3">
                        <label className="custom-checkbox">
                          <input
                            checked={selectedCartItems
                              .map(({ id }) => id)
                              .includes(cartItem.id)}
                            onChange={() => toggleSelectCartItem(cartItem)}
                            type="checkbox"
                          />
                        </label>
                        <div className="img-wrapper">
                          <img src={cartItem.images[0]?.url} alt="" />
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="info">
                          <div className="title">{cartItem.name}</div>
                          <p>{cartItem.quantity} штук</p>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="item-info item-price">
                          {cartItem.price} ₽
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="item-info item-qty">1 лот</div>
                      </div>
                      <div className="col-1">
                        <div className="icons-wrapper">
                          <i className="add-favorite active"></i>
                        </div>
                      </div>
                    </div>
                  ))}
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
                    <span>{selectedCartItemsLength} шт.</span>
                  </div>
                  <div className="item">
                    Вес заказа:
                    <span>{totalWeight} т</span>
                  </div>
                  <div className="item">
                    Общая стоимость:
                    <span>{totalPrice} ₽</span>
                  </div>
                </div>
                <div className="input-wrapper">
                  <input
                    value={coupon}
                    onChange={(event) => setCoupon(event.target.value)}
                    placeholder="Введите промокод"
                    type="text"
                  />
                  <input
                    onClick={handleSubmitMakeOrder}
                    className="disabled:opacity-50"
                    disabled={selectedCartItemsLength === 0}
                    type="submit"
                    value="Оформить заказ"
                  />
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
