import { PLURAL_MONTHS } from "@/lib/constants/month";
import dayjs from "dayjs";
import React from "react";
import { getFinishAuction } from "../../utils";

type Props = {
  finishAt: string;
};

const EndTimerAuction = ({ finishAt }: Props) => {
  if (!finishAt) return null;

  const { days, hours, minutes } = getFinishAuction(finishAt);

  return (
    <div className="lot-info">
      {dayjs(finishAt).isBefore(new Date()) ? (
        "Аукцион завершен"
      ) : (
        <>
          <div className="lot-desc fw-b">
            Конец лота через:
            <span className="blue">
              {days} дня {hours} часов {minutes} минуты
            </span>
          </div>
          <div className="lot-desc lot-end">
            (Лот закрывается{" "}
            <span>
              {dayjs(finishAt).format("D")}{" "}
              {PLURAL_MONTHS[Number(dayjs(finishAt).format("M")) - 1]} в{" "}
              {dayjs(finishAt).format("HH:mm")}
            </span>
            )
          </div>
        </>
      )}
    </div>
  );
};

export { EndTimerAuction };
