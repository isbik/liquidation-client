import React, { useEffect, useState } from "react";
import { api } from "../../../services";

type Props = {
  parentCategoryId?: number | null;
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

const CategorySelect = ({ parentCategoryId = null, ...props }: Props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (props.disabled) return;

    api
      .get("/categories", {
        params: { parentCategory: parentCategoryId || "null", limit: 99 },
      })
      .then((response) => {
        setItems(response.data.items);
      });
  }, [parentCategoryId, props.disabled]);

  return (
    <select {...props}>
      {items.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};

export { CategorySelect };
