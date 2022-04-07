import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="mobile-header">
        <div className="logo mobile-logo">
          <a href="index.html">
            <img src="img/logo.png" />
          </a>
        </div>
        <div className="mobile-btn"></div>
      </div>
      <div className="header-inner">
        <div className="top-menu">
          <div className="container">
            <div className="logo">
              <a href="index.html">
                <img src="img/logo.png" />
              </a>
            </div>
            <nav className="menu">
              <ul>
                <li>
                  <a href="#">Купить</a>
                </li>
                <li>
                  <a href="#">Продать</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
                <li>
                  <a href="#">Помощь</a>
                </li>
                <li>
                  <a href="#">Регистрация</a>
                </li>
              </ul>
            </nav>
            <div className="enter">
              <span>
                Добро пожаловать
                <span>!</span>
              </span>
              <a href="autorization.html" className="enter_item">
                Войти
              </a>
            </div>
          </div>
        </div>
        <div className="category_section">
          <div className="container">
            <div className="category_section-left">
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
            </div>
            <div className="category_section-right">
              <form action="" className="search_form">
                <input type="text" name="search" placeholder="Найти..." />
                <button type="submit">Найти</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
