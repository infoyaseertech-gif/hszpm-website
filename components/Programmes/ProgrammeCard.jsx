import { programmeIcons } from "@/components/icons/ProgrammeIcons";

export default function ProgrammeCard({ title, description, icon }) {
  const Icon = programmeIcons[icon];
  return (
    <div className="border border-line rounded-md bg-white p-6 hover:border-green/60 transition-colors">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-green-light text-green">
        {Icon ? <Icon className="h-6 w-6" /> : null}
      </div>
      <h3 className="mt-4 font-display font-bold text-lg text-ink">{title}</h3>
      <p className="mt-2 text-sm text-ink/70 leading-relaxed">{description}</p>
    </div>
  );
}
