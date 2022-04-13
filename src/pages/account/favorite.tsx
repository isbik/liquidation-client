import { AccountWrapper } from "@/features/account/components";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

enum BetTab {
  "lots",
  "organizations",
}

const AccountFavoritePage = (props: Props) => {
  const [items] = useState([]);
  const [tab, setTab] = useState<BetTab>(BetTab.lots);

  const changeTab = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    tab: BetTab
  ) => {
    e.preventDefault();
    setTab(tab);
  };

  return (
    <AccountWrapper title="Избранное">
      <div className="account-inner advertisement-inner favorite-lots">
        <div className="account-tab-list">
          <div className="list-detail">
            <a
              onClick={(e) => changeTab(e, BetTab.lots)}
              className={clsx({ active: BetTab.lots === tab })}
            >
              Лоты
            </a>
            <a
              onClick={(e) => changeTab(e, BetTab.organizations)}
              className={clsx({ active: BetTab.organizations === tab })}
            >
              Организации
            </a>
          </div>
        </div>

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
      </div>

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
    </AccountWrapper>
  );
};

export default AccountFavoritePage;
