export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {kicker ? (
        <p className="text-green font-medium text-sm mb-2">{kicker}</p>
      ) : null}
      <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-ink/70 leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
