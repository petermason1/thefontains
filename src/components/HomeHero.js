"use client";

import Image from "next/image";
import { useState } from "react";

export default function HomeHero({ slides, children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = slides[activeIndex];
  const multiple = slides.length > 1;

  return (
    <section
      aria-label="Introduction"
      className="relative isolate min-h-[min(70dvh,820px)] w-full overflow-hidden sm:min-h-[min(78dvh,820px)]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          fill
          priority={activeIndex === 0}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/55 to-black/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/35 to-transparent sm:from-black/70"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[min(70dvh,820px)] w-full max-w-6xl flex-col justify-end px-4 pb-10 pt-24 sm:min-h-[min(78dvh,820px)] sm:px-6 sm:pb-14 sm:pt-32 lg:pt-36">
        <div>{children}</div>
        {!multiple ? (
          <p className="mt-6 text-sm leading-snug text-zinc-400">
            {active.caption}
          </p>
        ) : (
          <>
            <div
              className="mt-8 flex flex-wrap justify-center gap-2 sm:justify-start"
              role="tablist"
              aria-label="Hero photos"
            >
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-label={`Show photo ${index + 1}: ${slide.alt || slide.caption || "slide"}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                    activeIndex === index
                      ? "w-10 bg-accent shadow-[0_0_12px_rgba(201,168,76,0.45)]"
                      : "w-8 bg-zinc-500 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>
            <p
              className="mt-4 text-center text-sm text-zinc-400 sm:text-left"
              aria-live="polite"
            >
              {active.caption}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
