import { Footer, Header } from "@/components";
import { api } from "@/services";
import { Category, Paginated } from "@/types";
import React, { useMemo } from "react";

export async function getStaticProps() {
  const categories = await api.get<Paginated<Category>>("/categories");

  return {
    props: {
      categories: categories.data.items,
    },
  };
}

type Props = {
  categories: Category[];
};

const CatalogPage = ({ categories }: Props) => {
  const parentCategories = useMemo(() => {
    return categories.filter(({ parentCategory }) => !parentCategory);
  }, [categories]);

  const getChildrenCategories = (parentId: number) => {
    return categories.filter(({ id }) => id === parentId).splice(0, 15);
  };

  return (
    <>
      <Header />
      <div className="catalog-page">
        <div className="container">
          <div className="col-12">
            <h1>Категории товаров</h1>
          </div>
          <div className="catalog">
            <div className="col-12">
              {parentCategories.map((parentCategory) => (
                <div key={parentCategory.id} className="col-3 col-m-6">
                  <div className="catalog-item">
                    <div className="catalog-links-list">
                      {getChildrenCategories(parentCategory.id).map(
                        (category) => (
                          <a key={category.id} href="#">
                            {category.name}
                          </a>
                        )
                      )}
                    </div>
                    <div className="img-wrapper">
                      <img
                        src={parentCategory.image?.url}
                        alt={parentCategory.name}
                      />
                    </div>
                    <div className="catalog-title">{parentCategory.name}</div>
                  </div>
                </div>
              ))}

              <div className="col-3 col-m-6">
                <div className="catalog-item">
                  <div className="catalog-links-list">
                    <a href="#">Медицинские расходные матер...</a>
                    <a href="#">Медицинское оборудование, инс...</a>
                    <a href="#">Весоизмерительное оборудование</a>
                    <a href="#">Газовое и топливное оборудование</a>
                    <a href="#">Горнодобывающее и перерабат...</a>
                    <a href="#">Грузоподъемное оборудование ...</a>
                    <a href="#">ДВС универсального назначения</a>
                    <a href="#">Деревообрабатывающее оборуд...</a>
                    <a href="#">Железнодорожное оборудование</a>
                    <a href="#">Звуковое, световое оборудование</a>
                    <a href="#">Инструмент ручной, электрическ...</a>
                    <a href="#">Коммунальное оборудование</a>
                    <a href="#">Котельное оборудование</a>
                    <a href="#">Лабораторное оборудование</a>
                    <a className="catalog-more" data-fancybox href="#hidden">
                      Показать ещё
                    </a>
                  </div>
                  <div className="img-wrapper">
                    <img src="/static/catalog-img1.png" alt="" />
                  </div>
                  <div className="catalog-title">
                    Автомобили, аксессуары, запчасти, транспорт
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CatalogPage;
