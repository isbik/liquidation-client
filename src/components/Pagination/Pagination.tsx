import React, { useMemo } from "react";

type Props = {
  total: number;
  perPage?: number;
  page?: number;
  onChange: (page: number) => void;
  hideNextButton?: boolean;
};

const Pagination = ({
  total,
  perPage = 6,
  page = 1,
  onChange,
  hideNextButton,
}: Props) => {
  const pages = useMemo(() => {
    return Math.ceil(total / perPage);
  }, [perPage, total]);

  if (pages <= 1) return null;

  return (
    <div className="pagination">
      <div className="pagination-items">
        {Array.from({ length: pages }).map((_, index) => (
          <span
            className={page === index ? "active" : ""}
            onClick={() => onChange(index)}
            key={index}
          >
            {index + 1}
          </span>
        ))}
      </div>
      {!hideNextButton && (
        <button
          disabled={page === pages - 1}
          onClick={() => onChange(page + 1)}
          className="bg-transparent border-none pagination-next"
        >
          Следующая страница
        </button>
      )}
    </div>
  );
};

export { Pagination };
