import { $authenticating, persistUser } from "@/features/auth/auth.model";
import { useStore } from "effector-react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/style.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const loading = useStore($authenticating);

  useEffect(() => {
    persistUser();
  }, []);

  if (loading) return "Загрузка ...";

  return <Component {...pageProps} />;
}

export default MyApp;
