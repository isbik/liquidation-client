import { CONDITION, UNIT_TYPES } from "@/lib";

export const getConditionText = (value: string) => {
  return CONDITION.find(({ value: v }) => v === value)?.text;
};

export const getUnitTypeText = (value: string) => {
  return UNIT_TYPES.find(({ value: v }) => v === value)?.text;
};

export const getAuctionType = (value: string) => {
  return "Стандартный"; // TODO
};
