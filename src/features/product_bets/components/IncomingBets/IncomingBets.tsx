import { getStatusText } from "@/features/product/product.utils";
import { useStore } from "effector-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { $items, fetchItems } from "../../product_bets.incoming.model";

const IncomingBets = () => {
  const bets = useStore($items);

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="account-inner account-bets">
      {bets.length === 0 && (
        <div className="empty-content">
          <p className="empty">Ничего не найдено</p>
        </div>
      )}
      {bets.length !== 0 && (
        <div className="table-wrapper">
          <table>
            <tr>
              <th className="number">№</th>
              <th>Покупатель</th>
              <th>Продукт</th>
              <th>Сумма</th>
              <th>Статус</th>
            </tr>
            {bets.map((bet: any) => (
              <tr key={bet.id}>
                <td className="number">{bet.id}</td>
                <td>{bet?.buyer}</td>
                <td>
                  <Link href={"/product/" + bet?.product.id}>
                    <a className="text-inherit">{bet?.product.name}</a>
                  </Link>
                </td>
                <td>{bet?.count} ₽</td>
                <td>{getStatusText(bet.product.status)}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export { IncomingBets };
