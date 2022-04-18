import { createEffect, createEvent, createStore, sample } from "effector";
import { api } from "../../services";

type ChangePasswordData = {
  password: string;
  newPassword: string;
  newPasswordConfirmation: string;
};

const sendChangePasswordForm = createEvent();

const sendChangePasswordFormFx = createEffect<ChangePasswordData, void, void>({
  handler: async (data) => {
    await api.post("/contact-application", data);
  },
});

const changePasswordForm = createEvent<{ key: string; value: string }>();

const $changingPasswordForm = createStore({
  password: "",
  newPassword: "",
  newPasswordConfirmation: "",
})
  .on(changePasswordForm, (state, { key, value }) => ({
    ...state,
    [key]: value,
  }))
  .reset(sendChangePasswordFormFx.doneData);

sample({
  clock: sendChangePasswordForm,
  source: $changingPasswordForm,
  target: sendChangePasswordFormFx,
});

type AccountSettingsFormData = {
  fio: string;
  login: string;
  phone: string;
  email: string;
};

const setUserDefaultValues = createEvent<AccountSettingsFormData>();

const sendAccountSettingsForm = createEvent();

const sendAccountSettingsFormFx = createEffect<
  AccountSettingsFormData,
  void,
  void
>({
  handler: async (data) => {
    await api.post("/contact-application", data);
  },
});

const changeAccountSettings = createEvent<{ key: string; value: string }>();

const $accountSettingsForm = createStore({
  fio: "",
  login: "",
  phone: "",
  email: "",
})
  .on(changeAccountSettings, (state, { key, value }) => ({
    ...state,
    [key]: value,
  }))
  .on(setUserDefaultValues, (_, payload) => payload)
  .reset(sendAccountSettingsFormFx.doneData);

sample({
  clock: sendAccountSettingsForm,
  source: $accountSettingsForm,
  target: sendAccountSettingsFormFx,
});

export {
  $changingPasswordForm,
  changePasswordForm,
  sendChangePasswordForm,
  setUserDefaultValues,
  $accountSettingsForm,
  changeAccountSettings,
  sendAccountSettingsForm,
};
