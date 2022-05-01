import { Footer, Header, PageHead } from "@/components";
import { $authenticated, makeAuth } from "@/features/auth/auth.model";
import { useStore } from "effector-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const Authorization = (props: Props) => {
  const [phoneOrEmail, setPhoneOrEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("password");
  const authenticated = useStore($authenticated);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    makeAuth({
      phoneOrEmail,
      password,
    });
  };

  useEffect(() => {
    if (authenticated) router.push("/account");
  }, [authenticated, router]);

  return (
    <>
      <PageHead title="Вход" />

      <Header />
      <section className="auth">
        <div className="auth_wrapper">
          <form
            autoComplete="false"
            className="enter_form"
            onSubmit={handleSubmit}
          >
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
                autoComplete="current-password"
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
