import { AccountWrapper } from "@/features/account/components";
import {
  $notificationSettingsForm,
  changeNotificationSettings,
  sendNotificationSettingsForm,
  setDefaultNotificationSettings,
} from "@/features/account/notification.model";
import { $user } from "@/features/user/user.model";
import { useStore } from "effector-react";
import React, { useEffect } from "react";

type Props = {};

const AccountNotificationsPage = (props: Props) => {
  const user = useStore($user);
  const settingsForm = useStore($notificationSettingsForm);

  useEffect(() => {
    setDefaultNotificationSettings({
      isSendNews: user?.settings?.isSendNews || false,
      isSendNewBets: user?.settings?.isSendNewBets || false,
      isSendNewCompetitorBets: user?.settings?.isSendNewCompetitorBets || false,
    });
  }, [user?.settings]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeNotificationSettings({
      key: event.target.name,
      value: Boolean(event.target.value),
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    sendNotificationSettingsForm();
  };

  return (
    <AccountWrapper title="Настройки уведомлений">
      <div className="account-inner account-notifications">
        <form action="" onSubmit={handleSubmit}>
          <div className="items-wrapper">
            <div className="item">
              <div className="title">Рассылка новостей</div>
              <select
                onChange={handleChange}
                value={settingsForm.isSendNews ? "1" : "0"}
                name="isSendNews"
              >
                <option value="1">Присылать оповещения</option>
                <option value="0">Не присылать оповещения</option>
              </select>
            </div>
            <div className="item">
              <div className="title">Новые ставки</div>
              <select
                onChange={handleChange}
                value={settingsForm.isSendNewBets ? "1" : "0"}
                name="isSendNewBets"
              >
                <option value="1">Присылать оповещения</option>
                <option value="0">Не присылать оповещения</option>
              </select>
            </div>
            <div className="item">
              <div className="title">Новые ставки конкурентов</div>
              <select
                onChange={handleChange}
                value={settingsForm.isSendNewCompetitorBets ? "1" : "0"}
                name="isSendNewCompetitorBets"
              >
                <option value="1">Присылать оповещения</option>
                <option value="0">Не присылать оповещения</option>
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
