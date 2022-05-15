import { CloudFile } from "@/types";

export enum DeliveryMethod {
  RUSSIA_POST = "RUSSIA_POST",
  PERSONAL_COURIER = "PERSONAL_COURIER",
  PICKUP = "PICKUP",
}

export enum DeliverySize {
  BOX = "BOX",
  PALLET = "PALLET",
  PALLET_SMALL = "PALLET_SMALL",
  EUROPALLET = "EUROPALLET",
  TRUCK_1_5 = "TRUCK_1_5",
  TRUCK_3_5 = "TRUCK_3_5",
  TRUCK_5 = "TRUCK_5",
  TRUCK_10 = "TRUCK_10",
  EUROFURA = "EUROFURA",
  CONTAINER_22 = "CONTAINER_22",
  CONTAINER_26 = "CONTAINER_26",
  CONTAINER_30 = "CONTAINER_30",
}

export type Product = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  category: number | { id: number; name: string };
  subCategory: number;
  owner: number | { id: number };
  images: CloudFile[];
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
  manifesto?: CloudFile;
  supplier: Supplier;
  // TODO
  auctionType: "standard";
  createdAt: string;
  finishAuctionAt: string;
  updatedAt: string;
  status: ProductStatus;
  bet?:
    | {
        userId: number;
        count: number;
      }
    | number;
  viewsCount?: number;
  favoritesCount?: number;
  isFavorite?: boolean;
  delivery: {
    size: DeliverySize;
    method: DeliveryMethod;
  };
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
  deliveryMethod: DeliveryMethod;
  deliverySize: DeliverySize;
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
