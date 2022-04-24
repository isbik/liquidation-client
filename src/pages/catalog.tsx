import { Filter, Footer, Header, Pagination } from "@/components";
import {
  $page,
  $products,
  $total,
  changePage,
  fetchProducts,
} from "@/features/catalog/catalog.model";
import { ProductCatalogItem } from "@/features/product/components";
import { api } from "@/services";
import { Category } from "@/types";
import { useStore } from "effector-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const CatalogInner = () => {
  const router = useRouter();
  const { categoryId } = router.query;

  const products = useStore($products);
  const total = useStore($total);
  const page = useStore($page);
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (categoryId) {
      api.get("/categories/" + categoryId).then((response) => {
        setCategory(response.data);
      });
    }
  }, [categoryId]);

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
          {category && (
            <div className="col-12">
              <h1>{category.name}</h1>
            </div>
          )}
          <div className="col-3 col-m-12">
            <div className="mobile-filter-btn">Фильтры</div>
            <Filter />
          </div>
          <div className="col-9 col-m-12">
            <div className="items-wrapper">
              {products.map((product) => (
                <ProductCatalogItem key={product.id} product={product} />
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
