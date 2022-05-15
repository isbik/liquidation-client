import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export { MainLayout };
