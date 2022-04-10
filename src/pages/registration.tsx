import { Footer, Header } from "@/components";
import React from "react";

type Props = {};

const Registration = (props: Props) => {
  return (
    <>
      <Header />

      <section className="reg">
        <div className="container">
          <h1 className="reg_title">Регистрация</h1>
          <h3 className="reg_subtitle">Данные организации</h3>
          <form action="" className="reg_form">
            <div className="reg_form-inner">
              <div className="mob-step-1">
                <div className="reg_form-item">
                  <span>Наименование организации*</span>
                  <input type="text" name="org_name" />
                </div>
                <div className="reg_form-item">
                  <span>ИНН организации*</span>
                  <input type="text" name="INN" />
                </div>
              </div>
              <div className="mob-step-2">
                <div className="reg_form-item">
                  <span>ОГРН организации*</span>
                  <input type="text" name="OQRN" />
                </div>
                <div className="reg_form-item">
                  <span>КПП организации*</span>
                  <input type="text" name="KPP" />
                </div>
                <div className="reg_form-item">
                  <span>Город*</span>
                  <input type="text" name="city" />
                </div>
                <div className="reg_form-item">
                  <span>Наименование организации*</span>
                  <input type="text" />
                </div>
                <div className="reg_form-item">
                  <span>Фактический адрес*</span>
                  <input type="text" name="fact_adress" />
                </div>
                <div className="reg_form-item">
                  <span>Юридический адрес*</span>
                  <input type="text" name="yur_adress" />
                </div>
                <div className="reg_form-item">
                  <span>Почтовый индекс*</span>
                  <input type="text" name="mail_index" />
                </div>
                <div className="reg_form-item">
                  <span>Телефон*</span>
                  <input type="text" name="phone" />
                </div>
                <div className="reg_form-item">
                  <span>Email</span>
                  <input type="text" name="e-mail" />
                </div>
              </div>
            </div>
            <h3 className="reg_subtitle">Данные руководителя</h3>
            <div className="reg_form-inner">
              <div className="mob-step-3">
                <div className="reg_form-item">
                  <span>ФИО*</span>
                  <input type="text" name="ФИО" />
                </div>
                <div className="reg_form-item">
                  <span>Должность*</span>
                  <input type="text" name="post" />
                </div>
                <div className="reg_form-item">
                  <span>Телефон*</span>
                  <input type="text" name="phone" />
                </div>
                <div className="reg_form-item">
                  <span>КПП организации*</span>
                  <input type="text" name="KPP" />
                </div>
                <div className="reg_form-item">
                  <span>Email*</span>
                  <input type="text" name="e-mail" />
                </div>
              </div>
              <div className="mob-step-4">
                <div className="reg_form-item">
                  <span>Придумайте пароль*</span>
                  <input type="password" />
                </div>
                <div className="reg_form-item">
                  <span>Повторите пароль*</span>
                  <input type="password" />
                </div>
              </div>
            </div>
            <a data-fancybox href="#hidden" className="reg_btn">
              Зарегестрироваться
            </a>
            <p className="reg_text">
              Нажимая на кнопку, вы даете согласие на обработку персональных
              данных и соглашаетесь c политикой конфиденциальности
            </p>
          </form>
        </div>
      </section>

      <div
        className="contacts-popup reg-popup"
        style={{ display: "none" }}
        id="hidden"
      >
        <div className="title">Заявка на регистрацию успешно отправлена!</div>
        <p>
          Письмо о регистрации было отправлено на почтовый адрес
          xxxxxxxx123@gmail.com
        </p>
        <p>
          Проверка компании из открытых источников может занимать несколько
          дней.
        </p>
        <a href="#">Готово</a>
      </div>

      <Footer />
    </>
  );
};

export default Registration;
