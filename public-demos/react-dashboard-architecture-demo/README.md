# React Dashboard Architecture Demo

Original TypeScript-first reference structure for dashboards, admin tools, and CRM-style products.

## What This Demo Shows

- Route-level orchestration without pushing business logic into page components
- A feature-oriented folder structure
- Clear boundaries between data hooks, presentation components, and shared UI

## Example Structure

```text
src/
  app/
    routes/
    providers/
  features/
    customers/
      api/
      components/
      hooks/
      pages/
      types.ts
  shared/
    ui/
    layout/
    utils/
```

## Design Rules

- Keep route pages thin
- Convert backend responses into UI-safe view models
- Standardize loading, empty, and error states
- Avoid re-creating table, filter, and modal patterns in every feature

## Included Sample Files

- `src/features/customers/pages/CustomersPage.tsx`
- `src/features/customers/hooks/useCustomersQuery.ts`
- `src/shared/ui/AsyncDataPanel.tsx`

## Why This Exists

This demo is intentionally public-safe and focuses on architecture thinking, not on any confidential implementation.
