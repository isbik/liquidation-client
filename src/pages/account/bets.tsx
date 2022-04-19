import { AccountWrapper } from "@/features/account/components";
import clsx from "clsx";
import React, { useState } from "react";

type Props = {};

enum BetTab {
  "incoming",
  "outgoing",
}

const AccountBetsPage = (props: Props) => {
  const [bets] = useState([]);
  const [tab, setTab] = useState<BetTab>(BetTab.incoming);

  const changeTab = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    tab: BetTab
  ) => {
    e.preventDefault();
    setTab(tab);
  };

  return (
    <AccountWrapper title="Мои ставки">
      <div className="account-tab-list">
        <div className="list-detail">
          <nav>
            <ul className="flex">
              <li>
                <a
                  onClick={(e) => changeTab(e, BetTab.incoming)}
                  className={clsx({ active: BetTab.incoming === tab })}
                >
                  Входящие
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => changeTab(e, BetTab.outgoing)}
                  className={clsx({ active: BetTab.outgoing === tab })}
                >
                  Исходящие
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
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
                <th>Сумма</th>
                <th>Статус</th>
              </tr>
              {bets.map((bet) => (
                <tr key={bet.id}>
                  <td className="number">1</td>
                  <td>Андрей Румянцев</td>
                  <td>800 000 ₽</td>
                  <td>Ожидает</td>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
    </AccountWrapper>
  );
};

export default AccountBetsPage;
