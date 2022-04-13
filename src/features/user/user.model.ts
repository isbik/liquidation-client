import { createStore, forward } from "effector";
import { makeAuthFx, persistUserFx } from "../auth/auth.model";
import { User } from "./user.types";

const $user = createStore<User | null>(null);

forward({
  from: [persistUserFx.doneData, makeAuthFx.doneData],
  to: $user,
});

export { $user };
