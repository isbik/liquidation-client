import { api } from "@/services";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { Product } from "../../product.types";
import { getFinishAuction } from "../../utils";

type Props = {
  product: Product;
};

const ProductCatalogItem = (props: Props) => {
  const [product, setProduct] = useState(props.product);
  const [isTogglingFavorite, setIsTogglingFavorite] = useState(false);

  if (!product) return null;

  const { hours, days, isFinish } = getFinishAuction(product.finishAuctionAt);

  const handleToggleFavorite = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (isTogglingFavorite) return;

    setIsTogglingFavorite(true);

    try {
      if (product.isFavorite) {
        await api.put(`/favorites/products/${product.id}/remove`).then(() => {
          setProduct((prev) => ({ ...prev, isFavorite: false }));
        });
      } else {
        await api.put(`/favorites/products/${product.id}/add`).then(() => {
          setProduct((prev) => ({ ...prev, isFavorite: true }));
        });
      }
    } finally {
      setIsTogglingFavorite(false);
    }
  };

  return (
    <Link href={"/product/" + product.id}>
      <a href="" className="col-4 col-m-6">
        <div className="item">
          <div className="relative img-wrapper">
            <button
              onClick={handleToggleFavorite}
              className="absolute right-0 p-0 bg-transparent border-none cursor-pointer -top-1"
            >
              <i
                className={clsx("add-favorite hover:scale-150 transition-all", {
                  active: product.isFavorite,
                })}
              ></i>
            </button>
            <img src={product.images[0]?.url} alt="" />
          </div>
          <div className="item-info">{product.name}</div>
          <div className="item-info">
            Текущая ставка
            <span>
              {typeof product.bet === "number"
                ? product.bet
                : product.bet?.count}{" "}
              Руб.
            </span>
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
