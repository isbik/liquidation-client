import { Filter, PageHead, Pagination } from "@/components";
import {
  $filters,
  $page,
  $products,
  $total,
  changePage,
  setFilters
} from "@/features/catalog/catalog.model";
import { ProductCatalogItem } from "@/features/product/components";
import { api } from "@/services";
import { Category } from "@/types";
import { useStore } from "effector-react";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";

const CatalogInner = () => {
  const [searchName, setSearchName] = useState("");
  const router = useRouter();
  const { categoryId } = router.query;

  const products = useStore($products);
  const filters = useStore($filters);
  const total = useStore($total);
  const page = useStore($page);
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    setFilters(router.query as Record<string, string | number | null>);

    setSearchName((router.query.name as string) || "");
  }, [router]);

  useEffect(() => {
    if (categoryId) {
      api.get("/categories/" + categoryId).then((response) => {
        setCategory(response.data);
      });
    }
  }, [categoryId]);

  const handleSubmitSearch = (event: FormEvent) => {
    event.preventDefault();
    setFilters({ ...filters, name: searchName });
  };

  return (
    <>
      <PageHead title="Каталог" />

      <section className="mt-14 catalog-inner">
        <div className="container">
          <div className="col-12">
            <form
              onSubmit={handleSubmitSearch}
              className="search-form"
              action=""
            >
              <select defaultValue={"all"} name="" id="">
                <option value="all">Везде</option>
              </select>
              <div className="search-wrapper">
                <i className="search-ico-btn"></i>
                <input
                  onChange={(event) => setSearchName(event.target.value)}
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
          <div className="pl-8 col-9 col-m-12">
            <div className=" items-wrapper">
              {products.length === 0 && (
                <p className="w-full mt-8 text-4xl text-center">
                  Товары не найдены
                </p>
              )}

              {products.map((product) => (
                <ProductCatalogItem key={product.id} product={product} />
              ))}
            </div>
            <div className="mobile-btn-more">Показать ещё</div>
            <Pagination page={page} total={total} onChange={changePage} />
          </div>
        </div>
      </section>

      
    </>
  );
};

export default CatalogInner;
