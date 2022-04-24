import { paginate } from "@/lib/effector/paginate";

const { $items, fetchItems, $total, $page, changePage } = paginate({
  url: "product-bets",
  params: {
    type: "outgoing",
  },
});

export { $items, fetchItems, $total, $page, changePage };
