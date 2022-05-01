import Head from "next/head";
import React from "react";

type Props = {
  title: string;
};

const PageHead = ({ title }: Props) => {
  return (
    <Head>
      <title>{title} | Liquidation market</title>
    </Head>
  );
};

export { PageHead };
