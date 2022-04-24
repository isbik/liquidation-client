import { useStore } from "effector-react";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  $favoriteOrganizations,
  fetchFavoriteOrganizations,
} from "../organizations";

const FeaturedOrganizations = () => {
  const organizations = useStore($favoriteOrganizations);

  useEffect(() => {
    fetchFavoriteOrganizations();
  }, []);

  return (
    <>
      {organizations.length === 0 && (
        <div className="account-inner favorites-organizations">
          <div className="empty-content">
            <p className="empty">Нет избранных организаций</p>
            <p className="empty">
              Перейдите в{" "}
              <Link href="/catalog">
                <a>каталог</a>
              </Link>
              , чтобы найти нужную организацию
            </p>
          </div>
        </div>
      )}
      {organizations.length !== 0 && (
        <div className="account-inner favorites-organizations">
          <div className="organization-items">
            {organizations.map((organization) => (
              <div key={organization.id} className="organization-item">
                <div className="img-wrapper">
                  <img src="/static/org1.png" alt="" />
                </div>
                <div className="info-wrapper">
                  <div className="item-title">{organization.name}</div>
                  <div className="item-title">
                    Объявлений на продажу:{" "}
                    <span className="quantity">{organization.countLots}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export { FeaturedOrganizations };
