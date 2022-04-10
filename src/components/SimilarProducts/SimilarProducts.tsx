import React from "react";

type Props = {};

const SimilarProducts = (props: Props) => {
  return (
    <div className="container">
      <div className="col-12 catalog-inner similar-products">
        <div className="similar-title">Похожие товары</div>
        <div className="items-wrapper">
          <div className="col-3 col-m-6">
            <div className="item">
              <div className="img-wrapper">
                <img src="static/catalog-img1.png" alt="" />
              </div>
              <div className="item-info">KIA Rio седан, черный 1.6, Дизель</div>
              <div className="item-info">
                <span>Цена</span>
                586 000 Руб.
              </div>
              <div className="item-info">
                <span>Заканчивается</span>2 дня 16 часов
              </div>
              <a className="buy-btn" href="#">
                Купить
              </a>
            </div>
          </div>
          <div className="col-3 col-m-6">
            <div className="item">
              <div className="img-wrapper">
                <img src="static/catalog-img1.png" alt="" />
              </div>
              <div className="item-info">KIA Rio седан, черный 1.6, Дизель</div>
              <div className="item-info">
                <span>Цена</span>
                586 000 Руб.
              </div>
              <div className="item-info">
                <span>Заканчивается</span>2 дня 16 часов
              </div>
              <a className="buy-btn" href="#">
                Купить
              </a>
            </div>
          </div>
          <div className="col-3 col-m-6">
            <div className="item">
              <div className="img-wrapper">
                <img src="static/catalog-img1.png" alt="" />
              </div>
              <div className="item-info">KIA Rio седан, черный 1.6, Дизель</div>
              <div className="item-info">
                <span>Цена</span>
                586 000 Руб.
              </div>
              <div className="item-info">
                <span>Заканчивается</span>2 дня 16 часов
              </div>
              <a className="buy-btn" href="#">
                Купить
              </a>
            </div>
          </div>
          <div className="col-3 col-m-6">
            <div className="item">
              <div className="img-wrapper">
                <img src="static/catalog-img1.png" alt="" />
              </div>
              <div className="item-info">KIA Rio седан, черный 1.6, Дизель</div>
              <div className="item-info">
                <span>Цена</span>
                586 000 Руб.
              </div>
              <div className="item-info">
                <span>Заканчивается</span>2 дня 16 часов
              </div>
              <a className="buy-btn" href="#">
                Купить
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SimilarProducts };
