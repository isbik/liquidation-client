export type User = {
  id: number;
  fio: string;
  email: string;
  phone: string;
  position: string;
  directorPhone: string;
  directorEmail: string;
  settings: {
    isSendNews: boolean;
    isSendNewBets: boolean;
    isSendNewCompetitorBets: boolean;
  };
};
