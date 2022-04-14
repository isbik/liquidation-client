import { useStore } from "effector-react";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  $favoriteLots,
  fetchFavoriteLots,
  fetchFavoriteLotsFx,
} from "../lots.model";

const FeaturedLots = () => {
  const lots = useStore($favoriteLots);
  const loading = useStore(fetchFavoriteLotsFx.pending);

  useEffect(() => {
    fetchFavoriteLots();
  }, []);

  if (loading) return "Загрузка ...";

  if (lots.length === 0)
    return (
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
    );

  return (
    <>
      <div className="catalog-wrapper">
        {lots.map((lot) => (
          <div key={lot.id} className="catalog-item">
            <div className="img-wrapper">
              <img src="/static/delivery.png" alt="" />
            </div>
            <div className="info-wrapper">
              <div className="item-info item-info-left">
                <div className="item-title">
                  {lot.name}
                  <span>{lot.quantity} штук</span>
                </div>
                <p>
                  Номер объявления:
                  <span>55672</span>
                </p>
                <p>
                  Создано:
                  <span>{lot.createdAt}</span>
                </p>
              </div>
              <div className="item-info">
                <div className="item-title">
                  Цена:
                  <span>{lot.recommendedRetailPrice} ₽</span>
                </div>
                <div className="item-title">
                  Кол-во:
                  <span className="quantity">{lot.quantity} шт</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { FeaturedLots };
