import React, { useMemo } from "react";

type Props = {
  total: number;
  perPage?: number;
  page?: number;
  onChange: (page: number) => void;
};

const Pagination = ({ total, perPage = 6, page = 1, onChange }: Props) => {
  const pages = useMemo(() => {
    return Math.ceil(total / perPage);
  }, [perPage, total]);

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
      <button
        disabled={page === pages - 1}
        onClick={() => onChange(page + 1)}
        className="pagination-next"
      >
        Следующая страница
      </button>
    </div>
  );
};

export { Pagination };
