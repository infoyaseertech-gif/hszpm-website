import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";

export const metadata = {
  title: "About — APM Support Group",
  description:
    "About APM Support Group: our vision, mission, story, and the values guiding our support for APM's 2027 ticket.",
};

const values = [
  {
    title: "Integrity",
    text: "APM's motto opens with integrity — a commitment to honest, accountable leadership, and to candidates who are judged on record and character rather than promises alone.",
  },
  {
    title: "Sacrifice",
    text: "Building a credible national coalition has meant leaders from across the political spectrum choosing the party over convenience, in the belief that the country comes before any one camp.",
  },
  {
    title: "Service",
    text: "Every policy priority APM has set out — from security to healthcare — is framed as a question of service: what government actually delivers for the people who elect it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A grassroots movement backing the 2027 ticket"
        description="APM Support Group mobilises grassroots backing for Seyi Makinde and Lawal Daura's ticket, carried by the Allied Peoples Movement (APM) into the 2027 general election."
      />

      <section className="py-16 sm:py-20">
        <div className="container-content grid lg:grid-cols-2 gap-10">
          <div className="border border-line rounded-md p-8 bg-white">
            <h2 className="font-display font-bold text-2xl text-ink">Our vision</h2>
            <p className="mt-3 text-ink/70 leading-relaxed">
              A Nigeria that is secure, prosperous, and governed by leaders
              who put the country first — the belief behind APM's own
              slogan, Nigeria First, which we've organised to support.
            </p>
          </div>
          <div className="border border-line rounded-md p-8 bg-white">
            <h2 className="font-display font-bold text-2xl text-ink">Our mission</h2>
            <p className="mt-3 text-ink/70 leading-relaxed">
              To mobilise grassroots support for the Makinde–Daura ticket
              ahead of the 2027 general election, guided by the same values
              behind APM's motto: integrity, sacrifice and service.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-green-light/60 border-y border-line">
        <div className="container-content grid lg:grid-cols-3 gap-10">
          <SectionHeading
            kicker="Our story"
            title="How APM's 2027 ticket came together"
          />
          <div className="lg:col-span-2 space-y-4 text-ink/70 leading-relaxed">
            <p>
              APM Support Group came together as a grassroots movement to
              mobilise backing for the Allied Peoples Movement's 2027 ticket.
              APM itself was registered as a political party by Nigeria's
              electoral commission in August 2018, and ahead of the 2027
              general election became the platform for Governor Seyi Makinde
              of Oyo State, who declared his presidential ambition at a
              unity rally at Mapo Hall in Ibadan alongside officeholders
              defecting from other parties.
            </p>
            <p>
              Governor Makinde was formally presented with his Certificate
              of Return as APM's presidential candidate by National Chairman
              Yusuf Mamman Dantalle. At the party's national convention in
              Bauchi, Governor Bala Mohammed of Bauchi State was inaugurated
              as APM's National Leader, and Makinde unveiled former DSS
              Director-General Lawal Daura as his vice-presidential
              running mate.
            </p>
            <p>
              Since then, APM has been building a wider coalition —
              submitting its presidential and National Assembly nominations
              to the electoral commission and pointing to growing support
              from figures in other parties as it heads toward 2027.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-content">
          <SectionHeading
            kicker="Values we share"
            title="Integrity, Sacrifice and Service"
            description="APM's own motto, and the values we've organised our support around."
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
