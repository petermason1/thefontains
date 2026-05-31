import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Photos | The Fontains",
  description: "Photo gallery for The Fontains.",
};

const photos = [
  {
    src: "/Slider-Kit.jpg",
    alt: "The Fontains band promo image",
    caption: "Press photo — Slider Kit",
  },
];

export default function PhotosPage() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Photos"
        description="Gallery section for band photos, live shots, and promo images."
        padding="compact"
      />

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        {photos.map((photo) => (
          <figure
            key={photo.src}
            className="overflow-hidden rounded-2xl border border-border-subtle bg-surface-muted"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1600}
              height={1000}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="h-auto w-full object-cover"
            />
            <figcaption className="border-t border-border-subtle px-4 py-3 text-sm text-subtle">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
}
