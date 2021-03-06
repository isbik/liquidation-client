import React from "react";

type Props = {};

const PopupCatalog = (props: Props) => {
  return (
    <div
      className="popup-catalog"
      style={{
        display: "none",
        width: 755,
      }}
      id="hidden"
    >
      <div className="close-btn">
        <div className="leftright"></div>
        <div className="rightleft"></div>
      </div>
      <div className="links-list">
        <a href="#">
          Медицинские расходные материалы и одноразовые инструменты
        </a>
        <a href="#">Медицинское оборудование, инструменты</a>
        <a href="#">Весоизмерительное оборудование</a>
        <a href="#">Газовое и топливное оборудование</a>
        <a href="#">Горнодобывающее и перерабатывающее оборудование</a>
        <a href="#">Грузоподъемное оборудование и машины, лифты</a>
        <a href="#">ДВС универсального назначения</a>
        <a href="#">Деревообрабатывающее оборудование</a>
        <a href="#">Железнодорожное оборудование</a>
        <a href="#">Звуковое, световое оборудование</a>
        <a href="#">
          Инструмент ручной, электрический, гидравлический, пневматический
        </a>
        <a href="#">Коммунальное оборудование</a>
        <a href="#">Котельное оборудование</a>
        <a href="#">Лабораторное оборудование</a>
        <a href="#">Металлообрабатывающее оборудование</a>
        <a href="#">Металлургическое и кузнечно-прессовое оборудование</a>
        <a href="#">Насосы, компрессоры, гидравлика, пневматика</a>
        <a href="#">Нефте, газодобывающее, буровое оборудование</a>
        <a href="#">Оборудование для автозаправочных станций (АЗС)</a>
        <a href="#">
          Оборудование для автосервиса, ремонта и обслуживания автомобилей
        </a>
        <a href="#">
          Оборудование для литья, обработки и переработки пластмасс
        </a>
        <a href="#">Оборудование для обработки и очистки воды</a>
        <a href="#">Оборудование для переработки отходов</a>
        <a href="#">
          Оборудование для производства упаковки, упаковочное оборудование
        </a>
        <a href="#">
          Оборудование для производства электротехнической продукции
        </a>
        <a href="#">Оборудование для электростанций и производства энергии</a>
        <a href="#">Парикмахерское оборудование</a>
        <a href="#">Пищевое оборудование</a>
        <a href="#">Подшипники и детали узлов</a>
        <a href="#">Полиграфическое оборудование</a>
        <a href="#">Противопожарное, охранное, спасательное оборудование</a>
        <a href="#">Прочее промышленное оборудование</a>
        <a href="#">Резервуарное оборудование</a>
        <a href="#">Сварачное и паяльное оборудование</a>
        <a href="#">Сельхозоборудование, животноводческое оборудование</a>
        <a href="#">Складское оборудование</a>
        <a href="#">Строительное, дорожное оборудование</a>
        <a href="#">Фильтры и фильтроэлементы</a>
        <a href="#">Химическое оборудование</a>
        <a href="#">Холодильное оборудование</a>
        <a href="#">Цепи, редукторы, вариаторы</a>
        <a href="#">Швейное, ткацкое оборудование</a>
      </div>
    </div>
  );
};

export default PopupCatalog;
