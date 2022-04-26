import Link from "next/link";
import React from "react";
import { Product } from "../../product.types";
import { getFinishAuction } from "../../utils";

type Props = {
  product: Product;
};

const ProductCatalogItem = ({ product }: Props) => {
  if (!product) return null;

  const { hours, days, isFinish } = getFinishAuction(product.finishAuctionAt);

  return (
    <Link href={"/product/" + product.id}>
      <a href="" className="col-4 col-m-6">
        <div className="item">
          <div className="img-wrapper">
            <img src={product.images[0]?.url} alt="" />
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
          {isFinish ? (
            <div className="item-info">Аукцион закончился</div>
          ) : (
            <>
              <div className="item-info">
                Заканчивается
                <span className="red-span">
                  {days} дня {hours} часов
                </span>
              </div>
              <a className="buy-btn" href="#">
                Сделать ставку
              </a>
            </>
          )}
        </div>
      </a>
    </Link>
  );
};

export { ProductCatalogItem };
