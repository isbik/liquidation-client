import { Footer, Header } from "@/components";
import React from "react";

type Props = {};

const Delivery = (props: Props) => {
  return (
    <>
      <Header />

      <section className="about_delivery">
        <div className="container">
          <h1>Доставка</h1>
          <h3 className="delivery_wrapper-subtitle">Политика доставки</h3>
          <p className="delivery_wrapper-text">
            Все заказы обрабатываются в течение 1-7 рабочих дней (исключая
            выходные и праздничные дни) после получения электронного письма с
            подтверждением заказа. Вы получите еще одно уведомление, когда ваш
            заказ будет отправлен.
          </p>
        </div>
      </section>

      <section className="delivery_info">
        <div className="container">
          <div className="delivery_info-wrapper">
            <div className="delivery_info-img">
              <img src="img/delivery.png" alt="" />
            </div>
            <div className="delivery_info-inner">
              <h3 className="delivery_info-inner-title">Размеры доставки</h3>

              <div className="deliver_info-material">
                <ul>
                  <li>
                    Мы предоставляем несколько вариантов размеров доставки на
                    выбор:
                  </li>
                  <li>
                    Поддон 1200*800*100 <br />
                    Поддон 1200*1000*100
                  </li>
                  <li>Европаллет 800*1200*145</li>
                  <li>
                    Грузовик 1.5 - 1.7 тонн <br />
                    Грузовик 3.5 тонн
                    <br />
                    Грузовик 5 тонн
                    <br />
                    Грузовик 10-15 тонн
                  </li>
                  <li>Еврофура 20-22 тонны</li>
                  <li>
                    Контейнер 22 тонны
                    <br />
                    Контейнер 26 тонн
                    <br />
                    Контейнер 30 тонн
                    <br />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tech_support">
        <div className="container">
          <div className="tech_support-wrapper">
            <div className="tech_support-inner">
              <div className="tech_support-title">Возникли вопросы?</div>
              <div className="tech_support-info">
                <div className="tech_form-title">Номер горячей линии</div>
                <div className="tech-form-subtitle">
                  <a href="">8 (800) 555-35-35</a>
                </div>
                <div className="tech_form-title">Почта для вопросов</div>
                <div className="tech-form-subtitle tech-form-mail">
                  <a href="">info.liquidationmarket@gmail.com</a>
                </div>
              </div>
            </div>
            <form action="" className="help_form tech_support_form">
              <input type="text" name="e-mail" placeholder="Email" />
              <input type="text" name="name" placeholder="Имя" />
              <input
                type="text"
                name="how-can-help"
                placeholder="Чем мы можем помочь?"
              />
              <input type="submit" value="Отправить" />
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Delivery;
