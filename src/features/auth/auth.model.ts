import { api } from "@/services";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  forward,
  sample,
} from "effector-next";
import { setUser } from "../user/user.model";
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

const changeAuthForm = createEvent<{ key: string; value: string }>();

const registerUser = createEvent();

// TODO
const registerUserFx = createEffect<unknown, User, void>({
  handler: async (data) => {
    const response = await api.post<User>("/auth/register", data);
    return response.data;
  },
});

const $authForm = createStore({
  organizationName: "",
  INN: "",
  KPP: "",
  ORGN: "",
  city: "",
  factAddress: "",
  legalAddress: "",
  postalCode: "",
  phone: "",
  email: "",
  fio: "",
  position: "",
  directorPhone: "",
  directorEmail: "",
  password: "",
}).on(changeAuthForm, (state, { key, value }) => ({ ...state, [key]: value }));

sample({
  clock: persistUser,
  target: persistUserFx,
});

sample({
  clock: registerUser,
  source: $authForm,
  target: registerUserFx,
});

forward({
  from: [persistUserFx.doneData, makeAuthFx.doneData, registerUserFx.doneData],
  to: setUser,
});

export {
  $authenticated,
  makeAuth,
  makeAuthFx,
  persistUser,
  persistUserFx,
  $authenticating,
  $authForm,
  changeAuthForm,
  registerUser,
};
