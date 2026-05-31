import type { ReactNode } from "react";

type AsyncState = "loading" | "error" | "empty" | "success";

type AsyncDataPanelProps = {
  title: string;
  state: AsyncState;
  errorMessage?: string;
  children: ReactNode;
};

export function AsyncDataPanel({
  title,
  state,
  errorMessage,
  children,
}: AsyncDataPanelProps) {
  if (state === "loading") {
    return <section><h2>{title}</h2><p>Loading...</p></section>;
  }

  if (state === "error") {
    return <section><h2>{title}</h2><p>{errorMessage ?? "Something went wrong."}</p></section>;
  }

  if (state === "empty") {
    return <section><h2>{title}</h2><p>No records available.</p></section>;
  }

  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
