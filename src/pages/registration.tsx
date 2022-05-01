import { Footer, Header, PageHead } from "@/components";
import { $user } from "@/features/user/user.model";
import { useStore } from "effector-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  $authForm,
  changeAuthForm,
  registerUser,
} from "../features/auth/auth.model";

type Props = {};

const Registration = (props: Props) => {
  const router = useRouter();
  const user = useStore($user);
  const authForm = useStore($authForm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeAuthForm({ key: event.target.name, value: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    registerUser();
  };

  useEffect(() => {
    if (user) router.replace("/account");
  }, [router, user]);

  return (
    <>
      <PageHead title="Регистрация" />

      <Header />

      <section className="reg">
        <div className="container">
          <h1 className="reg_title">Регистрация</h1>
          <h3 className="reg_subtitle">Данные организации</h3>
          <form action="" className="reg_form" onSubmit={handleSubmit}>
            <div className="reg_form-inner">
              <div className="mob-step-1">
                <div className="reg_form-item">
                  <span>Наименование организации*</span>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="organizationName"
                    value={authForm.organizationName}
                  />
                </div>
                <div className="reg_form-item">
                  <span>ИНН организации*</span>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="INN"
                    value={authForm.INN}
                  />
                </div>
              </div>
              <div className="mob-step-2">
                <div className="reg_form-item">
                  <span>ОГРН организации*</span>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="ORGN"
                    value={authForm.ORGN}
                  />
                </div>
                <div className="reg_form-item">
                  <span>КПП организации*</span>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="KPP"
                    value={authForm.KPP}
                  />
                </div>
                <div className="reg_form-item">
                  <span>Город*</span>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="city"
                    value={authForm.city}
                  />
                </div>
                <div className="reg_form-item">
                  <span>Фактический адрес*</span>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="factAddress"
                    value={authForm.factAddress}
                  />
                </div>
                <div className="reg_form-item">
                  <span>Юридический адрес*</span>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="legalAddress"
                    value={authForm.legalAddress}
                  />
                </div>
                <div className="reg_form-item">
                  <span>Почтовый индекс*</span>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="postalCode"
                    value={authForm.postalCode}
                  />
                </div>
                <div className="reg_form-item">
                  <span>Телефон*</span>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="phone"
                    value={authForm.phone}
                  />
                </div>
                <div className="reg_form-item">
                  <span>Email</span>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="email"
                    value={authForm.email}
                  />
                </div>
              </div>
            </div>
            <h3 className="reg_subtitle">Данные руководителя</h3>
            <div className="reg_form-inner">
              <div className="mob-step-3">
                <div className="reg_form-item">
                  <span>ФИО*</span>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="fio"
                    value={authForm.fio}
                  />
                </div>
                <div className="reg_form-item">
                  <span>Должность*</span>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="position"
                    value={authForm.position}
                  />
                </div>
                <div className="reg_form-item">
                  <span>Телефон*</span>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="directorPhone"
                    value={authForm.directorPhone}
                  />
                </div>

                <div className="reg_form-item">
                  <span>Email*</span>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="directorEmail"
                    value={authForm.directorEmail}
                  />
                </div>
              </div>
              <div className="mob-step-4">
                <div className="reg_form-item">
                  <span>Придумайте пароль*</span>
                  <input onChange={handleChange} type="password" />
                </div>
                <div className="reg_form-item">
                  <span>Повторите пароль*</span>
                  <input onChange={handleChange} type="password" />
                </div>
              </div>
            </div>
            <button type="submit" className="reg_btn">
              Зарегистрироваться
            </button>
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
