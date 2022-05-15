import { Product } from "@/features/product/product.types";
import dayjs from "dayjs";
import React from "react";

type Props = {
  product: Product;
};

const ProductAccountCard = ({ product }: Props) => {
  return (
    <div key={product.id} className="catalog-item">
      <div className="img-wrapper">
        <img src={product.images?.[0]?.url} alt="" />
      </div>
      <div className="info-wrapper">
        <div className="item-info">
          <div className="item-title">
            <span className="font-bold">
              {product.name} {product.quantity} штук
            </span>
          </div>
          <p>
            Номер объявления: <span>{product.id}</span>
          </p>
          <p>
            Создано:{" "}
            <span>{dayjs(product.createdAt).format("DD.MM.YYYY HH:mm")} </span>
          </p>
        </div>
        <div className="pr-4 text-right item-info">
          <div className="item-title">
            Цена: <span>{product.price} ₽</span>
          </div>
          <div className="item-title">
            Кол-во: <span className="quantity">{product.quantity} шт</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductAccountCard };
