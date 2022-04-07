import React from "react";

type Props = {};

const CallbackForm = (props: Props) => {
  return (
    <section className="help">
      <div className="container">
        <h2 className="title">Узнайте, как мы можем помочь вашему бизнесу</h2>
        <form action="" className="help_form">
          <input type="text" name="e-mail" placeholder="Email" />
          <input type="text" name="name" placeholder="Имя" />
          <input
            type="text"
            name="how-can-help"
            placeholder="Чем мы можем помочь?"
          />
          <input type="submit" />
        </form>
      </div>
    </section>
  );
};

export { CallbackForm };
