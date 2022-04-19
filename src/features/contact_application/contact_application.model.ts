import { createEffect, createEvent, createStore, sample } from "effector";
import { toast } from "react-toastify";
import { api } from "../../services";

type ContactFormData = {
  email: string;
  fio: string;
  phone: string;
  comment: string;
};

const sendContactForm = createEvent();

const sendContactFormFx = createEffect<ContactFormData, void>({
  handler: (data) => {
    return new Promise((resolve, reject) => {
      api
        .post("/contact-application", data)
        .then(() => resolve())
        .catch((error) => {
          if (error.response.status === 400) {
            toast.warn("Заполните все данные правильно");
          } else {
            toast.error(
              "Не удалось отправить обращение попробуйте в другой раз"
            );
          }
          reject();
        });
    });
  },
});

const changeContactForm = createEvent<{ key: string; value: string }>();

const $contactApplicationForm = createStore({
  email: "",
  fio: "",
  phone: "",
  comment: "",
})
  .on(changeContactForm, (state, { key, value }) => ({
    ...state,
    [key]: value,
  }))
  .reset(sendContactFormFx.doneData);

sample({
  clock: sendContactForm,
  source: $contactApplicationForm,
  target: sendContactFormFx,
});

const resetSendedForm = createEvent();

const $isSendedForm = createStore(false)
  .on(sendContactFormFx.doneData, () => true)
  .reset(resetSendedForm);

export {
  $contactApplicationForm,
  $isSendedForm,
  changeContactForm,
  sendContactForm,
  resetSendedForm,
};
