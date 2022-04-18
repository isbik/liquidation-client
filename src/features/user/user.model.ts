import { createEvent, restore } from "effector";
import { User } from "./user.types";

const setUser = createEvent<User | null>();

const $user = restore<User | null>(setUser, null);

export { $user, setUser };
