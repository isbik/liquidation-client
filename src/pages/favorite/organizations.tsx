import { Footer, Header } from "@/components";
import { useStore } from "effector-react";
import React, { useEffect } from "react";
import {
  $favoriteOrganizations,
  fetchFavoriteOrganizations,
} from "../../features/favorite/organizations";

type Props = {};

const FavoriteOrganizations = (props: Props) => {
  const organizations = useStore($favoriteOrganizations);

  useEffect(() => {
    fetchFavoriteOrganizations();
  }, []);

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
            {organizations.length === 0 && (
              <div className="account-inner favorites-organizations">
                <div className="empty-content">
                  <p className="empty">Нет избранных организаций</p>
                  <p className="empty">
                    Перейдите в <a href="catalog">каталог</a>, чтобы найти
                    нужную организацию
                  </p>
                </div>
              </div>
            )}
            <div className="account-inner favorites-organizations">
              <div className="organization-items">
                {organizations.map((organization) => (
                  <div key={organization.id} className="organization-item">
                    <div className="img-wrapper">
                      <img src="img/org1.png" alt="" />
                    </div>
                    <div className="info-wrapper">
                      <div className="item-title">{organization.name}</div>
                      <div className="item-title">
                        Объявлений на продажу:
                        <span className="quantity">{organization.countLots}</span>
                      </div>
                    </div>
                  </div>
                ))}
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
