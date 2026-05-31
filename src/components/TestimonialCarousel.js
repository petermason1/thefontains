"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

export default function TestimonialCarousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, [items.length]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  return (
    <section className="mt-14 rounded-3xl border border-border-subtle border-t-accent/15 bg-surface-panel p-5 sm:mt-16 sm:p-8 lg:p-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
          Testimonials
        </h2>
        <Link
          href="/testimonials"
          className="w-fit text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition hover:text-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          Read all reviews
        </Link>
      </div>

      <blockquote
        className="mt-6 text-lg font-medium leading-snug tracking-tight text-zinc-100 sm:mt-8 sm:text-2xl sm:leading-tight lg:text-3xl"
        aria-live="polite"
      >
        &ldquo;{activeItem.quote}&rdquo;
      </blockquote>
      <p className="mt-5 sm:mt-6">
        <span className="inline-block max-w-full break-words rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs font-medium text-zinc-200 sm:px-4 sm:text-sm">
          {activeItem.source}
        </span>
      </p>

      <div className="mt-6 flex flex-col gap-4 sm:mt-8">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-accent/40 hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={goNext}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-accent/40 hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            Next
          </button>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:justify-start"
          role="tablist"
          aria-label="Choose testimonial"
        >
          {items.map((item, index) => (
            <button
              key={`${item.source}-${index}`}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1} from ${item.source}`}
              className={`h-2.5 w-2.5 shrink-0 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${
                activeIndex === index
                  ? "bg-accent shadow-[0_0_10px_rgba(201,168,76,0.5)]"
                  : "bg-zinc-600 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
