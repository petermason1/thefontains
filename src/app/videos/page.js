import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Videos | The Fontains",
  description: "Video page for The Fontains.",
};

const videos = [
  {
    title: "Live Session (Coming Soon)",
    description: "Add your first embedded video or performance clip here.",
  },
];

export default function VideosPage() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Videos"
        description="Music videos, live sessions, and behind-the-scenes content."
        padding="compact"
      />

      <section className="mt-10 space-y-6">
        {videos.map((video) => (
          <article
            key={video.title}
            className="rounded-2xl border border-border-subtle bg-surface-muted p-6"
          >
            <h2 className="text-xl font-semibold text-white">{video.title}</h2>
            <p className="mt-2 text-subtle">{video.description}</p>
            <div className="mt-4 rounded-xl border border-dashed border-white/25 p-8 text-sm text-subtle">
              Video embed placeholder
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
