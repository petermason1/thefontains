import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "DJ Service | The Fontains",
  description:
    "Professional DJ service from The Fontains — standalone or with the live band.",
};

export default function DjServicePage() {
  return (
    <div className="page-shell space-y-8 sm:space-y-10">
      <PageHeader eyebrow="The Fontains" title="DJ Service">
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-subtle">
          The Fontains offer a DJ service that can be booked as a standalone
          service or to accompany their live set. Using the same high-spec audio
          and lighting equipment as used for the band, the group are able to
          play great songs with a depth and clarity that most mobile DJs would
          struggle to match.
        </p>
      </PageHeader>

      <section className="rounded-2xl border border-border-subtle bg-white p-5 text-zinc-900 sm:p-8">
        <div className="max-w-4xl space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Drawing on their love of music, the guys are able to play a great set
            to match the occasion. If you want cheese they&apos;ve got it by the
            bucket load, enough soul and Motown to last a night, and if needs be
            they can even belt out a bit of One Direction and Bieber if it keeps
            everyone happy.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-border-subtle bg-surface-muted p-5 sm:p-8">
        <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-3xl">
          Think you can do a better job?
        </h2>
        <p className="mt-4 max-w-4xl text-zinc-300 leading-relaxed">
          Not a problem. If you can provide the music in advance of the occasion
          in a suitable format (iTunes or Windows Media files), the band will make
          sure it is queued up and ready to play on the night, further reducing
          their fee.
        </p>
      </section>

      <section className="rounded-2xl border border-border-subtle bg-white p-5 text-zinc-900 sm:p-8">
        <p className="max-w-4xl text-zinc-700 leading-relaxed">
          As with all their events, the band are happy to liaise with you and the
          venue to make sure your event runs seamlessly from the moment they begin
          to set up to the time they come to leave. Request a booking form through
          our{" "}
          <Link
            href="/contact"
            className="font-semibold text-zinc-900 underline underline-offset-2 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            contact page
          </Link>
          , and the boys are just a phone call away should you have any special
          requirements.
        </p>
      </section>
    </div>
  );
}
