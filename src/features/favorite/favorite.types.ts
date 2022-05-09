export type FavoriteLot = {
  id: number;
  name: string;
  quantity: number;
  createdAt: string;
  recommendedRetailPrice: number;
};

export type FavoriteOrganization = {
  id: number;
  name: string;
  countLots: number;
};
