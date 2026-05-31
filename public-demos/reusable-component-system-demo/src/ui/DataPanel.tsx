import type { ReactNode } from "react";
import { StateMessage } from "./StateMessage";

type AsyncState = "idle" | "loading" | "error" | "empty" | "success";

type DataPanelProps = {
  title: string;
  state: AsyncState;
  errorMessage?: string;
  children: ReactNode;
};

export function DataPanel({
  title,
  state,
  errorMessage,
  children,
}: DataPanelProps) {
  if (state === "loading") {
    return <StateMessage title={title} description="Loading content." />;
  }

  if (state === "error") {
    return <StateMessage title={title} description={errorMessage ?? "Unable to load content."} />;
  }

  if (state === "empty") {
    return <StateMessage title={title} description="No content to display." />;
  }

  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
