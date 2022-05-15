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
            <h2>Ошибка 403</h2>
          </div>
          <div className="col-12">
            <p>К сожалению, запрашиваемая страница не доступна.</p>
          </div>
          <Link href="/">
            <a>Перейти на главную страницу</a>
          </Link>
        </div>
      </section>
      
    </>
  );
};

export default NotFound;
