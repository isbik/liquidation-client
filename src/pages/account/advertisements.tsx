import { AccountWrapper } from "@/features/account/components";
import React, { useState } from "react";

type Props = {};

const AccountAdvertisementsPage = (props: Props) => {
  const [advertisements] = useState([]);

  return (
    <AccountWrapper title="Настройки аккаунта">
      <div className="account-inner advertisement-inner">
        <div className="info">
          <h3>Каталог</h3>
          <a href="#" className="btn-blue mobile-hidden">
            Добавить объявление
          </a>
        </div>
        <div className="catalog-wrapper">
          {advertisements.length === 0 && (
            <div className="empty-content">
              <p className="empty">Нет действующих объявлений</p>
            </div>
          )}

          <div className="catalog-item">
            <div className="img-wrapper">
              <img src="/static/delivery.png" alt="" />
            </div>
            <div className="info-wrapper">
              <div className="item-info">
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
              <img src="/static/delivery.png" alt="" />
            </div>
            <div className="info-wrapper">
              <div className="item-info">
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
        <a href="#" className="pc-hidden btn-blue">
          Добавить объявление
        </a>
      </div>
    </AccountWrapper>
  );
};

export default AccountAdvertisementsPage;
