import { AccountWrapper } from "@/features/account/components";
import { IncomingBets, OutgoingBets } from "@/features/product_bets/components";
import clsx from "clsx";
import React, { useState } from "react";

enum BetTab {
  "incoming",
  "outgoing",
}

const AccountBetsPage = () => {
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
      {tab === BetTab.incoming && <IncomingBets />}
      {tab === BetTab.outgoing && <OutgoingBets />}
    </AccountWrapper>
  );
};

export default AccountBetsPage;
