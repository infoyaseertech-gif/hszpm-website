import PageHero from "@/components/UI/PageHero";
import LeadershipCard from "@/components/Leadership/LeadershipCard";
import { leadershipProfiles } from "@/lib/data";

export const metadata = {
  title: "Leadership — HSZPM",
  description: "Meet the people leading HSZPM's chapters and programmes.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The people leading the movement"
        description="HSZPM is led by members who work closely with the communities they serve, from national leadership down to zonal coordinators."
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
