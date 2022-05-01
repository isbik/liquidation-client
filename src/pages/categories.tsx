import { Footer, Header, Modal, PageHead } from "@/components";
import { api } from "@/services";
import { Category, Paginated } from "@/types";
import Link from "next/link";
import React, { useMemo, useState } from "react";

export async function getStaticProps() {
  const categories = await api.get<Paginated<Category>>("/categories", {
    params: {
      limit: 300,
    },
  });

  return {
    props: {
      categories: categories.data.items,
    },
  };
}

type Props = {
  categories: Category[];
};

const MAX_ITEMS = 14;

const CatalogPage = ({ categories }: Props) => {
  console.log("categories: ", categories);
  const [openCategoryId, setOpenCategoryId] = useState<number | null>(null);

  const parentCategories = useMemo(() => {
    return categories.filter(({ parentCategory }) => !parentCategory);
  }, [categories]);

  const getChildrenCategories = (parentId: number | null, showAll = false) => {
    console.log(categories);

    return categories
      .filter((category) => category.parentCategory?.id === parentId)
      .splice(0, showAll ? MAX_ITEMS : 500);
  };

  const isShowMore = (parentId: number) => {
    return (
      categories.filter((category) => category.parentCategory?.id === parentId)
        .length > MAX_ITEMS
    );
  };

  return (
    <>
      <PageHead title="Категории" />

      <Header />
      <Modal
        showButton={false}
        isOpen={openCategoryId !== null}
        setIsOpen={() => setOpenCategoryId(null)}
      >
        <div className="flex flex-col w-full gap-4 text-left">
          {getChildrenCategories(openCategoryId).map((category) => (
            <Link key={category.id} href={`/catalog?categoryId=${category.id}`}>
              <a>{category.name}</a>
            </Link>
          ))}
        </div>
      </Modal>

      <div className="catalog-page">
        <div className="container">
          <div className="col-12">
            <h1>Категории товаров</h1>
          </div>
          <div className="w-full catalog">
            <div className="col-12">
              {parentCategories.map((parentCategory) => (
                <div key={parentCategory.id} className="col-3 col-m-6">
                  <div className="catalog-item">
                    <div className="catalog-links-list">
                      {getChildrenCategories(parentCategory.id, true).map(
                        (category) => (
                          <Link
                            key={category.id}
                            href={`/catalog?categoryId=${category.id}`}
                          >
                            <a className="whitespace-nowrap text-ellipsis">
                              {category.name}
                            </a>
                          </Link>
                        )
                      )}
                      {isShowMore(parentCategory.id) && (
                        <a
                          className="catalog-more"
                          data-fancybox
                          onClick={(event) => {
                            event.preventDefault();
                            setOpenCategoryId(parentCategory.id);
                          }}
                        >
                          Показать ещё
                        </a>
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CatalogPage;
