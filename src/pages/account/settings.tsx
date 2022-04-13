import { AccountWrapper } from "@/features/account/components";
import { $user } from "@/features/user/user.model";
import { useStore } from "effector-react";
import React from "react";

type Props = {};

const AccountSettingsPage = (props: Props) => {
  const user = useStore($user);

  return (
    <AccountWrapper title="Настройки аккаунта">
      <div className="account-inner account-settings">
        <div className="items-wrapper">
          <h3>Общая информация</h3>
          <div className="item-wrapper">
            <div className="item-title">ФИО</div>
            <input type="text" />
          </div>
          <div className="item-wrapper">
            <div className="item-title">Логин</div>
            <input type="text" />
          </div>
          <div className="item-wrapper">
            <div className="item-title">Телефон</div>
            <input type="text" />
          </div>
          <div className="item-wrapper">
            <div className="item-title">Email</div>
            <input type="text" />
          </div>
        </div>
        <div className="items-wrapper">
          <h3>Пароль</h3>
          <div className="item-wrapper">
            <div className="item-title">Текущий пароль</div>
            <input type="text" />
          </div>
          <div className="item-wrapper">
            <div className="item-title">Новый пароль</div>
            <input type="text" />
          </div>
          <div className="item-wrapper">
            <div className="item-title">Новый пароль подтверждение</div>
            <input type="text" />
          </div>
        </div>
        <a className="btn-blue" href="#">
          Сохранить
        </a>
      </div>
    </AccountWrapper>
  );
};

export default AccountSettingsPage;
