import Link from "next/link";

const variants = {
  primary:
    "bg-green text-white hover:bg-green-dark border border-green",
  gold:
    "bg-gold text-ink hover:bg-[#c4923a] border border-gold",
  outline:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/50",
  outlineLight:
    "bg-transparent text-white border border-white/50 hover:border-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-[15px] font-medium transition-colors duration-150 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
