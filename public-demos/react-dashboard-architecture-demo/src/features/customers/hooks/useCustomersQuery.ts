type CustomerRow = {
  id: string;
  name: string;
  status: "active" | "inactive";
};

type QueryState = "loading" | "error" | "empty" | "success";

type CustomersQueryResult = {
  state: QueryState;
  errorMessage?: string;
  rows: CustomerRow[];
};

export function useCustomersQuery(): CustomersQueryResult {
  const rows: CustomerRow[] = [
    { id: "cust-1", name: "Acme Health", status: "active" },
    { id: "cust-2", name: "Northwind Labs", status: "inactive" },
  ];

  return {
    state: rows.length === 0 ? "empty" : "success",
    rows,
  };
}
