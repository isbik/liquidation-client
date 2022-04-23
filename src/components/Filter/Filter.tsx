import { CONDITION } from "@/lib";
import React from "react";

type Props = {};

const Filter = (props: Props) => {
  return (
    <form className="filter-catalog" action="">
      <div className="filter--box show">
        <div className="filter__drop-section price-filter">
          <div className="filter__drop-title">Цена</div>

          <div className="filter-drop-item">
            <div className="filter-value-wrapper">
              <div className="filter-value">
                От
                <span className="lower" id="lower"></span>
              </div>
              <div className="filter-value">
                До
                <span className="upper" id="upper"></span>
              </div>
            </div>
            <div id="price-filter"></div>
            <div className="line-fake"></div>
          </div>
        </div>
      </div>
      <div className="filter--box show">
        <div className="filter__drop-section filter__mechanism">
          <div className="filter__drop-heading filter__heading-block">
            <div className="filter__drop-title">Состояние</div>
          </div>
          <div className="checkbox-wrap filter-drop-item">
            {CONDITION.map(({ value, text }) => (
              <div key={value} className="checkbox-inner">
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span>{text}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="filter--box show">
        <div className="filter__drop-section filter__mechanism">
          <div className="filter__drop-heading filter__heading-block">
            <div className="filter__drop-title">Тип аукциона</div>
          </div>
          <div className="checkbox-wrap filter-drop-item">
            <div className="checkbox-inner">
              <label className="custom-checkbox">
                <input disabled checked={true} type="checkbox" />
                <span>Стандартный</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="filter--box show">
        <div className="filter__drop-section filter__mechanism">
          <div className="filter__drop-heading filter__heading-block">
            <div className="filter__drop-title">Размер лота</div>
            {/* Коробка Поддон Европаллет Грузовик Еврофура Контейнер */}
          </div>
          <div className="checkbox-wrap filter-drop-item">
            <div className="checkbox-inner">
              <label className="custom-checkbox">
                <input disabled type="checkbox" />
                <span>Коробка</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export { Filter };
