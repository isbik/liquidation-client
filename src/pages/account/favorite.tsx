import { PageHead } from "@/components";
import { AccountWrapper } from "@/features/account/components";
import {
  FeaturedLots,
  FeaturedOrganizations,
} from "@/features/favorite/components";
import clsx from "clsx";
import React, { useState } from "react";

type Props = {};

enum BetTab {
  "lots",
  "organizations",
}

const AccountFavoritePage = (props: Props) => {
  const [items] = useState([]);
  const [tab, setTab] = useState<BetTab>(BetTab.lots);

  const changeTab = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    tab: BetTab
  ) => {
    e.preventDefault();
    setTab(tab);
  };

  return (
    <>
      <PageHead title="Избранное" />

      <AccountWrapper title="Избранное">
        <div className="account-inner advertisement-inner favorite-lots">
          <div className="account-tab-list">
            <div className="list-detail">
              <a
                onClick={(e) => changeTab(e, BetTab.lots)}
                className={clsx({ active: BetTab.lots === tab })}
              >
                Лоты
              </a>
              <a
                onClick={(e) => changeTab(e, BetTab.organizations)}
                className={clsx({ active: BetTab.organizations === tab })}
              >
                Организации
              </a>
            </div>
          </div>

          {tab === BetTab.lots && <FeaturedLots />}
          {tab === BetTab.organizations && <FeaturedOrganizations />}
        </div>
      </AccountWrapper>
    </>
  );
};

export default AccountFavoritePage;
