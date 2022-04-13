import { Footer, Header } from "@/components";
import { makeAuth } from "@/features/auth/auth.model";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Authorization = (props: Props) => {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    makeAuth({
      phoneOrEmail,
      password,
    });
  };

  return (
    <>
      <Header />
      <section className="auth">
        <div className="auth_wrapper">
          <form action="" className="enter_form" onSubmit={handleSubmit}>
            <h3>Вход</h3>
            <div className="enter_form-wrapper">
              <h5>Телефон или Email:</h5>
              <input
                placeholder="Телефон или Email:"
                type="text"
                name="phone"
                onChange={(e) => setPhoneOrEmail(e.target.value)}
              />
            </div>
            <div className="enter_form-wrapper">
              <h5>Пароль:</h5>
              <input
                placeholder="Пароль:"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Войти" />
            <a href="">Забыли пароль?</a>
          </form>
          <div className="auth_reg">
            <span>Первый раз?</span>Пройдите
            <Link href="/registration">
              <a href="">регистрацию</a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Authorization;
