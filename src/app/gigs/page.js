import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SurfaceCard from "@/components/SurfaceCard";
import { gigs } from "@/data/gigs";

export const metadata = {
  title: "Gigs | The Fontains",
  description: "Upcoming gigs for The Fontains.",
};

function formatGigDate(iso) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function GigsPage() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Gigs"
        description="Live dates and ticket updates. Come see us before you book."
        padding="compact"
      />

      <section className="mt-10 space-y-4">
        {gigs.map((gig) => (
          <SurfaceCard key={`${gig.date}-${gig.venue}`} variant="dark">
            <p className="text-sm font-semibold uppercase tracking-wide text-subtle">
              {formatGigDate(gig.date)}
            </p>
            <h2 className="mt-2 break-words text-xl font-semibold text-white">{gig.venue}</h2>
            <p className="text-subtle">{gig.city}</p>
            {gig.notes ? (
              <p className="mt-3 text-sm text-subtle">{gig.notes}</p>
            ) : null}
            {gig.ticketUrl ? (
              <p className="mt-4">
                <Link
                  href={gig.ticketUrl}
                  className="text-sm font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Tickets / venue
                </Link>
              </p>
            ) : null}
          </SurfaceCard>
        ))}
      </section>
    </div>
  );
}
