import { AccountWrapper } from "@/features/account/components";
import React from "react";

type Props = {};

const AccountNotificationsPage = (props: Props) => {
  return (
    <AccountWrapper title="Настройки уведомлений">
      <div className="account-inner account-notifications">
        <form action="">
          <div className="items-wrapper">
            <div className="item">
              <div className="title">Рассылка новостей</div>
              <select name="" id="">
                <option selected value="">
                  Присылать оповещения
                </option>
                <option value="">Не присылать оповещения</option>
              </select>
            </div>
            <div className="item">
              <div className="title">Новые ставки</div>
              <select name="" id="">
                <option selected value="">
                  Присылать оповещения
                </option>
                <option value="">Не присылать оповещения</option>
              </select>
            </div>
            <div className="item">
              <div className="title">Новые ставки конкурентов</div>
              <select name="" id="">
                <option selected value="">
                  Присылать оповещения
                </option>
                <option value="">Не присылать оповещения</option>
              </select>
            </div>
          </div>
          <input type="submit" />
        </form>
      </div>
    </AccountWrapper>
  );
};

export default AccountNotificationsPage;
