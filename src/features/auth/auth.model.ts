import { messageResponseToErrorsArray } from "@/lib/errors";
import { api } from "@/services";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  forward,
  guard,
  sample,
} from "effector";
import { toast } from "react-toastify";
import { $user, setUser } from "../user/user.model";
import { User } from "../user/user.types";
import { AuthData } from "./auth.types";

const makeAuth = createEvent<AuthData>();

const makeAuthFx = createEffect<AuthData, User | null>({
  handler: async (data) => {
    const response: any = await api
      .post<User>("/auth/login", data)
      .catch((error) => {
        toast.error(error.response.data.message);
      });

    return (response.data as User) || null;
  },
});

const persistUser = createEvent();

const persistUserFx = createEffect<void, User | null, void>({
  handler: async () => {
    console.log("call persistUserFx");
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

const $canPersistUser = combine(
  $user,
  persistUserFx.pending,
  (user, isLoading) => {
    return !user && !isLoading;
  }
);

sample({
  clock: makeAuth,
  target: makeAuthFx,
});

guard({
  clock: persistUser,
  filter: $canPersistUser,
  target: persistUserFx,
});

const changeAuthForm = createEvent<{ key: string; value: string }>();

const registerUser = createEvent();

const registerUserFx = createEffect<unknown, User | null>({
  handler: async (data) => {
    try {
      const response = await api.post<User>("/auth/register", data);
      return response.data;
    } catch (error: any) {
      if (error.response.status === 400) {
        const { message } = error.response.data;

        const errors = messageResponseToErrorsArray(message);

        errors.forEach((m) => toast.warn(m));
      }
    }
    return null;
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
