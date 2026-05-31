import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "FAQ | The Fontains",
  description: "Frequently asked questions about The Fontains.",
};

const faqs = [
  {
    question: "How long do you need to set up?",
    answer:
      "An hour and a half is required to load in, set up and sound check, but this may vary depending on accessibility. If possible we prefer to set up and sound check in an empty room, as we will be moving heavy equipment and do not wish to disturb your guests when sound checking. Set up before 6pm is possible but is likely to incur an extra charge. If you have any questions then please contact us.",
  },
  {
    question: "How much do you charge?",
    answer:
      "Because each wedding is different and dates, times, location and requirements vary, we are unable to list a price on our website. Once we have the vital info we can quickly get back to you with a price. As a self-contained 3-piece we are confident we can offer you a first-rate performance at a great price.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We are based in Newcastle and predominantly play the surrounding area, but we are happy to quote for events further afield. Simply get in touch via the contact page.",
  },
  {
    question: "Are you insured and is your equipment PAT tested?",
    answer:
      "We have full public liability insurance with certificates that can be sent out on request. All of our equipment is fully PAT tested and we can provide test certificates to prove this also.",
  },
  {
    question: "Do you bring your own equipment?",
    answer:
      "We supply all the equipment needed to put on a great live music show. This includes a high-quality sound system and lighting which are included in the price. There are no hidden charges.",
  },
  {
    question: "How do I make a booking?",
    answer:
      "Enquiries can be made via the Contact Us page or you can call us on 07545615742 (Anth). Once we have the event details we will provide you with a quote. If you would then like to book, we will send you a booking form to be completed and returned to us with a deposit (normally 20% of the total fee).",
  },
  {
    question: "Can you provide music before, during and after your performance?",
    answer:
      "Yes. This can be simply a playlist of your choosing played through our system or our full professional DJ service. Both incur an additional cost but prove much more cost-effective than hiring in a second party just to provide music.",
  },
  {
    question: "Will you learn requests and our first dance?",
    answer:
      "Due to the number of weddings we do, we are unable to learn first dances. A list of songs we already know can be found on our Set List page.",
  },
  {
    question: "Can I pick the songs for you to play?",
    answer:
      "No. Our experience means that we have a good idea of what tunes will work well and we will often tailor our set on the night depending on who is in the audience and what is being well received. If you see a song or an artist in our repertoire that you really love (or love to hate), then let us know and we can include or omit it accordingly.",
  },
  {
    question: "Can I see you perform live beforehand?",
    answer:
      "Yes. We regularly play venues around Newcastle. Check out our Gigs page or our Facebook page for upcoming gigs.",
  },
  {
    question: "How long do you play for?",
    answer:
      "We are flexible with times and durations and have in the past played a number of different formats. If you have specific timings in mind, please mention these when you enquire. We suggest two 45-minute sets sometime after 8pm.",
  },
  {
    question: "What arrangements do I need to make with the venue?",
    answer:
      "Once we have all the basic info such as set up and start times and a deposit has been received, we are happy to contact the venue ourselves to make arrangements and finalise plans. This way we can introduce ourselves to the coordinator and discuss any issues that we or the venue may be aware of. Once we have done this we will contact you to let you know that everything is in order for your big day.",
  },
  {
    question:
      "Despite this brilliant website I still have an unanswered question. What do I do?",
    answer:
      "Not a problem, just use the Contact Us page and we will answer any questions you may have.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <PageHeader
        title="FAQ"
        description="Answers to common booking and performance questions."
        padding="compact"
      />

      <section className="mt-10 space-y-4">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="rounded-2xl border border-border-subtle bg-surface-muted p-5"
          >
            <summary className="cursor-pointer list-none text-lg font-semibold text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 [&::-webkit-details-marker]:hidden">
              {item.question}
            </summary>
            <p className="mt-3 text-zinc-300">{item.answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
}
