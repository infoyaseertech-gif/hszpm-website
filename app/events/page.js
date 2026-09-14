import PageHero from "@/components/UI/PageHero";
import EventCard from "@/components/Events/EventCard";
import { events } from "@/lib/data";

export const metadata = {
  title: "Timeline — APM",
  description: "Key reported milestones on APM's road to the 2027 general election.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Timeline"
        title="Key milestones on the road to 2027"
        description="Reported dates and venues for the campaign's major moments so far — verify exact dates against the News page before presenting."
      />
      <section className="py-16 sm:py-20">
        <div className="container-content space-y-5 max-w-3xl">
          {events.map((event) => (
            <EventCard key={event.slug} {...event} />
          ))}
        </div>
      </section>
    </>
  );
}
