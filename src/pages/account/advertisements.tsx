import { Pagination } from "@/components";
import { AccountWrapper } from "@/features/account/components";
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

const AccountAdvertisementsPage = () => {
  const products = useStore($products);
  const total = useStore($total);
  const page = useStore($page);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AccountWrapper title="Мои объявления">
      <div className="account-inner advertisement-inner">
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
              <div key={product.id} className="catalog-item">
                <div className="img-wrapper">
                  <img src="/static/delivery.png" alt="" />
                </div>
                <div className="info-wrapper">
                  <div className="item-info">
                    <div className="item-title">
                      {product.name} &nbsp;
                      <span>{product.quantity} штук</span>
                    </div>
                    <p>
                      Номер объявления:
                      <span>{product.id}</span>
                    </p>
                    <p>
                      Создано:
                      <span>5 янв. 16:07</span>
                    </p>
                  </div>
                  <div className="item-info">
                    <div className="item-title">
                      Цена:
                      <span>{product.price} ₽</span>
                    </div>
                    <div className="item-title">
                      Кол-во:
                      <span className="quantity">{product.quantity} шт</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <Pagination page={page} total={total} onChange={changePage} hideNextButton />

        <a href="#" className="pc-hidden btn-blue">
          Добавить объявление
        </a>
      </div>
    </AccountWrapper>
  );
};

export default AccountAdvertisementsPage;
