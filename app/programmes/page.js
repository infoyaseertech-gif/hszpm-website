import PageHero from "@/components/UI/PageHero";
import ProgrammeCard from "@/components/Programmes/ProgrammeCard";
import { programmes } from "@/lib/data";

export const metadata = {
  title: "Policies — APM",
  description:
    "APM's 2027 policy priorities: national security, job creation, economic renewal, education, healthcare, and devolution of power.",
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="What APM is campaigning on"
        description="The issues the party has publicly named as central to its case for the 2027 general election."
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
