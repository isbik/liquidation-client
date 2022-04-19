import { CloudFile } from "@/types";

export type CreateProductForm = {
  name: string;
  shortDescription: string;
  description: string;
  categoryId: number | null;
  subCategoryId: number | null;
  seller: string;
  condition: Condition;
  price: number | null;
  minRate: number | null;
  recommendedRetailPrice: number | null;
  quantity: number;
  totalWeight: number | null;
  unitType: UnitType;
  location: string;
  supplier: Supplier;
  images: CloudFile[];
  manifestoFile: CloudFile | null;
};

export enum Condition {
  new = "new",
  as_new = "as_new",
  good = "good",
  acceptable = "acceptable",
  bad = "bad",
}

export enum UnitType {
  kg = "kg",
  tone = "tone",
}

export enum Supplier {
  owner = "owner",
  customer = "customer",
}
