import { AsyncDataPanel } from "../../../../shared/ui/AsyncDataPanel";
import { useCustomersQuery } from "../hooks/useCustomersQuery";

export function CustomersPage() {
  const query = useCustomersQuery();

  return (
    <AsyncDataPanel
      title="Customers"
      state={query.state}
      errorMessage={query.errorMessage}
    >
      <ul>
        {query.rows.map((row) => (
          <li key={row.id}>
            {row.name} · {row.status}
          </li>
        ))}
      </ul>
    </AsyncDataPanel>
  );
}
