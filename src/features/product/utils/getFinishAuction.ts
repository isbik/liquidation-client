import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const getFinishAuction = (date: string) => {
  if (!date || Date.now() > new Date(date).getTime()) {
    return { days: 0, hours: 0, minutes: 0, isFinish: true };
  }

  const now = dayjs(new Date());
  const end = dayjs(date);

  const days = dayjs.duration(end.diff(now)).days();

  const hours = dayjs.duration(end.diff(now)).hours();

  const minutes = dayjs.duration(end.diff(now)).minutes();

  return { days, hours, minutes };
};

export { getFinishAuction };
