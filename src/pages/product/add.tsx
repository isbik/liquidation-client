import { Footer, Header, PageHead } from "@/components";
import { ProductCreateForm } from "@/features/product/components/ProductCreateForm";
import { ProductPreview } from "@/features/product/components/ProductPreview";
import { useStore } from "effector-react";
import React from "react";
import { $isPreview } from "../../features/product/product.create.model";

const AddAdvertisement = () => {
  const isPreview = useStore($isPreview);

  return (
    <>
      <PageHead title="Создание продукта" />

      <Header />
      {isPreview ? <ProductPreview /> : <ProductCreateForm />}
      <Footer />
    </>
  );
};

export default AddAdvertisement;
