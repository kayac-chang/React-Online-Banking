import { Transaction } from "types";

type QueryResponse = {
  data: Transaction[];
  links: {
    next?: string;
  };
};

type SearchParams = {
  size?: number;
  number?: number;
};
export function fetchTransactions({
  size = 100,
  number,
}: SearchParams): Promise<QueryResponse> {
  const url = [
    "/api/transactions?",
    `page[size]=${size}`,
    number && `&page[number]=${number}`,
  ]
    .filter(Boolean)
    .join("");

  return fetch(url).then((res) => res.json());
}
