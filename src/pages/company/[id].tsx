import React from "react";

type Props = {};

const Company = (props: Props) => {
  return (
    <section className="company-single-card">
      <div className="container">
        <div className="col-12">
          <h1>Lukoil</h1>
        </div>
        <div className="col-12">
          <div className="company-card">
            <div className="col-4 col-m-12">
              <div className="img-wrapper">
                <img src="/static/company-card1.png" alt="" />
              </div>
            </div>
            <div className="col-7 col-m-12">
              <div className="items-wrapper">
                <div className="item-wrapper">
                  <div className="item-title">Название организации</div>
                  <div className="item-desc">ООО “Lukoil”</div>
                </div>
                <div className="item-wrapper">
                  <div className="item-title">Тип организации</div>
                  <div className="item-desc">Юридическое лицо</div>
                </div>
                <div className="item-wrapper">
                  <div className="item-title">Город</div>
                  <div className="item-desc">Воронеж</div>
                </div>
                <div className="item-wrapper">
                  <div className="item-title">Регион</div>
                  <div className="item-desc">Воронежская область</div>
                </div>
                <div className="item-wrapper">
                  <div className="item-title">Email</div>
                  <div className="item-desc">titawe5324@ningame.com</div>
                </div>
                <div className="item-wrapper">
                  <div className="item-title">Телефоны</div>
                  <div className="item-desc item-number">+7 917 526-30-84</div>
                </div>
                <div className="item-wrapper">
                  <div className="item-title">Юридический адрес</div>
                  <div className="item-desc">
                    Город Воронеж,улица Труда 47б, 4 этаж, офис 13
                  </div>
                </div>
                <div className="item-wrapper">
                  <div className="item-title">Почтовый индекс</div>
                  <div className="item-desc">170000</div>
                </div>
                <div className="item-wrapper">
                  <div className="item-title">ИНН</div>
                  <div className="item-desc">836277184309</div>
                </div>
                <div className="item-wrapper">
                  <div className="item-title">ОГРН</div>
                  <div className="item-desc">10347234104801</div>
                </div>
                <div className="item-wrapper">
                  <div className="item-title">КПП</div>
                  <div className="item-desc">771238762</div>
                </div>
              </div>
            </div>
            <div className="col-1 company-star col-m-12">
              <div className="star-wrapper">
                <img src="/static/icons/star.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
