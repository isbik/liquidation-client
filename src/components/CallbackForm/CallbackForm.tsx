import { api } from "@/services";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CallbackForm = () => {
  const [form, setForm] = useState({
    email: "",
    fio: "",
    comment: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.comment || !form.fio || !form.comment) {
      toast.warn("Заполните все поля");
      return;
    }

    api.post("/contact-application", form).catch((error) => {
      if (error.response.status === 400) {
        toast.warn("Заполните все поля правильно");
      } else {
        toast.error("Не удалось отправить обращение попробуйте в другой раз");
      }
    });
  };

  return (
    <section className="help">
      <div className="container">
        <h2 className="title">Узнайте, как мы можем помочь вашему бизнесу</h2>
        <form onSubmit={handleSubmit} className="help_form">
          <input
            value={form.email}
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            value={form.fio}
            onChange={handleChange}
            type="text"
            name="fio"
            placeholder="Имя"
          />
          <input
            value={form.comment}
            onChange={handleChange}
            type="text"
            name="comment"
            placeholder="Чем мы можем помочь?"
          />
          <input type="submit" />
        </form>
      </div>
    </section>
  );
};

export { CallbackForm };
