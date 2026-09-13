const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M15 8h-2a2 2 0 00-2 2v2H9v3h2v7h3v-7h2.2l.8-3H14v-1.5c0-.6.3-1 1-1h1.5V8z" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.6" cy="7.4" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3.5" y="6.5" width="17" height="11" rx="3" />
      <path d="M10.5 9.8l4.5 2.2-4.5 2.2z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export const socialIcons = [
  { label: "Facebook", Icon: FacebookIcon, href: "#" },
  { label: "Instagram", Icon: InstagramIcon, href: "#" },
  { label: "X (Twitter)", Icon: XIcon, href: "#" },
  { label: "YouTube", Icon: YoutubeIcon, href: "#" },
];
