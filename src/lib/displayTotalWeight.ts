import { UnitType } from "@/features/product/product.types";

export const displayTotalWeight = (weight: number, unitType: UnitType) => {
  if (unitType === UnitType.kg) return weight;
  if (unitType === UnitType.tone) return weight * 1000;
};
