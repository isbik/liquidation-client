import { createEffect, createEvent, createStore, sample } from "effector";
import { api } from "../../services";

type ContactFormData = {
  email: string;
  fio: string;
  phone: string;
  comment: string;
};

const sendContactForm = createEvent();

const sendContactFormFx = createEffect<ContactFormData, void>({
  handler: async (data) => {
    await api.post("/contact-application", data);
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

export { $contactApplicationForm, changeContactForm, sendContactForm };
