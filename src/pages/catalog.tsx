import { Filter, Footer, Header, Pagination } from "@/components";
import {
  $page,
  $products,
  $total,
  changePage,
  fetchProducts,
} from "@/features/catalog/catalog.model";
import { useStore } from "effector-react";
import Link from "next/link";
import React, { useEffect } from "react";

type Props = {};

const CatalogInner = (props: Props) => {
  const products = useStore($products);
  const total = useStore($total);
  const page = useStore($page);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <section className="catalog-inner">
        <div className="container">
          <div className="col-12">
            <form className="search-form" action="">
              <select name="" id="">
                <option value="Везде" selected>
                  Везде
                </option>
              </select>
              <div className="search-wrapper">
                <i className="search-ico-btn"></i>
                <input
                  className="search-input"
                  placeholder="Наименованию лота, название"
                  type="search"
                />
              </div>
              <input type="submit" value="Поиск" />
            </form>
          </div>
          <div className="col-12">
            <h1>Автомобили легковые</h1>
          </div>
          <div className="col-3 col-m-12">
            <div className="mobile-filter-btn">Фильтры</div>
            <Filter />
          </div>
          <div className="col-9 col-m-12">
            <div className="items-wrapper">
              {products.map((product) => (
                <Link key={product.id} href={"/product/" + product.id}>
                  <a href="" className="col-4 col-m-6">
                    <div className="item">
                      <div className="img-wrapper">
                        <img src="/static/catalog-img1.png" alt="" />
                      </div>
                      <div className="item-info">{product.name}</div>
                      <div className="item-info">
                        Текущая ставка
                        <span>{product.price} Руб.</span>
                      </div>
                      <div className="item-info">
                        Локация
                        <span>{product.location}</span>
                      </div>
                      <div className="item-info">
                        Заканчивается
                        <span className="red-span">2 дня 16 часов</span>
                      </div>
                      <a className="buy-btn" href="#">
                        Сделать ставку
                      </a>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
            <div className="mobile-btn-more">Показать ещё</div>
            <Pagination page={page} total={total} onChange={changePage} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CatalogInner;
