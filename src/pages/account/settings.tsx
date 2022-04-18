import { AccountWrapper } from "@/features/account/components";
import { $user } from "@/features/user/user.model";
import { useStore } from "effector-react";
import React, { useEffect } from "react";
import {
  $accountSettingsForm,
  $changingPasswordForm,
  changeAccountSettings,
  changePasswordForm,
  sendAccountSettingsForm,
  sendChangePasswordForm,
  setUserDefaultValues,
} from "../../features/account/settings.model";

const AccountSettingsPage = () => {
  const user = useStore($user);

  const changingPasswordForm = useStore($changingPasswordForm);
  const accountSettingsForm = useStore($accountSettingsForm);

  useEffect(() => {
    setUserDefaultValues({
      fio: user?.fio || "",
      login: "",
      phone: user?.phone || "",
      email: user?.email || "",
    });
  }, []);

  //  Account settings
  const handleAccountSettingsChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    changeAccountSettings({
      key: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmitAccountSettings = (event: React.FormEvent) => {
    event.preventDefault();
    sendAccountSettingsForm();
  };

  // Change password

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    changePasswordForm({ key: event.target.name, value: event.target.value });
  };

  const handleSubmitChangePassword = (event: React.FormEvent) => {
    event.preventDefault();
    sendChangePasswordForm();
  };

  return (
    <AccountWrapper title="Настройки аккаунта">
      <div className="account-inner account-settings">
        <div className="items-wrapper">
          <h3>Общая информация</h3>
          <form action="" onSubmit={handleSubmitAccountSettings}>
            <div className="item-wrapper">
              <div className="item-title">ФИО</div>
              <input
                value={accountSettingsForm.fio}
                name="fio"
                onChange={handleAccountSettingsChange}
                type="text"
              />
            </div>
            <div className="item-wrapper">
              <div className="item-title">Логин</div>
              <input
                value={accountSettingsForm.login}
                name="login"
                onChange={handleAccountSettingsChange}
                type="text"
              />
            </div>
            <div className="item-wrapper">
              <div className="item-title">Телефон</div>
              <input
                value={accountSettingsForm.phone}
                name="phone"
                onChange={handleAccountSettingsChange}
                type="text"
              />
            </div>
            <div className="item-wrapper">
              <div className="item-title">Email</div>
              <input
                value={accountSettingsForm.email}
                name="email"
                onChange={handleAccountSettingsChange}
                type="text"
              />
            </div>
            <button type="submit" className="btn-blue">
              Изменить данные
            </button>
          </form>
        </div>
        <div className="items-wrapper">
          <h3>Пароль</h3>
          <form action="" onSubmit={handleSubmitChangePassword}>
            <div className="item-wrapper">
              <div className="item-title">Текущий пароль</div>
              <input
                name="password"
                value={changingPasswordForm.password}
                onChange={handlePasswordChange}
                type="password"
              />
            </div>
            <div className="item-wrapper">
              <div className="item-title">Новый пароль</div>
              <input
                name="newPassword"
                value={changingPasswordForm.newPassword}
                onChange={handlePasswordChange}
                type="password"
              />
            </div>
            <div className="item-wrapper">
              <div className="item-title">Новый пароль подтверждение</div>
              <input
                name="newPasswordConfirmation"
                value={changingPasswordForm.newPasswordConfirmation}
                onChange={handlePasswordChange}
                type="password"
              />
            </div>
          </form>
          <button type="submit" className="btn-blue">
            Изменить пароль
          </button>
        </div>
      </div>
    </AccountWrapper>
  );
};

export default AccountSettingsPage;
