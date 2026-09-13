import PageHero from "@/components/UI/PageHero";
import EventCard from "@/components/Events/EventCard";
import { events } from "@/lib/data";

export const metadata = {
  title: "Events — HSZPM",
  description: "Upcoming HSZPM events, from community meetings to the national sports championship.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Upcoming events"
        description="Join HSZPM at an upcoming programme session, tournament, or community meeting."
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
