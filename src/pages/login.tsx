import { PageHead } from "@/components";
import { $isLoginError, makeAuth } from "@/features/auth/auth.model";
import { $authenticated } from "@/features/user/user.model";
import { useStore } from "effector-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const Authorization = (props: Props) => {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticated = useStore($authenticated);
  const isLoginError = useStore($isLoginError);

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

      <section className="mt-20 auth">
        <div className="auth_wrapper">
          <form
            autoComplete="false"
            className="enter_form"
            onSubmit={handleSubmit}
          >
            <h3>Вход</h3>
            <div className="enter_form-wrapper">
              <h5>Телефон или почта:</h5>
              <input
                placeholder="Телефон или почта:"
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
            {isLoginError && (
              <p className="mb-4 text-center text-red-400">
                Неправильный логин или пароль
              </p>
            )}

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
    </>
  );
};

export default Authorization;
