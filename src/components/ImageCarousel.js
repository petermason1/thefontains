"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageCarousel({
  slides,
  className = "",
  variant = "default",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];
  const multiple = slides.length > 1;

  if (variant === "hero") {
    return (
      <div className={`absolute inset-0 z-0 ${className}`}>
        <div className="relative h-full min-h-[min(78dvh,820px)] w-full">
          <Image
            src={activeSlide.src}
            alt={activeSlide.alt}
            fill
            priority={activeIndex === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {multiple ? (
          <div
            className="absolute bottom-8 left-0 right-0 z-[5] flex justify-center gap-2 px-6"
            role="tablist"
            aria-label="Carousel slides"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show slide ${index + 1}: ${slide.alt || slide.caption || "image"}`}
                className={`h-2.5 w-8 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  activeIndex === index
                    ? "bg-white"
                    : "bg-zinc-600 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <section
      className={`rounded-3xl border border-border-subtle bg-surface-panel p-4 ${className}`}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={activeSlide.src}
          alt={activeSlide.alt}
          width={1600}
          height={900}
          priority={activeIndex === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
          className="h-auto w-full object-cover"
        />
      </div>

      <div
        className={`mt-4 flex gap-4 ${multiple ? "items-center justify-between" : ""}`}
      >
        <p className="text-sm text-subtle">{activeSlide.caption}</p>
        {multiple ? (
          <div className="flex shrink-0 gap-2" role="tablist" aria-label="Carousel slides">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show slide ${index + 1}: ${slide.alt || slide.caption || "image"}`}
                className={`h-2.5 w-8 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${
                  activeIndex === index
                    ? "bg-white"
                    : "bg-zinc-600 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
