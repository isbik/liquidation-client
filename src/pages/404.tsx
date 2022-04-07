import React from "react";
import { Footer, Header } from "../components";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <>
      <Header />
      <section className="page_404">
        <div className="container">
          <div className="col-12">
            <h2>Ошибка 404</h2>
          </div>
          <div className="col-12">
            <p>
              К сожалению, запрашиваемая страница не найдена. Возможно, вы
              перешли по ссылке, в которой была допущена ошибка, или ресурс был
              удален. Перейдите на главную страницу.
            </p>
          </div>
          <div className="col-12">
            <a href="index.html">Перейти на главную страницу</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
