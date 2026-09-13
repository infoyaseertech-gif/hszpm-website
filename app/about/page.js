import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";

export const metadata = {
  title: "About — HSZPM",
  description:
    "Learn about HSZPM's vision, mission, story, and the values that guide the movement.",
};

const values = [
  {
    title: "Leadership",
    text: "We believe change starts with people who are ready to lead — in their households, their streets, and their chapters. HSZPM identifies and trains capable leaders at every level of the movement.",
  },
  {
    title: "Service",
    text: "Every programme we run exists to meet a real need. We show up with practical, hands-on service — training, healthcare, clean-up, and mentorship — delivered directly where people live.",
  },
  {
    title: "Progress",
    text: "We measure ourselves by what changes for our communities: skills gained, health improved, opportunities opened. Progress is steady, visible, and shared by everyone who takes part.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About HSZPM"
        title="A movement built by its communities, for its communities"
        description="Halima Suleiman Zakari Progressive Movement organises everyday people around leadership, service, and progress."
      />

      <section className="py-16 sm:py-20">
        <div className="container-content grid lg:grid-cols-2 gap-10">
          <div className="border border-line rounded-md p-8 bg-white">
            <h2 className="font-display font-bold text-2xl text-ink">Our vision</h2>
            <p className="mt-3 text-ink/70 leading-relaxed">
              A united, empowered community where every citizen has the
              leadership, opportunity, and support to build a better future.
            </p>
          </div>
          <div className="border border-line rounded-md p-8 bg-white">
            <h2 className="font-display font-bold text-2xl text-ink">Our mission</h2>
            <p className="mt-3 text-ink/70 leading-relaxed">
              To mobilise grassroots leadership, deliver practical service to
              underserved communities, and drive sustained progress in
              education, health, skills, and civic participation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-light/60 border-y border-line">
        <div className="container-content grid lg:grid-cols-3 gap-10">
          <SectionHeading
            kicker="Our story"
            title="How HSZPM came to be"
          />
          <div className="lg:col-span-2 space-y-4 text-ink/70 leading-relaxed">
            <p>
              HSZPM began as a small circle of neighbours who kept running
              into the same problem: real needs in the community that no one
              was organised enough to address. Skills training that never
              reached the people who needed it. Health screenings that
              stopped at the edge of town. Young people with energy and no
              outlet for it.
            </p>
            <p>
              Under the leadership of Halima Suleiman Zakari, that circle
              grew into a structured, grassroots movement — with chapters,
              coordinators, and programmes reaching further each year. What
              hasn't changed is the approach: listen to the community first,
              then build the programme that fits.
            </p>
            <p>
              Today, HSZPM runs across multiple zones, bringing together
              volunteers, local leaders, and partner organisations around one
              shared theme — leadership, service, and progress.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-content">
          <SectionHeading
            kicker="What guides us"
            title="Our core values"
            align="center"
          />
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="border-t-2 border-gold bg-white border-x border-b border-line rounded-md p-6"
              >
                <h3 className="font-display font-bold text-xl text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
