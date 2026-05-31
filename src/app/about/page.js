import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About | The Fontains",
  description:
    "Meet Phil, Peter and Anthony — The Fontains: experienced North East wedding and function band with decades of live performance.",
};

const chipClass =
  "rounded-full border border-white/15 bg-surface-elevated px-4 py-2 text-sm text-zinc-200";

export default function AboutPage() {
  const venues = [
    "Slaley Hall",
    "Beamish Hall",
    "The Apartment Group",
    "Woodhill Hall",
    "Mercure Hotels",
    "The Black Horse, Beamish",
    "The Inn Group, Northumberland",
  ];

  const corporateClients = ["NHS", "Sage", "RAF", "British Army"];

  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 px-6 py-16 sm:space-y-14 sm:py-20">
      <Reveal>
        <PageHeader
          eyebrow="About"
          title="Meet the band"
          description="Phil, Peter and Anthony — three experienced musicians who make up The Fontains, one of the North East&apos;s busiest wedding and function bands."
        />
      </Reveal>

      <Reveal className="block">
        <section className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="space-y-6 text-lg leading-relaxed text-subtle lg:col-span-7">
            <p>
              Thanks for visiting our site. What started as friends playing the
              songs of our favourite artists has grown into the busy band you see
              today — still driven by the same love of live music.
            </p>
            <p>
              There&apos;s over{" "}
              <span className="font-semibold text-zinc-200">
                70 years of playing and experience
              </span>{" "}
              between us. We&apos;ve toured with original acts at venues like The
              Cavern, King Tut&apos;s and academies across the UK. These days
              you&apos;ll find us at country houses and grand halls, filling
              dancefloors and helping couples celebrate.
            </p>
          </div>
          <figure className="relative overflow-hidden rounded-2xl border border-border-subtle bg-zinc-950 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.06] lg:col-span-5">
            <Image
              src="/Slider-Kit.jpg"
              alt="The Fontains performing live"
              width={900}
              height={600}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <figcaption className="border-t border-white/10 bg-black/40 px-4 py-3 text-center text-xs text-zinc-400 backdrop-blur-sm">
              Live on stage — the sound and energy you get at your event
            </figcaption>
          </figure>
        </section>
      </Reveal>

      <Reveal className="block">
        <section
          aria-label="At a glance"
          className="grid gap-4 sm:grid-cols-3"
        >
          <article className="rounded-2xl border border-border-subtle bg-surface-elevated p-6 transition hover:border-accent/20">
            <p className="text-4xl font-extrabold tracking-tight text-accent tabular-nums">
              70+
            </p>
            <p className="mt-2 text-sm leading-snug text-subtle">
              Years of combined live experience across the trio
            </p>
          </article>
          <article className="rounded-2xl border border-border-subtle bg-surface-elevated p-6 transition hover:border-accent/20">
            <p className="text-4xl font-extrabold tracking-tight text-accent tabular-nums">
              100%
            </p>
            <p className="mt-2 text-sm leading-snug text-subtle">
              Live performance at every event — no backing tracks
            </p>
          </article>
          <article className="rounded-2xl border border-border-subtle bg-surface-elevated p-6 transition hover:border-accent/20">
            <p className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              North East
            </p>
            <p className="mt-2 text-sm leading-snug text-subtle">
              Venues and counties we know inside out
            </p>
          </article>
        </section>
      </Reveal>

      <Reveal className="block">
        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl border border-border-subtle bg-surface-panel p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Trusted by top venues
            </h2>
            <p className="mt-4 text-subtle">
              As well as couples, we&apos;re the choice for some of the
              region&apos;s leading venues:
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {venues.map((venue) => (
                <li key={venue}>
                  <span className={chipClass}>{venue}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-border-subtle bg-surface-panel p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Corporate clients
            </h2>
            <p className="mt-4 text-subtle">
              We&apos;ve played for numerous corporate clients, including:
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {corporateClients.map((client) => (
                <li key={client}>
                  <span className={chipClass}>{client}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Reveal>

      <Reveal className="block">
        <section className="rounded-2xl border border-border-subtle border-t-accent/20 bg-surface-elevated p-6 sm:p-10">
          <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Why couples book The Fontains
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-subtle">
            <p>
              To help your party reach its potential, we bring experience and
              knowledge that only years of gigging can give. Our large repertoire
              has been refined over time so we can tailor a set as diverse as
              your dancefloor.
            </p>
            <p>
              We&apos;ve played most major wedding venues in the North East — we
              know the layouts, we&apos;re comfortable on site, and we&apos;ve
              sorted the quirks each room can throw at you. On top of that,
              we&apos;ve invested in sound and lighting and the technical skill
              to get the best from it.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal className="block">
        <section className="rounded-2xl border border-border-subtle bg-surface-panel px-6 py-10 text-center sm:px-12">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Our approach
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-subtle">
            <p>
              When we started out, we weren&apos;t aiming to become a wedding band
              — we wanted to have fun doing what we loved. That attitude is a big
              part of why people asked us back for weddings and events, and why
              we&apos;re still doing it today.
            </p>
            <p>
              If you want great music played well and{" "}
              <span className="font-semibold text-zinc-200">
                100% live every time
              </span>
              , get in touch and we&apos;ll quote your date.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_0_24px_-4px_rgba(201,168,76,0.35)] transition hover:bg-accent/88 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Get a quote
            </Link>
            <Link
              href="/gigs"
              className="inline-flex rounded-full border border-accent/35 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/55 hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              See us live
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
