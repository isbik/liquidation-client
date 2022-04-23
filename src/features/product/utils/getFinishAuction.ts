import dayjs from "dayjs";

const getFinishAuction = (date: string) => {
  if (!date) {
    return { days: 0, hours: 0, minutes: 0, isFinish: true };
  }

  const days = dayjs(date).diff(new Date(), "d");

  const hours = dayjs(date)
    .set("date", new Date().getDate())
    .diff(new Date(), "h");

  const minutes = dayjs(date)
    .set("date", new Date().getDate())
    .set("hours", new Date().getHours())
    .diff(new Date(), "m");

  return { days, hours, minutes };
};

export { getFinishAuction };
