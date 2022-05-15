import { api } from "@/services";
import { createEffect, createEvent, restore, sample } from "effector";
import { User } from "./user.types";

const logout = createEvent();

const logoutFx = createEffect({
  handler: async () => {
    api.post("/auth/logout");
  },
});

sample({
  clock: logout,
  target: logoutFx,
});

const setUser = createEvent<User | null>();

const $user = restore<User | null>(setUser, null).reset(logout);

const $authenticated = $user.map((state) => state !== null);

export { $user, setUser, $authenticated, logout };
