"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LOGO_SRC = "/the-fontains-logo.jpg";

const primaryNav = [
  { href: "/about", label: "About" },
  { href: "/functions", label: "Functions" },
  { href: "/gigs", label: "Gigs" },
  { href: "/contact", label: "Contact" },
];

const moreNav = [
  { href: "/set-list", label: "Set list" },
  { href: "/photos", label: "Photos" },
  { href: "/videos", label: "Videos" },
  { href: "/dj-service", label: "DJ service" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
];

const quoteButtonClass =
  "inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground shadow-[0_0_20px_-6px_rgba(201,168,76,0.5)] transition hover:bg-accent/88 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black";

function NavLink({ href, active, onNavigate, children }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`relative block whitespace-nowrap rounded-lg px-2.5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black lg:py-2 xl:px-3 ${
        active ? "text-white" : "text-zinc-400 hover:text-zinc-100"
      }`}
    >
      {children}
      {active ? (
        <span
          className="pointer-events-none absolute inset-x-2 bottom-1.5 h-0.5 rounded-full bg-white/90 lg:bottom-1"
          aria-hidden
        />
      ) : null}
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  const moreWrapRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);
  const closeAll = () => {
    setIsMenuOpen(false);
    setMoreOpen(false);
  };

  const moreActive = moreNav.some((l) => pathname === l.href);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMoreOpen(false);
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!moreOpen) return;
    const onPointer = (e) => {
      if (
        moreWrapRef.current &&
        !moreWrapRef.current.contains(e.target)
      ) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [moreOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-black/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative flex items-center justify-between gap-4 py-3 lg:gap-6 lg:py-3">
          <div className="flex min-w-0 flex-1 items-center justify-between gap-4 lg:flex-initial">
            <Link
              href="/"
              onClick={closeAll}
              className="group flex min-w-0 flex-1 items-center gap-3 rounded-xl py-0.5 outline-none transition hover:opacity-95 focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black lg:flex-initial"
              aria-label="The Fontains — home"
            >
              <span className="relative shrink-0 overflow-hidden rounded-full border border-white/15 bg-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] ring-1 ring-black/40 transition group-hover:border-white/25">
                <Image
                  src={LOGO_SRC}
                  alt=""
                  width={44}
                  height={44}
                  priority
                  sizes="44px"
                  className="h-11 w-11 object-cover"
                />
              </span>
              <span className="min-w-0 text-left leading-tight">
                <span className="block truncate font-semibold tracking-tight text-white">
                  The Fontains
                </span>
                <span className="mt-0.5 hidden text-xs font-medium text-accent/75 sm:block lg:hidden xl:block">
                  Wedding &amp; function band
                </span>
              </span>
            </Link>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="main-navigation"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 text-zinc-200 transition hover:border-white/25 hover:bg-white/5 lg:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Menu</span>
              <span className="relative block h-3.5 w-[18px]">
                <span
                  className={`absolute left-0 top-0 block h-0.5 w-[18px] rounded-full bg-current transition ${
                    isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] block h-0.5 w-[18px] rounded-full bg-current transition ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 block h-0.5 w-[18px] rounded-full bg-current transition ${
                    isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>

          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={`${
              isMenuOpen
                ? "absolute inset-x-0 top-full block border-t border-white/[0.08] bg-black/95 px-4 pb-5 pt-4 backdrop-blur-xl sm:px-6"
                : "hidden"
            } lg:static lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-end lg:gap-3 lg:border-0 lg:bg-transparent lg:px-0 lg:pb-0 lg:pt-0`}
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:flex-nowrap lg:items-center lg:justify-end lg:gap-3">
              <ul className="flex flex-col gap-0.5 lg:flex-row lg:flex-nowrap lg:items-center lg:gap-0.5">
                {primaryNav.map((link) => (
                  <li key={link.href} className="shrink-0">
                    <NavLink
                      href={link.href}
                      active={pathname === link.href}
                      onNavigate={closeAll}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}

                <li
                  ref={moreWrapRef}
                  className="relative hidden shrink-0 lg:block"
                >
                  <button
                    type="button"
                    aria-expanded={moreOpen}
                    aria-haspopup="true"
                    aria-controls="more-nav-panel"
                    id="more-nav-button"
                    onClick={() => setMoreOpen((v) => !v)}
                    className={`flex w-full items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black lg:inline-flex lg:w-auto lg:justify-center lg:py-2 xl:px-3 ${
                      moreActive || moreOpen
                        ? "text-white"
                        : "text-zinc-400 hover:text-zinc-100"
                    }`}
                  >
                    <span>More</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      className={`shrink-0 text-zinc-500 transition-transform duration-200 ${
                        moreOpen ? "-rotate-180" : ""
                      }`}
                      aria-hidden
                    >
                      <path fill="currentColor" d="M6 8.5 1.5 4h9L6 8.5Z" />
                    </svg>
                  </button>

                  {moreOpen && (
                    <div
                      id="more-nav-panel"
                      role="menu"
                      aria-labelledby="more-nav-button"
                      className="absolute right-0 top-full z-50 mt-3 min-w-[13rem] space-y-0.5 rounded-2xl border border-white/[0.08] bg-zinc-950/95 p-2 shadow-2xl ring-1 ring-white/[0.05]"
                    >
                      {moreNav.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          role="menuitem"
                          onClick={() => {
                            setMoreOpen(false);
                            closeMenu();
                          }}
                          className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                            pathname === link.href
                              ? "bg-white/[0.08] font-medium text-white"
                              : "text-zinc-300 hover:bg-white/[0.06] hover:text-white"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              </ul>

              <div className="flex flex-col gap-4 lg:hidden">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                    Also on this site
                  </p>
                  <ul className="flex flex-col gap-0.5">
                    {moreNav.map((link) => (
                      <li key={link.href}>
                        <NavLink
                          href={link.href}
                          active={pathname === link.href}
                          onNavigate={closeAll}
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  onClick={closeAll}
                  className={`${quoteButtonClass} w-full py-3`}
                >
                  Get a quote
                </Link>
              </div>

              <Link
                href="/contact"
                onClick={closeAll}
                className={`${quoteButtonClass} hidden lg:inline-flex`}
              >
                Get a quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
