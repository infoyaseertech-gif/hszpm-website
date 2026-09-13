import PageHero from "@/components/UI/PageHero";
import GalleryGrid from "@/components/Gallery/GalleryGrid";

export const metadata = {
  title: "Gallery — HSZPM",
  description: "Photos from HSZPM programmes, events, and community outreach.",
};

const photos = [
  { id: "gallery-1", caption: "Youth leadership training" },
  { id: "gallery-2", caption: "Women's mentorship circle" },
  { id: "gallery-3", caption: "Skills acquisition workshop" },
  { id: "gallery-4", caption: "Medical outreach day" },
  { id: "gallery-5", caption: "Zonal sports tournament" },
  { id: "gallery-6", caption: "Environmental clean-up" },
  { id: "gallery-7", caption: "Community town hall" },
  { id: "gallery-8", caption: "Chapter coordinators meeting" },
  { id: "gallery-9", caption: "Graduation ceremony" },
  { id: "gallery-10", caption: "National championship" },
  { id: "gallery-11", caption: "Volunteer orientation" },
  { id: "gallery-12", caption: "Neighbourhood outreach" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from the movement"
        description="A look at HSZPM programmes and events in action. Tap any photo to enlarge it."
      />
      <section className="py-16 sm:py-20">
        <div className="container-content">
          <GalleryGrid photos={photos} />
        </div>
      </section>
    </>
  );
}
