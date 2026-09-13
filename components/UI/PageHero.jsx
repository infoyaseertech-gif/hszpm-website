export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="bg-green-dark text-white">
      <div className="container-content py-16 sm:py-20">
        {eyebrow ? (
          <p className="text-gold font-medium text-sm mb-3">{eyebrow}</p>
        ) : null}
        <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight max-w-2xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 text-white/80 max-w-xl leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
