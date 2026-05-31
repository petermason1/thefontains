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
      ? "px-5 py-8 sm:px-8 sm:py-10"
      : "px-5 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14";

  return (
    <section
      className={`rounded-3xl border border-border-subtle bg-surface-panel ${pad} ${className}`}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wide text-accent sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h1
        className={`text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl ${eyebrow ? "mt-3" : ""}`}
      >
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-3xl text-base text-subtle sm:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </section>
  );
}
