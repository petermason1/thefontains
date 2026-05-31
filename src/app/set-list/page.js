import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Set List | The Fontains",
  description: "Tried and tested dancefloor fillers from The Fontains.",
};

const setListSections = [
  {
    title: "Rock and Indie",
    songs: [
      "Mr. Brightside - The Killers",
      "Chelsea Dagger - The Fratellis",
      "Sex on Fire - Kings of Leon",
      "Dakota - Stereophonics",
      "Town Called Malice - The Jam",
      "All These Things I Have Done - The Killers",
      "Naive - The Kooks",
      "Last Night - The Strokes",
      "Use Somebody - Kings of Leon",
      "(I Can't Get No) Satisfaction - The Rolling Stones",
      "Sit Down - James",
      "Human - The Killers",
      "Ever Fallen In Love - Buzzcocks",
      "Seventeen Going Under - Sam Fender",
      "Bet You Look Good on the Dancefloor - Arctic Monkeys",
      "Disco 2000 - Pulp",
      "Parklife - Blur",
      "Not Nineteen Forever - The Courteeners",
      "The Day We Caught The Train - Ocean Colour Scene",
      "This Charming Man - The Smiths",
      "Waterfall - The Stone Roses",
      "Saw Her Standing There - The Beatles",
      "Little Lion Man - Mumford and Sons",
      "Place Your Hands - Reef",
      "Eight Days a Week - The Beatles",
      "Don't Look Back in Anger - Oasis",
      "Chasing Cars - Snow Patrol",
      "Wonderwall - Oasis",
      "I Predict a Riot - Kaiser Chiefs",
      "Message in a Bottle - The Police",
      "In The Morning - Razorlight",
      "Teenage Kicks - The Undertones",
      "She's Electric - Oasis",
      "You Really Got Me - The Kinks",
      "It Must Be Love - Madness",
      "Should I Stay or Should I Go - The Clash",
      "Dreaming of You - The Coral",
      "All The Small Things - Blink 182",
      "Buck Rogers - Feeder",
      "Teenage Dirtbag - Wheatus",
      "Love Cats - The Cure",
      "Basket Case - Green Day",
      "Will We Talk - Sam Fender",
      "Hypersonic Missiles - Sam Fender",
      "Stacey's Mom - Fountains Of Wayne",
      "Going Underground - The Jam",
      "Belter - Gerry Cinnamon",
      "She Bangs the Drums - Stone Roses",
      "Country House - Blur",
      "Good Riddance (Time of Your Life) - Green Day",
      "Cigarettes and Alcohol - Oasis",
      "Take Me Out - Franz Ferdinand",
      "Common People - Pulp",
      "Mardy Bum - Arctic Monkeys",
    ],
  },
  {
    title: "Pop",
    songs: [
      "Shotgun - George Ezra",
      "Uptown Funk - Bruno Mars",
      "Valerie - Mark Ronson / Amy Winehouse",
      "Shut Up and Dance - Walk the Moon",
      "Castle on the Hill - Ed Sheeran",
      "Thinking Out Loud - Ed Sheeran",
      "I'm Yours - Jason Mraz",
      "All of Me - John Legend (Acoustic)",
      "Ho, Hey! - The Lumineers",
    ],
  },
  {
    title: "Classics / Cheese",
    songs: [
      "Proud Mary - Tina/Ike Turner",
      "500 Miles - The Proclaimers",
      "Tainted Love - Gloria Jones",
      "A Little Respect - Erasure",
      "Summer of 69 - Bryan Adams",
      "Superstition - Stevie Wonder",
      "Stuck in The Middle with You - Stealers Wheels",
      "Crazy Little Thing Called Love - Queen",
      "Suspicious Minds - Elvis Presley",
      "Stand By Me - Ben E. King",
      "Sweet Caroline - Neil Diamond",
      "Can't Take My Eyes Off You - Frankie Valli",
      "Burning Love - Elvis Presley",
    ],
  },
  {
    title: "Acoustic Set",
    songs: [
      "Rehab - Amy Winehouse",
      "Mardy Bum - Arctic Monkeys",
      "Stand By Me - Ben E. King",
      "Only Love - Ben Howard",
      "Country House - Blur",
      "Latch - Disclosure and Sam Smith",
      "Thinking Out Loud - Ed Sheeran",
      "Times Like These - Foo Fighters",
      "Blame it on Me - George Ezra",
      "Good Riddance - Green Day",
      "Hold Back the River - James Bay",
      "I'm Yours - Jason Mraz",
      "All of Me - John Legend",
      "Ho Hey - Lumineers",
      "Little Lion Man - Mumford and Sons",
      "The Cave - Mumford and Sons",
      "Whatever - Oasis",
      "Wonderwall - Oasis",
      "You Do Something to Me - Paul Weller",
      "Chasing Cars - Snow Patrol",
      "Friday I'm in Love - The Cure",
      "That's Entertainment - The Jam",
      "This Charming Man - The Smiths",
    ],
  },
];

export default function SetListPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <PageHeader title="Set List" padding="compact">
        <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-200 sm:text-2xl">
          Tried &amp; Tested Dancefloor Fillers
        </h2>
        <p className="mt-4 max-w-4xl text-subtle">
          Over the years we&apos;ve perfected a large repertoire that&apos;s sure
          to get your guests dancing. With so many tracks across a diverse range
          of music and eras, there really is something for everyone. Whether
          you want a night of indie rock, chart cheese or somewhere in-between,
          we&apos;re the band for the job.
        </p>
      </PageHeader>

      <section className="mt-10 grid gap-6">
        {setListSections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-border-subtle bg-surface-muted p-6"
          >
            <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {section.songs.map((song) => (
                <li
                  key={`${section.title}-${song}`}
                  className="rounded-lg bg-white/5 px-3 py-2 text-sm text-zinc-200"
                >
                  {song}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
