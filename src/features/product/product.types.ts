import { CloudFile } from "@/types";

export type Product = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  category: number | { id: number; name: string };
  subCategory: number;
  owner: number;
  seller: string;
  condition: string;
  price: number;
  currency: string;
  minRate: number;
  recommendedRetailPrice: number;
  quantity: number;
  totalWeight: number;
  unitType: UnitType;
  location: string;
  manifesto?: any;
  supplier: Supplier;
  // TODO
  auctionType: "standard";
  createdAt: string;
  finishAuctionAt: string;
  updatedAt: string;
  status: ProductStatus;
  bet?: {
    userId: number;
    count: number;
  };
  viewsCount?: number;
  favoritesCount?: number;
};

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

export enum ProductStatus {
  draft = "draft",
  active = "active",
  finished = "finished",
  sold = "sold",
}
