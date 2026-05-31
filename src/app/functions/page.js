import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Functions | The Fontains",
  description:
    "Weddings, corporate events, Christmas parties, and pub/club bookings with The Fontains.",
};

export default function FunctionsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-20">
      <PageHeader
        eyebrow="The Fontains"
        title="Functions"
        description="Weddings, corporate events, Christmas parties, and pub or club nights — here&apos;s how we work for each."
      >
        <nav
          aria-label="On this page"
          className="mt-8 flex flex-wrap gap-2 text-sm font-medium"
        >
          <a
            href="#wedding"
            className="rounded-full border border-white/20 bg-zinc-800 px-4 py-2 text-zinc-100 transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Wedding
          </a>
          <a
            href="#corporate"
            className="rounded-full border border-white/20 bg-zinc-800 px-4 py-2 text-zinc-100 transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Corporate
          </a>
          <a
            href="#christmas"
            className="rounded-full border border-white/20 bg-zinc-800 px-4 py-2 text-zinc-100 transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Christmas
          </a>
          <a
            href="#pub-club"
            className="rounded-full border border-white/20 bg-zinc-800 px-4 py-2 text-zinc-100 transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Pub / Club
          </a>
        </nav>
      </PageHeader>

      <section
        id="wedding"
        className="scroll-mt-28 rounded-2xl border border-border-subtle bg-white p-6 text-zinc-900 sm:p-8"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          Wedding
        </h2>
        <div className="mt-5 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            As a three-piece band, The Fontains are able to offer a great package
            at a great price without skimping on quality or entertainment value.
            The boys produce a big full sound associated with bands of twice
            their number but minus the wage bill. The band are also able to offer
            a professional DJ service for a reasonable additional cost, which
            means your evening&apos;s music can be taken care of in one place.
          </p>
          <p>
            They are as professional as they are entertaining. Expect high-spec,
            PAT-tested audio and lighting equipment and insurance certificates, as
            well as a smart appearance and professional attitude.
          </p>
          <p>
            The group often work closely with couples and their venues to make
            sure the day runs as smoothly as possible. Request a booking form
            through our{" "}
            <Link
              href="/contact"
              className="font-semibold text-zinc-900 underline underline-offset-2 hover:text-zinc-600"
            >
              contact page
            </Link>
            , and the boys are just a phone call away should you have any special
            requirements.
          </p>
        </div>
      </section>

      <section
        id="corporate"
        className="scroll-mt-28 rounded-2xl border border-border-subtle bg-surface-muted p-6 sm:p-8"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Corporate
        </h2>
        <div className="mt-5 space-y-4 text-zinc-300 leading-relaxed">
          <p>
            The Fontains are perfect for any companies looking to entertain
            employees and customers. Their diverse music spans five decades and
            is sure to entertain an equally diverse workforce.
          </p>
          <p>
            With high-spec audio and lighting equipment, a professional attitude,
            and all the relevant health and safety documents today&apos;s
            companies require, you can rest assured that The Fontains are the
            right band for your company&apos;s party.
          </p>
          <p>
            As a three-piece, The Fontains offer a great evening of live music for
            a much smaller fee than their six- and eight-piece counterparts.
            However, don&apos;t be put off by their small numbers — the band
            produces a great evening of live entertainment with a sound associated
            with bands of twice their number. A professional DJ service can also
            be provided by the band at a reasonable cost, which means your
            evening&apos;s entertainment can all be taken care of in one place.
          </p>
          <p>
            The band are happy to liaise with clients and venues to make sure your
            event runs seamlessly from the moment they begin to set up to the time
            they come to leave. Request a booking form through our{" "}
            <Link
              href="/contact"
              className="font-semibold text-white underline underline-offset-2 hover:text-zinc-200"
            >
              contact page
            </Link>
            , and the boys are just a phone call away should you have any special
            requirements.
          </p>
        </div>
      </section>

      <section
        id="christmas"
        className="scroll-mt-28 rounded-2xl border border-border-subtle bg-white p-6 text-zinc-900 sm:p-8"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          Christmas
        </h2>
        <div className="mt-5 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            If you take the great party music of The Fontains and add in some
            Christmas favourites, you have yourself the perfect Christmas party
            band — whether it&apos;s for corporate clients, sports clubs, or just
            private soirées.
          </p>
          <p>
            The boys have spent time selecting and arranging great Christmas party
            songs to make sure office parties go with a bang and to keep feet on
            the dance floor and bums off photocopiers. As a compact three-piece
            they are able to play most venues throughout the North East. Their
            professional DJ service also means that all your music needs can be
            handled in one place for a small fee, leaving you with more time to
            plan the buffet.
          </p>
          <p>
            The band will work with you and the venue to make sure your Christmas
            party runs seamlessly from the moment they begin to set up to the time
            they come to leave. Request a booking form through our{" "}
            <Link
              href="/contact"
              className="font-semibold text-zinc-900 underline underline-offset-2 hover:text-zinc-600"
            >
              contact page
            </Link>
            , and the boys are just a phone call away should you have any special
            requirements.
          </p>
        </div>
      </section>

      <section
        id="pub-club"
        className="scroll-mt-28 rounded-2xl border border-border-subtle bg-surface-muted p-6 sm:p-8"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Pub / Club
        </h2>
        <div className="mt-5 space-y-4 text-zinc-300 leading-relaxed">
          <p>
            The Fontains love to play live, which means if they aren&apos;t at a
            private function they can often be found playing in pubs and clubs
            across the North East.
          </p>
          <p>
            As you&apos;d expect, their diary can fill up with bookings being
            taken a year or more in advance. As a venue owner, the band ask you for
            as much notice as possible. However, if availability allows, The
            Fontains can fill last-minute cancellations with a negotiable fee. Use
            the{" "}
            <Link
              href="/contact"
              className="font-semibold text-white underline underline-offset-2 hover:text-zinc-200"
            >
              Contact page
            </Link>{" "}
            to get in touch.
          </p>
          <p>
            If you would like to find out when we are next playing publicly, head
            to the{" "}
            <Link
              href="/gigs"
              className="font-semibold text-white underline underline-offset-2 hover:text-zinc-200"
            >
              Gigs page
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
