import { Footer, Header } from "@/components";
import React from "react";

type Props = {};

const FavoriteLots = (props: Props) => {
  return (
    <>
      <Header />

      <section className="account-section">
        <div className="container">
          <div className="col-12">
            <h1>Личный кабинет</h1>
            <h2>Мои ставки</h2>
          </div>
          <div className="col-8 col-m-12">
            <div className="account-tab-list">
              <div className="list-detail">
                <a className="active" href="favourite-lots" aria-current="page">
                  Лоты
                </a>
                <a href="favorites-organizations">Организации</a>
              </div>
            </div>
            {/* Empty lots */}
            {/* <div className="account-inner advertisement-inner favorite-lots">
              <div className="empty-content">
                <p className="empty">Нет избранных лотов</p>
                <p className="empty">
                  Перейдите в <a href="catalog">каталог</a>, чтобы найти
                  нужный лот
                </p>
              </div>
            </div> */}
            <div className="account-inner advertisement-inner favorite-lots">
              <div className="catalog-wrapper">
                <div className="catalog-item">
                  <div className="img-wrapper">
                    <img src="img/delivery.png" alt="" />
                  </div>
                  <div className="info-wrapper">
                    <div className="item-info item-info-left">
                      <div className="item-title">
                        Электролобзик WESTER
                        <span>20 штук</span>
                      </div>
                      <p>
                        Номер объявления:
                        <span>55672</span>
                      </p>
                      <p>
                        Создано:
                        <span>5 янв. 16:07</span>
                      </p>
                    </div>
                    <div className="item-info">
                      <div className="item-title">
                        Цена:
                        <span>70 000 ₽</span>
                      </div>
                      <div className="item-title">
                        Кол-во:
                        <span className="quantity">11 шт</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="catalog-item">
                  <div className="img-wrapper">
                    <img src="img/delivery.png" alt="" />
                  </div>
                  <div className="info-wrapper">
                    <div className="item-info item-info-left">
                      <div className="item-title">
                        Электролобзик WESTER
                        <span>20 штук</span>
                      </div>
                      <p>
                        Номер объявления:
                        <span>55672</span>
                      </p>
                      <p>
                        Создано:
                        <span>5 янв. 16:07</span>
                      </p>
                    </div>
                    <div className="item-info">
                      <div className="item-title">
                        Цена:
                        <span>300 000 ₽</span>
                      </div>
                      <div className="item-title">
                        Кол-во:
                        <span className="quantity">Не указано</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 col-m-12">
            <div className="navigation">
              <a href="#" className="nav-item">
                Сведения о компании
              </a>
              <a href="#" className="nav-item">
                Настройка аккаунта
              </a>
              <a href="#" className="nav-item">
                Мои ставки
              </a>
              <a href="#" className="nav-item">
                Мои объявления
              </a>
              <a href="#" className="nav-item active">
                Избранное
              </a>
              <a href="#" className="nav-item">
                Уведомления
              </a>
              <a href="#" className="nav-item">
                Корзина
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FavoriteLots;
