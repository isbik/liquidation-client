import Link from "next/link";
import React from "react";

type Props = {};

const FeaturedLots = (props: Props) => {
  return (
    <>
      <div className="account-inner favorites-organizations">
        <div className="empty-content">
          <p className="empty">Нет избранных организаций</p>
          <p className="empty">
            Перейдите в{" "}
            <Link href="/catalog">
              <a>каталог</a>
            </Link>
            , чтобы найти нужную организацию
          </p>
        </div>
      </div>

      <div className="account-inner favorites-organizations">
        <div className="organization-items">
          <div className="organization-item">
            <div className="img-wrapper">
              <img src="/static/org1.png" alt="" />
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
              <img src="/static/org1.png" alt="" />
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
              <img src="/static/org1.png" alt="" />
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
              <img src="/static/org1.png" alt="" />
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
    </>
  );
};

export { FeaturedLots };
