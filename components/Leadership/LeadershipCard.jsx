import ImagePlaceholder from "@/components/UI/ImagePlaceholder";

export default function LeadershipCard({ name, role, bio }) {
  return (
    <div className="border border-line rounded-md overflow-hidden bg-white">
      <ImagePlaceholder seed={name} ratio="aspect-square" className="rounded-none" />
      <div className="p-5 border-t-2 border-gold">
        <h3 className="font-display font-bold text-lg text-ink">{name}</h3>
        <p className="text-green text-sm font-medium mt-0.5">{role}</p>
        <p className="text-ink/70 text-sm mt-2 leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
