import { ProductAccountCard } from "@/features/account/components";
import { useStore } from "effector-react";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  $favoriteLots,
  fetchFavoriteLots,
  fetchFavoriteLotsFx,
} from "../lots.model";

const FeaturedLots = () => {
  const lots = useStore($favoriteLots);
  const loading = useStore(fetchFavoriteLotsFx.pending);

  useEffect(() => {
    fetchFavoriteLots();
  }, []);

  if (loading) return <>Загрузка ...</>;

  if (lots.length === 0)
    return (
      <div className="empty-content">
        <p className="empty">Нет избранных лотов</p>
        <p className="empty">
          Перейдите в{" "}
          <Link href="/catalog">
            <a>каталог</a>
          </Link>
          , чтобы найти нужный лот
        </p>
      </div>
    );

  return (
    <>
      <div className="catalog-wrapper">
        {lots.map((product) => (
          <ProductAccountCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export { FeaturedLots };
