import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonTone = "primary" | "secondary" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: ButtonTone;
  busy?: boolean;
  children: ReactNode;
};

export function Button({
  tone = "primary",
  busy = false,
  children,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button data-tone={tone} disabled={busy || disabled} {...rest}>
      {busy ? "Working..." : children}
    </button>
  );
}
