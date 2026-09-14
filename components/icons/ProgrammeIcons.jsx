// Lightweight hand-drawn-style line icons, no external icon package.
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function YouthIcon(props) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <circle cx="20" cy="13" r="6" />
      <path d="M9 33c0-6.6 4.9-11 11-11s11 4.4 11 11" />
      <path d="M20 22v4" />
    </svg>
  );
}

export function WomenIcon(props) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <circle cx="20" cy="12" r="6" />
      <path d="M20 18v12" />
      <path d="M14 25h12" />
      <path d="M14 32l6-5 6 5" />
    </svg>
  );
}

export function SkillsIcon(props) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M14 10l-6 6 6 6" />
      <path d="M26 10l6 6-6 6" />
      <path d="M23 8l-6 22" />
    </svg>
  );
}

export function MedicalIcon(props) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <rect x="7" y="7" width="26" height="26" rx="4" />
      <path d="M20 14v12" />
      <path d="M14 20h12" />
    </svg>
  );
}

export function SportsIcon(props) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <circle cx="20" cy="20" r="13" />
      <path d="M20 7v6M20 27v6M7 20h6M27 20h6" />
      <path d="M13 13l5 7 9-4" />
    </svg>
  );
}

export function SanitationIcon(props) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M20 6c5 6 9 11 9 17a9 9 0 01-18 0c0-6 4-11 9-17z" />
      <path d="M15 24a5 5 0 005 5" />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M20 6l12 4v9c0 8-5.3 13.6-12 15-6.7-1.4-12-7-12-15v-9l12-4z" />
      <path d="M15 20l4 4 7-8" />
    </svg>
  );
}

export function BookIcon(props) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M20 12c-2.5-2-6-3-11-3v20c5 0 8.5 1 11 3" />
      <path d="M20 12c2.5-2 6-3 11-3v20c-5 0-8.5 1-11 3" />
      <path d="M20 12v20" />
    </svg>
  );
}

export function MapIcon(props) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M14 9l-8 3v19l8-3 12 3 8-3V9l-8 3-12-3z" />
      <path d="M14 9v19M26 12v19" />
    </svg>
  );
}

export const programmeIcons = {
  youth: YouthIcon,
  women: WomenIcon,
  skills: SkillsIcon,
  medical: MedicalIcon,
  sports: SportsIcon,
  sanitation: SanitationIcon,
  security: ShieldIcon,
  education: BookIcon,
  devolution: MapIcon,
};
