import PageHero from "@/components/UI/PageHero";
import Button from "@/components/UI/Button";

export const metadata = {
  title: "Join — HSZPM",
  description: "Join the HSZPM movement.",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Join HSZPM"
        title="Membership is coming soon"
        description="We're putting together a simple way for you to register and join a chapter near you."
      />
      <section className="py-16 sm:py-20">
        <div className="container-content max-w-xl">
          <div className="border border-line rounded-md bg-white p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-green-light text-green">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="8" r="3.4" />
                <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
              </svg>
            </div>
            <h2 className="mt-4 font-display font-bold text-xl text-ink">
              Online registration is on its way
            </h2>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">
              This page will soon let you register as a member and connect
              with a chapter in your area. In the meantime, reach out to us
              directly to get involved.
            </p>
            <Button href="/contact" variant="primary" className="mt-6">
              Contact us to join
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
