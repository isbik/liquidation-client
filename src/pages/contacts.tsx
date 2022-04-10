import { Footer, Header } from "@/components";
import React from "react";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <>
      <Header />
      <section className="contacts">
        <div className="container">
          <div className="contacts_wrapper">
            <h2 className="contacts_title">Контактная информация</h2>
            <p className="contacts_subtitle">
              Пишите и звоните нам. Для нас очень важно общение с нашими
              клиентами
            </p>
            <div className="contacts_content">
              <div className="contacts_content-left">
                <div className="contacts_item">
                  <h5>Номер горячей линии</h5>
                  <a href="tel:8 (800) 555-35-35">8 (800) 555-35-35</a>
                </div>
                <div className="contacts_item">
                  <h5>Прием звонков с 7:00 до 23:00</h5>
                  <h5>Понедельник - Воскресенье</h5>
                </div>
                <div className="contacts_item">
                  <h5>Почта для заказов</h5>
                  <a
                    className="mail-link"
                    href="mailto:zakaz.liquidationmarket@gmail.com"
                  >
                    zakaz.liquidationmarket@gmail.com
                  </a>
                </div>
                <div className="contacts_item">
                  <h5>Почта для вопросов</h5>
                  <a
                    className="mail-link"
                    href="mailto:info.liquidationmarket@gmail.com"
                  >
                    info.liquidationmarket@gmail.com
                  </a>
                </div>
              </div>
              <div className="contacts_content-right">
                <div className="contacts-title-mobile">Свяжитесь с нами</div>
                <form action="" className="question_form">
                  <div className="question_form-inner">
                    <span>Email</span>
                    <input type="text" name="e-mail" placeholder="Email" />
                  </div>
                  <div className="question_form-inner">
                    <span>ФИО</span>
                    <input type="text" name="ФИО" placeholder="ФИО" />
                  </div>
                  <div className="question_form-inner">
                    <span>Телефон</span>
                    <input type="text" name="phone" placeholder="Телефон" />
                  </div>
                  <div className="question_form-inner">
                    <span>Комментарий</span>
                    <textarea
                      name="comment"
                      id=""
                      cols={30}
                      rows={10}
                      placeholder="Комментарий"
                    ></textarea>
                  </div>
                  <a data-fancybox href="#hidden">
                    Задать вопрос
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contacts-popup" style={{ display: "none" }} id="hidden">
        <div className="title">Вопрос успешно отправлен!</div>
        <p>
          Ваш вопрос был отправлен к нам в тех. поддержку. Ожидайте получения
          письма на почту, которую вы указывали в заявке.
        </p>
        <a href="#">Готово</a>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
