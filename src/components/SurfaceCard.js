export default function SurfaceCard({
  as: Tag = "article",
  variant = "dark",
  className = "",
  children,
}) {
  const base =
    "rounded-2xl border border-border-subtle p-6 sm:p-8";
  const variants = {
    dark: "bg-surface-muted text-zinc-100",
    light: "bg-white text-zinc-900",
    panel: "bg-surface-elevated text-zinc-100",
  };

  return (
    <Tag className={`${base} ${variants[variant] ?? variants.dark} ${className}`}>
      {children}
    </Tag>
  );
}
