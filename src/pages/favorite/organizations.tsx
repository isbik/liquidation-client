import { Footer, Header } from "@/components";
import React from "react";

type Props = {};

const FavoriteOrganizations = (props: Props) => {
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
                <a href="favourite-lots" aria-current="page">
                  Лоты
                </a>
                <a className="active" href="favorites-organizations">
                  Организации
                </a>
              </div>
            </div>

            {/* Empty organizations */}
            {/* <div className="account-inner favorites-organizations">
              <div className="empty-content">
                <p className="empty">Нет избранных организаций</p>
                <p className="empty">
                  Перейдите в <a href="catalog">каталог</a>, чтобы найти
                  нужную организацию
                </p>
              </div>
            </div> */}
            <div className="account-inner favorites-organizations">
              <div className="organization-items">
                <div className="organization-item">
                  <div className="img-wrapper">
                    <img src="img/org1.png" alt="" />
                  </div>
                  <div className="info-wrapper">
                    <div className="item-title">Группа НММК</div>
                    <div className="item-title">
                      Объявлений на продажу:
                      <span className="quantity">72</span>
                    </div>
                  </div>
                </div>
                <div className="organization-item">
                  <div className="img-wrapper">
                    <img src="img/org1.png" alt="" />
                  </div>
                  <div className="info-wrapper">
                    <div className="item-title">АО “Гайский КоП”</div>
                    <div className="item-title">
                      Объявлений на продажу:
                      <span className="quantity">72</span>
                    </div>
                  </div>
                </div>
                <div className="organization-item">
                  <div className="img-wrapper">
                    <img src="img/org1.png" alt="" />
                  </div>
                  <div className="info-wrapper">
                    <div className="item-title">ПАО “КазаньМеталДиз”</div>
                    <div className="item-title">
                      Объявлений на продажу:
                      <span className="quantity">3</span>
                    </div>
                  </div>
                </div>
                <div className="organization-item">
                  <div className="img-wrapper">
                    <img src="img/org1.png" alt="" />
                  </div>
                  <div className="info-wrapper">
                    <div className="item-title">ООО “Палис”</div>
                    <div className="item-title">
                      Объявлений на продажу:
                      <span className="quantity">142</span>
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

export default FavoriteOrganizations;
