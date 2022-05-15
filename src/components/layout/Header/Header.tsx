import { $cartItemsLength, fetchCartItems } from "@/features/cart/cart.model";
import { $authenticated, $user } from "@/features/user/user.model";
import { useStore } from "effector-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const user = useStore($user);
  const authenticated = useStore($authenticated);
  const cartItemsLength = useStore($cartItemsLength);

  const name = useMemo(() => user?.fio.split(" ")[1] || user?.fio, [user]);

  useEffect(() => {
    setSearch((router.query.q as string) || "");
  }, [router.query]);

  useEffect(() => {
    if (user?.id) fetchCartItems();
  }, [user?.id]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    router.push(
      "/catalog",
      {
        query: {
          q: search,
        },
      },
      { shallow: true }
    );
  };

  return (
    <header>
      <div className="mobile-header">
        <div className="logo mobile-logo">
          <Link href="/">
            <a>
              <img src="/static/logo.png" />
            </a>
          </Link>
        </div>
        <div className="mobile-btn"></div>
      </div>
      <div className="header-inner">
        <div className="top-menu">
          <div className="container">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="/static/logo.png" />
                </a>
              </Link>
            </div>
            <nav className="menu">
              <ul>
                <li>
                  <Link href="/catalog">
                    <a>Купить</a>
                  </Link>
                </li>
                {authenticated && (
                  <li>
                    <Link href={"/account/products"}>
                      <a>Продать</a>
                    </Link>
                  </li>
                )}
                <li>
                  <Link href={"/contacts"}>
                    <a>Контакты</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Помощь</a>
                  </Link>
                </li>
                {!authenticated && (
                  <li>
                    <Link href="/registration">
                      <a>Регистрация</a>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
            {user ? (
              <div className="enter">
                <span>Добро пожаловать, </span>{" "}
                <Link href="/account">
                  <a className="enter_item">{name}</a>
                </Link>
              </div>
            ) : (
              <div className="enter">
                <span>
                  Добро пожаловать <span>!</span>
                </span>{" "}
                <Link href="/login">
                  <a className="enter_item">Войти</a>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="category_section">
          <div className="container">
            <div className="category_section-left">
              <Link href={"/categories"}>
                <a>
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="14" height="3" rx="1" fill="white" />
                    <rect y="5" width="14" height="3" rx="1" fill="white" />
                    <rect y="10" width="14" height="3" rx="1" fill="white" />
                  </svg>
                  <span>Категории</span>
                </a>
              </Link>
            </div>
            <div className="category_section-right">
              <form onSubmit={handleSubmit} className="search_form">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  name="search"
                  placeholder="Найти..."
                />
                <button type="submit">Найти</button>
              </form>
              {user && (
                <div className="mobile-hidden">
                  <Link href="/account/cart">
                    <a className="cart-wrapper" href="">
                      <i className="cart-ico"></i>
                      <span>{cartItemsLength}</span>
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
