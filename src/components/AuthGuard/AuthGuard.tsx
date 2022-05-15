import {
  $authenticating,
  $isInitAuthenticating,
} from "@/features/auth/auth.model";
import { $user } from "@/features/user/user.model";
import { useStore } from "effector-react";
import { useRouter } from "next/router";
import React from "react";

const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();

  const isInit = useStore($isInitAuthenticating);
  const authenticating = useStore($authenticating);
  const user = useStore($user);

  if (isInit && !authenticating && user === null) {
    router.replace("/403");

    return null;
  }

  if ((!isInit || authenticating) && user === null) {
    return <>Загрузка ...</>;
  }

  return <>{children}</>;
};

export { AuthGuard };
