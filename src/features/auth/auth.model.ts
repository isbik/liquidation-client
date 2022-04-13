import { api } from "@/services";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { User } from "../user/user.types";
import { AuthData } from "./auth.types";

const makeAuth = createEvent<AuthData>();

const makeAuthFx = createEffect<AuthData, User, void>({
  handler: async (data) => {
    const response = await api.post("/auth/login", data);

    return response.data;
  },
});

const persistUser = createEvent();

const persistUserFx = createEffect<void, User, void>({
  handler: async () => {
    const response = await api.get("/auth");
    return response.data;
  },
});

const $authenticated = createStore(false).on(
  [makeAuthFx.doneData, persistUserFx.doneData],
  () => true
);

const $authenticating = combine(
  persistUserFx.pending,
  makeAuthFx.pending,
  (...params) => {
    return params.some(Boolean);
  }
);

sample({
  clock: makeAuth,
  target: makeAuthFx,
});

sample({
  clock: persistUser,
  target: persistUserFx,
});

export {
  $authenticated,
  makeAuth,
  makeAuthFx,
  persistUser,
  persistUserFx,
  $authenticating,
};
