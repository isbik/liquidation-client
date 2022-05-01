export type User = {
  id: number;
  fio: string;
  email: string;
  phone: string;
  position: string;
  directorPhone: string;
  directorEmail: string;
  organizationName: string;
  city: string;
  legalAddress: string;
  postalCode: string;
  INN: string;
  ORGN: string;
  KPP: string;
  settings: {
    isSendNews: boolean;
    isSendNewBets: boolean;
    isSendNewCompetitorBets: boolean;
  };
};
