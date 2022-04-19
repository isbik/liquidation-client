import { Footer, Header } from "@/components";
import { ProductCreateForm } from "@/features/product/components/ProductCreateForm";
import { ProductPreview } from "@/features/product/components/ProductPreview";
import { useStore } from "effector-react";
import React from "react";
import { $isPreview } from "../../features/product/product.create.model";

const AddAdvertisement = () => {
  const isPreview = useStore($isPreview);

  return (
    <>
      <Header />
      {/* <pre>{JSON.stringify(productForm, null, 3)}</pre> */}
      {isPreview ? <ProductPreview /> : <ProductCreateForm />}
      <Footer />
    </>
  );
};

export default AddAdvertisement;
