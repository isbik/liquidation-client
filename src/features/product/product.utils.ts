import {
  CONDITION,
  PRODUCT_STATUSES,
  SUPPLIER_VALUES,
  UNIT_TYPES,
} from "@/lib";

export const getConditionText = (value: string) => {
  return CONDITION.find(({ value: v }) => v === value)?.text;
};

export const getUnitTypeText = (value: string) => {
  return UNIT_TYPES.find(({ value: v }) => v === value)?.text;
};

export const getAuctionType = (value: string) => {
  return "Стандартный"; // TODO
};

export const getStatusText = (value: string) => {
  return PRODUCT_STATUSES.find(({ value: v }) => v === value)?.text;
};

export const getSupplierText = (value: string) => {
  return SUPPLIER_VALUES.find(({ value: v }) => v === value)?.text;
};
