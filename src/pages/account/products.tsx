import { PageHead, Pagination } from "@/components";
import {
  AccountWrapper,
  ProductAccountCard,
} from "@/features/account/components";
import {
  $page,
  $products,
  $total,
  changePage,
  fetchProducts,
} from "@/features/account/product.model";
import { useStore } from "effector-react";
import Link from "next/link";
import React, { useEffect } from "react";

const AccountProductsPage = () => {
  const products = useStore($products);
  const total = useStore($total);
  const page = useStore($page);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <PageHead title="Мои объявления" />

      <AccountWrapper title="Мои объявления">
        <div className="account-inner product-inner">
          <div className="info">
            <h3>Каталог</h3>
            <Link href="/product/add">
              <a className="btn-blue mobile-hidden">Добавить объявление</a>
            </Link>
          </div>
          {products.length === 0 && (
            <div className="empty-content">
              <p className="empty">Нет действующих объявлений</p>
            </div>
          )}
          {products.length !== 0 && (
            <div className="catalog-wrapper">
              {products.map((product) => (
                <ProductAccountCard key={product.id} product={product} />
              ))}
            </div>
          )}
          <Pagination
            page={page}
            total={total}
            onChange={changePage}
            hideNextButton
          />

          <a href="#" className="pc-hidden btn-blue">
            Добавить объявление
          </a>
        </div>
      </AccountWrapper>
    </>
  );
};

AccountProductsPage.requireAuth = true;

export default AccountProductsPage;
