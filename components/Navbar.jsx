"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import Button from "@/components/UI/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-green text-white font-display font-bold">
            H
          </span>
          <span className="font-display font-bold text-lg leading-none text-ink">
            HSZPM
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] text-ink/80 hover:text-green transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button href="/join" variant="outline" className="px-5 py-2.5">
            Join now
          </Button>
          <Button href="/donate" variant="gold" className="px-5 py-2.5">
            Donate
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-md border border-line"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-line bg-paper">
          <nav className="container-content flex flex-col py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 text-[15px] text-ink/85 border-b border-line/70 last:border-none"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-4">
              <Button href="/join" variant="outline" className="flex-1 px-4 py-2.5" onClick={() => setOpen(false)}>
                Join now
              </Button>
              <Button href="/donate" variant="gold" className="flex-1 px-4 py-2.5" onClick={() => setOpen(false)}>
                Donate
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
