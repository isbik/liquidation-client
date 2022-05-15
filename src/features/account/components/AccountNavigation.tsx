import { logout } from "@/features/user/user.model";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { MouseEvent } from "react";

type Props = {};

const AccountNavigation = (props: Props) => {
  const { asPath, ...router } = useRouter();

  const handleLogout = (event: MouseEvent<HTMLAnchorElement | MouseEvent>) => {
    event.preventDefault();

    logout();

    router.push("/");
  };

  return (
    <div className="col-4 col-m-12">
      <div className="navigation">
        <Link href={"/account"}>
          <a className={clsx("nav-item", { active: asPath === "/account" })}>
            Сведения о компании
          </a>
        </Link>
        <Link href={"/account/settings"}>
          <a
            className={clsx("nav-item", {
              active: asPath === "/account/settings",
            })}
          >
            Настройка аккаунта
          </a>
        </Link>
        <Link href={"/account/bets"}>
          <a
            className={clsx("nav-item", { active: asPath === "/account/bets" })}
          >
            Мои ставки
          </a>
        </Link>
        <Link href={"/account/products"}>
          <a
            className={clsx("nav-item", {
              active: asPath === "/account/products",
            })}
          >
            Мои объявления
          </a>
        </Link>
        <Link href={"/account/favorite"}>
          <a
            className={clsx("nav-item", {
              active: asPath === "/account/favorite",
            })}
          >
            Избранное
          </a>
        </Link>
        <Link href={"/account/notifications"}>
          <a
            className={clsx("nav-item", {
              active: asPath === "/account/notifications",
            })}
          >
            Уведомления
          </a>
        </Link>
        <Link href={"/account/cart"}>
          <a className={clsx("nav-item", { active: asPath === "/" })}>
            Корзина
          </a>
        </Link>
        <a
          onClick={handleLogout}
          className={clsx("text-inherit cursor-pointer text-right w-full")}
        >
          Выход из аккаунта
        </a>
      </div>
    </div>
  );
};

export { AccountNavigation };
