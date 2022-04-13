import { AccountWrapper } from "@/features/account/components";
import { $user } from "@/features/user/user.model";
import { useStore } from "effector-react";
import React from "react";

type Props = {};

const Account = (props: Props) => {
  const user = useStore($user);

  if (!user) return null;

  return (
    <>
      <AccountWrapper title="Сведения о компании">
        <div className="account-inner company-info">
          <div className="img-wrapper">
            <img src="/static/account-avatar.png" alt="" />
          </div>
          <div className="item-wrapper">
            <div className="item-title">Название организации</div>
            <div className="item-desc">{user.organizationName}</div>
          </div>
          <div className="item-wrapper">
            <div className="item-title">Тип организации</div>
            <div className="item-desc">Юридическое лицо</div>
          </div>
          <div className="item-wrapper">
            <div className="item-title">Город</div>
            <div className="item-desc">{user.city}</div>
          </div>
          <div className="item-wrapper">
            <div className="item-title">Регион</div>
            <div className="item-desc">{user.legalAddress}</div>
          </div>
          <div className="item-wrapper">
            <div className="item-title">Email</div>
            <div className="item-desc">{user.email}</div>
          </div>
          <div className="item-wrapper">
            <div className="item-title">Телефоны</div>
            <div className="item-desc">{user.phone}</div>
          </div>
          <div className="item-wrapper">
            <div className="item-title">Юридический адрес</div>
            <div className="item-desc">{user.legalAddress}</div>
          </div>
          <div className="item-wrapper">
            <div className="item-title">Почтовый индекс</div>
            <div className="item-desc">{user.postalCode}</div>
          </div>
          <div className="item-wrapper">
            <div className="item-title">ИНН</div>
            <div className="item-desc">{user.INN}</div>
          </div>
          <div className="item-wrapper">
            <div className="item-title">ОГРН</div>
            <div className="item-desc">{user.ORGN}</div>
          </div>
          <div className="item-wrapper">
            <div className="item-title">КПП</div>
            <div className="item-desc">{user.KPP}</div>
          </div>
          <a className="btn-blue" href="#">
            Изменить информацию
          </a>
        </div>
      </AccountWrapper>
    </>
  );
};

export default Account;
