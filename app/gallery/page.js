import Image from "next/image";
import PageHero from "@/components/UI/PageHero";
import GalleryGrid from "@/components/Gallery/GalleryGrid";
import SectionHeading from "@/components/UI/SectionHeading";
import { teamPhotos, videoClips } from "@/lib/data";

export const metadata = {
  title: "Gallery — APM Support Group",
  description: "Photos and videos from APM Support Group's team and community activities.",
};

// Placeholder illustrations for campaign-specific moments not yet
// photographed — swap these in for real photos once supplied.
const placeholderPhotos = [
  { id: "gallery-1", caption: "Mapo Hall unity rally, Ibadan" },
  { id: "gallery-2", caption: "Certificate of Return ceremony" },
  { id: "gallery-3", caption: "National convention, Bauchi" },
  { id: "gallery-4", caption: "Oyo State congress" },
  { id: "gallery-5", caption: "INEC nomination submission" },
  { id: "gallery-6", caption: "Coalition talks with allied parties" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from our team"
        description="Real photos and videos from APM Support Group's activities, alongside placeholders for campaign-specific moments still to be photographed."
      />

      <section className="py-16 sm:py-20">
        <div className="container-content">
          <SectionHeading
            kicker="Our team"
            title="On the ground"
            description="Photos from our members' community and outreach activities."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamPhotos.map((photo) => (
              <figure
                key={photo.id}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-line bg-white"
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-2 left-2 rounded bg-ink/50 px-2 py-0.5 text-[11px] text-white/90">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-t border-line">
        <div className="container-content">
          <SectionHeading
            kicker="Videos"
            title="Field footage"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videoClips.map((clip) => (
              <div key={clip.id} className="rounded-md border border-line bg-white overflow-hidden">
                <video
                  src={clip.src}
                  controls
                  preload="metadata"
                  className="w-full aspect-[9/16] sm:aspect-video bg-ink object-contain"
                />
                <p className="px-3 py-2 text-xs text-ink/60">{clip.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-light/40 border-t border-line">
        <div className="container-content">
          <SectionHeading
            kicker="Campaign moments"
            title="Coming soon"
            description="Placeholder illustrations for campaign-specific moments, swapped for real photos once official campaign photography is supplied. Tap any tile to enlarge it."
          />
          <div className="mt-10">
            <GalleryGrid photos={placeholderPhotos} />
          </div>
        </div>
      </section>
    </>
  );
}
