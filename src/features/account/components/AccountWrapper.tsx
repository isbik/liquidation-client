import React from "react";
import { AccountNavigation } from "./AccountNavigation";

type Props = {
  title: string;
  children: React.ReactNode;
};

const AccountWrapper = (props: Props) => {
  return (
    <>
      

      <section className="account-section">
        <div className="container">
          <div className="col-12">
            <h1>Личный кабинет</h1>
            <h2>{props.title}</h2>
          </div>
          <div className="col-8 col-m-12">{props.children}</div>
          <AccountNavigation />
        </div>
      </section>

      
    </>
  );
};

export { AccountWrapper };
