import { createEffect, createEvent, createStore, sample } from "effector";
import { toast } from "react-toastify";
import { api } from "../../services";

type NotificationSettingsForm = {
  isSendNews: boolean;
  isSendNewBets: boolean;
  isSendNewCompetitorBets: boolean;
};

const setDefaultNotificationSettings = createEvent<NotificationSettingsForm>();

const sendNotificationSettingsForm = createEvent();

const sendNotificationSettingsFormFx = createEffect<
  NotificationSettingsForm,
  void,
  void
>({
  handler: async (data) => {
    await api
      .patch("/users/notification", data)
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

const changeNotificationSettings = createEvent<{
  key: string;
  value: string | boolean;
}>();

const $notificationSettingsForm = createStore({
  isSendNews: false,
  isSendNewBets: false,
  isSendNewCompetitorBets: false,
})
  .on(changeNotificationSettings, (state, { key, value }) => ({
    ...state,
    [key]: value,
  }))
  .on(setDefaultNotificationSettings, (_, payload) => payload);

sample({
  clock: sendNotificationSettingsForm,
  source: $notificationSettingsForm,
  target: sendNotificationSettingsFormFx,
});

export {
  $notificationSettingsForm,
  changeNotificationSettings,
  sendNotificationSettingsForm,
  setDefaultNotificationSettings,
};
