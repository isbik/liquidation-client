import Link from "next/link";
import React from "react";
import { PageHead } from "../components";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <>
      <PageHead title="Страница не найдена" />
      
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
          <Link href="/">
            <a>Перейти на главную страницу</a>
          </Link>{" "}
        </div>
      </section>
      
    </>
  );
};

export default NotFound;
