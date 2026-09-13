function formatDate(dateStr) {
  const d = new Date(dateStr);
  return {
    day: d.toLocaleDateString("en-GB", { day: "numeric" }),
    month: d.toLocaleDateString("en-GB", { month: "short" }),
    full: d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };
}

export default function EventCard({ title, date, location, description }) {
  const d = formatDate(date);
  return (
    <div className="flex gap-5 border border-line rounded-md bg-white p-5 sm:p-6">
      <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-md bg-green-light text-green">
        <span className="font-display font-bold text-xl leading-none">{d.day}</span>
        <span className="text-xs mt-1 uppercase">{d.month}</span>
      </div>
      <div className="min-w-0">
        <h3 className="font-display font-bold text-lg text-ink">{title}</h3>
        <p className="text-sm text-ink/60 mt-1">
          {d.full}, {location}
        </p>
        <p className="mt-2 text-sm text-ink/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
