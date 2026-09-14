// Generic, non-personal campaign-themed illustrations for gallery
// placeholders. None of these depict any real or specific person — they're
// stand-ins until real campaign photography is supplied.
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function CrowdIcon(props) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <circle cx="10" cy="14" r="3.2" />
      <path d="M4 27c0-4 2.7-6.5 6-6.5s6 2.5 6 6.5" />
      <circle cx="20" cy="11" r="3.6" />
      <path d="M13 27c0-4.6 3.1-7.5 7-7.5s7 2.9 7 7.5" />
      <circle cx="30" cy="14" r="3.2" />
      <path d="M24 27c0-4 2.7-6.5 6-6.5s6 2.5 6 6.5" />
    </svg>
  );
}

function FlagIcon(props) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M12 6v28" />
      <path d="M12 8c6-3 10 3 16 0v14c-6 3-10-3-16 0z" />
    </svg>
  );
}

function PodiumIcon(props) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M10 34V18h20v16" />
      <path d="M14 18l3-8h6l3 8" />
      <circle cx="20" cy="6" r="2.4" />
      <path d="M20 8.4V11" />
    </svg>
  );
}

function BallotIcon(props) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <rect x="7" y="16" width="26" height="17" rx="2" />
      <path d="M15 16v-3a5 5 0 0110 0v3" />
      <path d="M17 24l2 2 4-4" />
    </svg>
  );
}

function HandshakeIcon(props) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M4 18l7-5 6 4 3-2 7 5" />
      <path d="M11 13l7 9 5-3.5" />
      <path d="M4 18l4 8 4 2" />
      <path d="M36 18l-4 8-4 2" />
    </svg>
  );
}

function BannerIcon(props) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M6 10h28M6 20h28M6 30h18" />
      <circle cx="32" cy="30" r="3" />
    </svg>
  );
}

export const galleryArt = [
  CrowdIcon,
  FlagIcon,
  PodiumIcon,
  BallotIcon,
  HandshakeIcon,
  BannerIcon,
];
