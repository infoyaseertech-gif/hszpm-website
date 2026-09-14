import PageHero from "@/components/UI/PageHero";
import LeadershipCard from "@/components/Leadership/LeadershipCard";
import { leadershipProfiles } from "@/lib/data";

export const metadata = {
  title: "Who We're Supporting — APM Support Group",
  description: "The confirmed 2027 ticket and national leadership of the Allied Peoples Movement, which APM Support Group is mobilising to back.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We're Supporting"
        title="APM's 2027 ticket and national leadership"
        description="These are APM's own confirmed candidates and officers, not APM Support Group's internal staff. Photos will be added once official campaign photography is supplied; names and roles reflect confirmed, publicly reported positions."
      />
      <section className="py-16 sm:py-20">
        <div className="container-content grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipProfiles.map((profile) => (
            <LeadershipCard key={profile.name} {...profile} />
          ))}
        </div>
      </section>
    </>
  );
}
