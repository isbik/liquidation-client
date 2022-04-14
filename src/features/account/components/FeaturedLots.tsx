import Link from "next/link";
import React from "react";

type Props = {};

const FeaturedLots = (props: Props) => {
  return (
    <>
      <div className="empty-content">
        <p className="empty">Нет избранных лотов</p>
        <p className="empty">
          Перейдите в{" "}
          <Link href="/catalog">
            <a>каталог</a>
          </Link>
          , чтобы найти нужный лот
        </p>
      </div>

      <div className="catalog-wrapper">
        <div className="catalog-item">
          <div className="img-wrapper">
            <img src="/static/delivery.png" alt="" />
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
            <img src="/static/delivery.png" alt="" />
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
    </>
  );
};

export { FeaturedLots };
