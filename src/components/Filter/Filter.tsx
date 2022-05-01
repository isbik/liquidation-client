import { $filters } from "@/features/catalog/catalog.model";
import { CONDITION } from "@/lib";
import { useStore } from "effector-react";
import React, { useState } from "react";

type Props = {};

const Filter = () => {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [condition, setCondition] = useState("");

  const handleChangeCondition = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
  };

  const filters = useStore($filters);

  return (
    <form className="filter-catalog" action="">
      <div className="filter--box show">
        <div className="filter__drop-section price-filter">
          <div className="filter__drop-title">Цена</div>

          <div className="filter-drop-item">
            <div className="filter-value-wrapper">
              <div className="filter-value">
                <input
                  onChange={(event) => setPriceFrom(event.target.value)}
                  value={priceFrom}
                  className="w-full h-full p-2"
                  type="number"
                  placeholder="От"
                />
              </div>
              <div className="filter-value">
                <input
                  onChange={(event) => setPriceTo(event.target.value)}
                  value={priceTo}
                  className="w-full h-full p-2"
                  type="number"
                  placeholder="До"
                />
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
                  <input
                    value={value}
                    onChange={handleChangeCondition}
                    type="checkbox"
                  />
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
