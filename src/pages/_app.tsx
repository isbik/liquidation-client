import { $authenticating, persistUser } from "@/features/auth/auth.model";
import { useStore } from "effector-react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../styles/style.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const loading = useStore($authenticating);

  useEffect(() => {
    persistUser();
  }, []);

  if (loading) return "Загрузка ...";

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default MyApp;
