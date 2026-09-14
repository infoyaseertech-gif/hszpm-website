import Button from "@/components/UI/Button";
import ImagePlaceholder from "@/components/UI/ImagePlaceholder";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 dot-grid opacity-[0.06]" aria-hidden="true" />
      <div className="container-content relative py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-green font-medium text-sm">
            APM Support Group
          </p>
          <h1 className="mt-3 font-display font-bold text-4xl sm:text-5xl text-ink leading-[1.1]">
            Nigeria First.
          </h1>
          <p className="mt-5 text-ink/70 text-lg leading-relaxed max-w-lg">
            We're a grassroots movement mobilising support for Seyi Makinde
            for President and Lawal Daura for Vice President on APM's
            platform in the 2027 general election.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/join" variant="primary">
              Join the Movement
            </Button>
            <Button href="/donate" variant="gold">
              Donate
            </Button>
          </div>
        </div>
        <ImagePlaceholder
          seed="hero"
          label="Makinde–Bala 2027 campaign"
          ratio="aspect-[5/4]"
          className="shadow-sm"
        />
      </div>
    </section>
  );
}
