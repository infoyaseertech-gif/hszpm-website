import PageHero from "@/components/UI/PageHero";
import Button from "@/components/UI/Button";

export const metadata = {
  title: "Donate — HSZPM",
  description: "Support HSZPM's community programmes.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Online giving is coming soon"
        description="We're setting up a secure way to donate online. Your support will go directly toward HSZPM's community programmes."
      />
      <section className="py-16 sm:py-20">
        <div className="container-content max-w-xl">
          <div className="border border-line rounded-md bg-white p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-gold-light text-gold">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 21s-7-4.4-9.5-8.7C.8 8.8 2.3 5 6 5c2 0 3.4 1 4.5 2.4C11.6 6 13 5 15 5c3.7 0 5.2 3.8 3.5 7.3C19 16.6 12 21 12 21z" />
              </svg>
            </div>
            <h2 className="mt-4 font-display font-bold text-xl text-ink">
              Secure online donations are on their way
            </h2>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">
              We're finalising a secure payment option so you can give
              online. For now, please contact us to arrange a donation.
            </p>
            <Button href="/contact" variant="gold" className="mt-6">
              Contact us to give
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
