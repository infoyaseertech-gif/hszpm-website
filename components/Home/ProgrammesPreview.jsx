import Link from "next/link";
import SectionHeading from "@/components/UI/SectionHeading";
import ProgrammeCard from "@/components/Programmes/ProgrammeCard";
import { programmes } from "@/lib/data";

export default function ProgrammesPreview() {
  const highlights = programmes.slice(0, 3);
  return (
    <section className="py-16 sm:py-20 bg-green-light/60 border-y border-line">
      <div className="container-content">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="What we do"
            title="Programmes built around real needs"
            description="A few of the ways HSZPM shows up for its communities, week to week."
          />
          <Link
            href="/programmes"
            className="text-green font-medium hover:text-green-dark whitespace-nowrap"
          >
            View all programmes
          </Link>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((programme) => (
            <ProgrammeCard key={programme.slug} {...programme} />
          ))}
        </div>
      </div>
    </section>
  );
}
