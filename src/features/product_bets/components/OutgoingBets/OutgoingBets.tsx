import dayjs from "dayjs";
import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { $items, fetchItems } from "../../product_bets.outgoing.model";

const OutgoingBets = () => {
  const bets = useStore($items);

  useEffect(() => {
    fetchItems();
  }, []);

  const getDiffText = (finishAt: string) => {
    const days = dayjs(finishAt).diff(new Date(), "d");

    const hours = dayjs(finishAt)
      .set("date", new Date().getDate())
      .diff(new Date(), "h");

    // TODO add plural
    return `${days} (дней) ${hours} (часов)`;
  };

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
              <th>Лот</th>
              <th>Сумма</th>
              <th>Статус</th>
            </tr>
            {bets.map((bet) => (
              <tr key={bet.id}>
                <td className="number">{bet.id}</td>
                <td>{bet?.product.name}</td>
                <td>{bet?.count} ₽</td>
                <td>
                  {dayjs(bet.product.finishAuctionAt).isBefore(new Date())
                    ? "Завершено"
                    : getDiffText(bet.product.finishAuctionAt)}
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export { OutgoingBets };
