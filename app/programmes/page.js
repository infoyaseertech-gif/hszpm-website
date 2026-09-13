import PageHero from "@/components/UI/PageHero";
import ProgrammeCard from "@/components/Programmes/ProgrammeCard";
import { programmes } from "@/lib/data";

export const metadata = {
  title: "Programmes — HSZPM",
  description:
    "Explore HSZPM's community programmes: youth empowerment, women's empowerment, skills acquisition, medical outreach, sports development, and environmental sanitation.",
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Practical service, delivered locally"
        description="Each HSZPM programme responds to a need our communities have told us about directly."
      />
      <section className="py-16 sm:py-20">
        <div className="container-content grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmes.map((programme) => (
            <ProgrammeCard key={programme.slug} {...programme} />
          ))}
        </div>
      </section>
    </>
  );
}
