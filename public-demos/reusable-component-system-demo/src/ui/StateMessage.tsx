type StateMessageProps = {
  title: string;
  description: string;
};

export function StateMessage({ title, description }: StateMessageProps) {
  return (
    <div role="status" aria-live="polite">
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
}
