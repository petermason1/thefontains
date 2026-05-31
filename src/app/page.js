import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { testimonials } from "@/data/testimonials";

const BOOKING_PHONE = "+447545615742";
const BOOKING_PHONE_DISPLAY = "07545 615742";

const pillClass =
  "rounded-full border border-white/25 bg-black/40 px-4 py-2 text-xs font-medium text-zinc-100 backdrop-blur-md transition hover:border-accent/45 hover:bg-black/55 sm:text-sm";

export default function Home() {
  const homeSlides = [
    {
      src: "/Slider-Kit.jpg",
      alt: "The Fontains live — promotional photo",
      caption: "The Fontains — live on stage",
    },
  ];

  const featuredTestimonials = testimonials.slice(0, 8);

  const serviceCards = [
    {
      href: "/about",
      title: "About",
      body: "Meet Phil, Peter & Anthony — experience, venues, and what to expect.",
    },
    {
      href: "/functions",
      title: "Functions",
      body: "Weddings, corporate nights, Christmas parties, and pub & club bookings.",
    },
    {
      href: "/dj-service",
      title: "DJ Service",
      body: "Standalone DJ or after the live set — same pro sound and lighting.",
    },
    {
      href: "/gigs",
      title: "Gigs",
      body: "See where we are playing next and come watch us live.",
    },
    {
      href: "/set-list",
      title: "Set List",
      body: "Tried-and-tested dancefloor fillers across decades and genres.",
    },
    {
      href: "/testimonials",
      title: "Testimonials",
      body: "Read what couples, venues, and clients say about the band.",
    },
  ];

  return (
    <>
      <HomeHero slides={homeSlides}>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent drop-shadow-md sm:text-sm sm:tracking-[0.2em]">
          North East wedding &amp; function band
        </p>
        <h1 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-lg">
          Live music that fills the floor — weddings, parties, and events across
          the North East
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 drop-shadow-md sm:text-lg">
          The Fontains are a professional three-piece with a big sound, PAT-tested
          kit, full PLI, and an optional DJ service so your whole evening is covered
          in one booking.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_0_24px_-4px_rgba(201,168,76,0.45)] transition hover:bg-accent/88 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Get a quote
          </Link>
          <Link
            href="/gigs"
            className="inline-flex rounded-full border border-accent/45 bg-black/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-accent/65 hover:bg-accent/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            See us live
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          <Link href="/faq" className={pillClass}>
            PAT tested · PLI insured
          </Link>
          <Link href="/functions" className={pillClass}>
            3-piece · big live sound
          </Link>
          <Link href="/dj-service" className={pillClass}>
            DJ add-on available
          </Link>
        </div>
      </HomeHero>

      <div className="page-shell">
        <Reveal className="block">
          <TestimonialCarousel items={featuredTestimonials} />
        </Reveal>

        <Reveal className="block">
          <section className="mt-16 lg:mt-20">
            <h2 className="text-lg font-semibold tracking-tight text-accent">
              Explore
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((card) => (
                <li key={card.href}>
                  <Link
                    href={card.href}
                    className="group flex h-full flex-col rounded-2xl border border-border-subtle bg-surface-elevated p-6 shadow-black/20 transition duration-300 ease-out hover:-translate-y-1 hover:border-accent/25 hover:bg-surface-panel hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <span className="text-lg font-semibold text-white">
                      {card.title}
                    </span>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-subtle">
                      {card.body}
                    </span>
                    <span className="mt-4 text-sm font-semibold text-white underline decoration-accent/50 underline-offset-2 transition group-hover:text-accent group-hover:decoration-accent">
                      View
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal className="block">
          <section
            aria-label="Book the band"
            className="mt-16 rounded-2xl border border-border-subtle bg-surface-panel px-6 py-10 text-center sm:px-10 lg:mt-20"
          >
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Ready to check dates or get a price?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-subtle sm:text-base">
              Call{" "}
              <a
                href={`tel:${BOOKING_PHONE}`}
                className="font-semibold text-accent underline decoration-accent/40 underline-offset-2 hover:text-accent/90"
              >
                {BOOKING_PHONE_DISPLAY}
              </a>{" "}
              (Anth) or send your event details — we&apos;ll come back to you quickly.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_0_24px_-4px_rgba(201,168,76,0.35)] transition hover:bg-accent/88 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                Contact us
              </Link>
              <Link
                href="/faq"
                className="inline-flex rounded-full border border-accent/35 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/55 hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                FAQ
              </Link>
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
