"use client";

import { useActionState } from "react";
import { submitContact } from "./actions";

const initialState = { ok: false, error: null };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );

  if (state?.ok) {
    return (
      <div
        className="rounded-2xl border border-border-subtle bg-surface-elevated p-6 text-zinc-100"
        role="status"
      >
        <h2 className="text-xl font-semibold text-white">Message sent</h2>
        <p className="mt-3 text-subtle">
          Thanks — we&apos;ll get back to you as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-border-subtle bg-surface-elevated p-6 text-zinc-100"
      noValidate
    >
      <h2 className="text-xl font-semibold text-white">Send a message</h2>

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0 opacity-0"
      />

      <label className="mt-5 block text-sm font-medium text-subtle" htmlFor="name">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        required
        className="mt-2 w-full rounded-lg border border-white/20 bg-zinc-950 px-4 py-2 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-white focus-visible:ring-2 focus-visible:ring-white/30"
        placeholder="Your name"
        disabled={isPending}
      />

      <label className="mt-4 block text-sm font-medium text-subtle" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        className="mt-2 w-full rounded-lg border border-white/20 bg-zinc-950 px-4 py-2 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-white focus-visible:ring-2 focus-visible:ring-white/30"
        placeholder="you@example.com"
        disabled={isPending}
      />

      <label className="mt-4 block text-sm font-medium text-subtle" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        required
        className="mt-2 w-full rounded-lg border border-white/20 bg-zinc-950 px-4 py-2 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-white focus-visible:ring-2 focus-visible:ring-white/30"
        placeholder="Tell us about your event or enquiry..."
        disabled={isPending}
      />

      {state?.error ? (
        <p className="mt-4 text-sm text-red-300" role="alert">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="mt-5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      >
        {isPending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
