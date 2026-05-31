import Link from "next/link";

const bookLinks = [
  { href: "/contact", label: "Get a quote" },
  { href: "/functions", label: "Functions & weddings" },
  { href: "/dj-service", label: "DJ service" },
  { href: "/faq", label: "FAQ" },
];

const exploreLinks = [
  { href: "/about", label: "About" },
  { href: "/gigs", label: "Gigs" },
  { href: "/set-list", label: "Set list" },
  { href: "/photos", label: "Photos" },
  { href: "/videos", label: "Videos" },
  { href: "/testimonials", label: "Testimonials" },
];

const socialBadges = [
  {
    href: "https://www.facebook.com/thefontains",
    label: "Facebook",
    hoverAccent:
      "hover:border-[#1877F2]/55 hover:bg-[#1877F2]/18 hover:text-[#A8C9FF]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/thefontains/",
    label: "Instagram",
    hoverAccent:
      "hover:border-pink-500/45 hover:bg-gradient-to-br hover:from-[#833ab4]/40 hover:via-[#e1306c]/32 hover:to-[#fcb045]/25 hover:text-white",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 5.838c3.403 0 6.162 2.759 6.162 6.162 0 3.399-2.76 6.162-6.162 6.162S5.838 15.403 5.838 12 9.597 5.838 12 5.838zM12 16c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.645-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/TheFontains",
    label: "YouTube",
    hoverAccent:
      "hover:border-[#FF0000]/55 hover:bg-[#FF0000]/16 hover:text-[#FF6B6B]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-black text-zinc-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Book
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {bookLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-300 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-300 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Contact
            </p>
            <p className="mt-3 text-sm text-zinc-300">
              For bookings and availability, use the{" "}
              <Link href="/contact" className="text-white underline-offset-4 hover:underline">
                contact form
              </Link>{" "}
              or call{" "}
              <a
                href="tel:+447545615742"
                className="text-white underline-offset-4 hover:underline"
              >
                07545 615742
              </a>
              .
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Follow
            </p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {socialBadges.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-label={`${item.label} (opens in a new tab)`}
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-zinc-950/80 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${item.hoverAccent}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-zinc-500">
              © {year} The Fontains. All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border-subtle pt-6 text-center text-xs text-zinc-500 sm:text-left">
          Built with Next.js, React, and Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
