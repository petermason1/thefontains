export default function PageHeader({
  title,
  description,
  eyebrow,
  children,
  className = "",
  padding = "default",
}) {
  const pad =
    padding === "compact"
      ? "px-8 py-12"
      : "px-8 py-12 sm:px-12 sm:py-14";

  return (
    <section
      className={`rounded-3xl border border-border-subtle bg-surface-panel ${pad} ${className}`}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h1
        className={`text-4xl font-extrabold tracking-tight text-white sm:text-5xl ${eyebrow ? "mt-3" : ""}`}
      >
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-3xl text-subtle">{description}</p>
      ) : null}
      {children}
    </section>
  );
}
