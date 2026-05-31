/** @typedef {{ date: string; venue: string; city: string; ticketUrl?: string; notes?: string }} Gig */

/** @type {Gig[]} */
export const gigs = [
  {
    date: "2026-05-24",
    venue: "The Cluny",
    city: "Newcastle upon Tyne",
    ticketUrl: "https://thecluny.com/",
    notes: "Public show — check venue for tickets.",
  },
  {
    date: "2026-06-14",
    venue: "Private wedding",
    city: "Northumberland",
    notes: "Invite only.",
  },
  {
    date: "2026-07-19",
    venue: "Summer festival (TBA)",
    city: "North East",
    notes: "Details to be announced.",
  },
];
