import { Footer, Header } from "@/components";
import React from "react";

type Props = {};

const Authorization = (props: Props) => {
  return (
    <>
      <Header />
      <section className="auth">
        <div className="auth_wrapper">
          <form action="" className="enter_form">
            <h3>Вход</h3>
            <div className="enter_form-wrapper">
              <h5>Телефон или Email:</h5>
              <input
                placeholder="Телефон или Email:"
                type="text"
                name="phone"
              />
            </div>
            <div className="enter_form-wrapper">
              <h5>Пароль:</h5>
              <input placeholder="Пароль:" type="password" name="password" />
            </div>
            <input type="submit" value="Войти" />
            <a href="">Забыли пароль?</a>
          </form>
          <div className="auth_reg">
            <span>Первый раз?</span>Пройдите<a href="">регистрацию</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Authorization;
