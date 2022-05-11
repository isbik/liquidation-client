import { $filters, setFilters } from "@/features/catalog/catalog.model";
import { Condition } from "@/features/product/product.types";
import { CONDITION } from "@/lib";
import { useStore } from "effector-react";
import React from "react";

const Filter = () => {
  const filters = useStore($filters);

  const updateFilters = (data: Record<string, any>) => {
    setFilters(data);
  };

  const handleChangeCondition = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value as Condition;

    const values = filters.condition.includes(value)
      ? filters.condition.filter((v) => v !== value)
      : [...filters.condition, value];

    setFilters({ condition: values });
  };

  return (
    <form className="filter-catalog" action="">
      <div className="filter--box show">
        <div className="filter__drop-section price-filter">
          <div className="filter__drop-title">Цена</div>

          <div className="filter-drop-item">
            <div className="filter-value-wrapper">
              <div className="filter-value">
                <input
                  onChange={(event) =>
                    updateFilters({ priceFrom: event.target.value })
                  }
                  value={filters.priceFrom}
                  className="w-full h-full p-2"
                  type="number"
                  placeholder="От"
                />
              </div>
              <div className="filter-value">
                <input
                  onChange={(event) =>
                    updateFilters({ priceTo: event.target.value })
                  }
                  value={filters.priceTo}
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
