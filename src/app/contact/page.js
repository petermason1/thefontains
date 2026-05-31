import ContactForm from "./ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Contact | The Fontains",
  description: "Get in touch with The Fontains for bookings and enquiries.",
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Contact us"
        description="For bookings, press, or general enquiries, send a message and we will get back to you as soon as possible."
        padding="compact"
      />

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <ContactForm />

        <aside className="rounded-2xl border border-border-subtle bg-surface-elevated p-6 text-zinc-100">
          <h2 className="text-xl font-semibold text-white">Booking info</h2>
          <p className="mt-3 text-subtle">
            Prefer email? Reach us directly using the details below.
          </p>

          <div className="mt-6 space-y-4 text-sm text-subtle">
            <p>
              <span className="font-semibold text-zinc-200">Email:</span>{" "}
              <a
                href="mailto:thefontains@hotmail.co.uk"
                className="break-all text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                thefontains@hotmail.co.uk
              </a>
            </p>
            <p>
              <span className="font-semibold text-zinc-200">Phone:</span>{" "}
              <a
                href="tel:+447545615742"
                className="text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                07545 615742
              </a>{" "}
              (Anth)
            </p>
            <p>
              <span className="font-semibold text-zinc-200">Management:</span>{" "}
              The Fontains team
            </p>
            <p>
              <span className="font-semibold text-zinc-200">Location:</span>{" "}
              North East, UK
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
