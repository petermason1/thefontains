import PageHeader from "@/components/PageHeader";
import { testimonials } from "@/data/testimonials";

export const metadata = {
  title: "Testimonials | The Fontains",
  description: "What people are saying about The Fontains.",
};

export default function TestimonialsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <PageHeader
        title="Testimonials"
        description="Feedback from venues, organisers, and audiences."
        padding="compact"
      />

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <article
            key={`${item.source}-${item.quote.slice(0, 32)}`}
            className="rounded-2xl border border-border-subtle bg-surface-muted p-6"
          >
            <blockquote className="text-zinc-200">&quot;{item.quote}&quot;</blockquote>
            <p className="mt-4 text-sm font-semibold text-subtle">{item.source}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
