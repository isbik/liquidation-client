import React from "react";

type Props = {
  total: number;
  perPage?: number;
  page?: number;
  onChange: (page: number) => void;
};

const Pagination = ({ total, perPage = 6, page = 1, onChange }: Props) => {
  return (
    <div className="pagination">
      <div className="pagination-items">
        {Array.from({ length: Math.floor(total / perPage) }).map((_, index) => (
          <span
            className={page === index ? "active" : ""}
            onClick={() => onChange(index)}
            key={index}
          >
            {index + 1}
          </span>
        ))}
      </div>
      <div onClick={() => onChange(page + 1)} className="pagination-next">
        Следующая страница
      </div>
    </div>
  );
};

export { Pagination };
