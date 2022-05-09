import { createEffect, createEvent, createStore, sample } from "effector";
import { toast } from "react-toastify";
import { api } from "../../services";

type ChangePasswordData = {
  password: string;
  newPassword: string;
  newPasswordConfirmation: string;
};

const sendChangePasswordForm = createEvent();

const sendChangePasswordFormFx = createEffect<ChangePasswordData, void, void>({
  handler: async (data) => {
    await api
      .post("/auth/password/change", {
        oldPassword: data.password,
        newPassword: data.newPassword,
      })
      .then(() => {
        toast.success("Пароль успешно изменен");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.error(error.response.data.message);
        }
      });
  },
});

const changePasswordForm = createEvent<{ key: string; value: string }>();

const $changingPasswordForm = createStore({
  password: "",
  newPassword: "",
  newPasswordConfirmation: "",
}).on(changePasswordForm, (state, { key, value }) => ({
  ...state,
  [key]: value,
}));

sample({
  clock: sendChangePasswordForm,
  source: $changingPasswordForm,
  target: sendChangePasswordFormFx,
});

type AccountSettingsFormData = {
  fio: string;
  position: string;
  directorPhone: string;
  directorEmail: string;
};

const setUserDefaultValues = createEvent<AccountSettingsFormData>();

const sendAccountSettingsForm = createEvent();

const sendAccountSettingsFormFx = createEffect<
  AccountSettingsFormData,
  void,
  void
>({
  handler: async (data) => {
    await api
      .patch("/users/update-director-info", data)
      .then(() => {
        toast.success("Данные были обновлены");
      })
      .catch((error) => {
        console.log(error.response);

        if (error.response.status === 400) {
          toast.error("Введите корректные данные");
        }
      });
  },
});

const changeAccountSettings = createEvent<{ key: string; value: string }>();

const $accountSettingsForm = createStore({
  fio: "",
  position: "",
  directorPhone: "",
  directorEmail: "",
})
  .on(changeAccountSettings, (state, { key, value }) => ({
    ...state,
    [key]: value,
  }))
  .on(setUserDefaultValues, (_, payload) => payload);

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
