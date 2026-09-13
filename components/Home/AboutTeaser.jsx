import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-content grid lg:grid-cols-3 gap-8 items-start">
        <h2 className="font-display font-bold text-3xl text-ink lg:col-span-1">
          Who we are
        </h2>
        <div className="lg:col-span-2">
          <p className="text-ink/70 text-lg leading-relaxed">
            HSZPM is a grassroots movement founded to organise everyday
            people around a shared purpose: capable leadership, real service
            to communities, and steady, visible progress. From skills
            training to medical outreach, our chapters work where people
            live, guided by members who understand their community's needs
            first-hand.
          </p>
          <Link
            href="/about"
            className="mt-5 inline-flex items-center gap-1.5 text-green font-medium hover:text-green-dark"
          >
            Read our full story
          </Link>
        </div>
      </div>
    </section>
  );
}
