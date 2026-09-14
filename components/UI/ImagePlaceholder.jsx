const tones = [
  "from-green/25 to-green-dark/40",
  "from-gold/30 to-green/30",
  "from-green-dark/35 to-gold/25",
];

function toneFor(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash + seed.charCodeAt(i)) % tones.length;
  return tones[hash];
}

// A consistent stand-in for real photography: a soft brand-toned gradient
// with a subtle mark, so the layout reads correctly before real images
// are dropped into /public/images.
export default function ImagePlaceholder({
  seed = "hszpm",
  label,
  className = "",
  ratio = "aspect-[4/3]",
  Icon,
}) {
  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden rounded-md bg-gradient-to-br ${toneFor(
        seed
      )} bg-green-light ${className}`}
    >
      {Icon ? (
        <Icon className="absolute inset-0 m-auto h-10 w-10 text-white/70" />
      ) : (
        <svg
          viewBox="0 0 40 40"
          className="absolute inset-0 m-auto h-10 w-10 text-white/70"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <rect x="5" y="9" width="30" height="22" rx="2" />
          <circle cx="14" cy="17" r="3" />
          <path d="M5 27l9-8 8 6 5-4 8 6" />
        </svg>
      )}
      {label ? (
        <span className="absolute bottom-2 left-2 rounded bg-ink/40 px-2 py-0.5 text-[11px] text-white/90">
          {label}
        </span>
      ) : null}
    </div>
  );
}
