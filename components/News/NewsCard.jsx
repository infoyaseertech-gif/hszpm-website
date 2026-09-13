import ImagePlaceholder from "@/components/UI/ImagePlaceholder";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsCard({ title, date, excerpt, slug }) {
  return (
    <article className="border border-line rounded-md bg-white overflow-hidden flex flex-col">
      <ImagePlaceholder seed={slug} />
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-ink/50">{formatDate(date)}</p>
        <h3 className="mt-2 font-display font-bold text-lg text-ink leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-sm text-ink/70 leading-relaxed flex-1">
          {excerpt}
        </p>
        <a
          href="#"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-green hover:text-green-dark"
        >
          Read more
        </a>
      </div>
    </article>
  );
}
