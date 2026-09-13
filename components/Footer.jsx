import Link from "next/link";
import { navLinks } from "@/lib/data";
import { socialIcons } from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-green-dark text-white/90">
      <div className="container-content py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 font-display font-bold">
              H
            </span>
            <span className="font-display font-bold text-lg">HSZPM</span>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
            Halima Suleiman Zakari Progressive Movement — a grassroots
            community movement built on leadership, service, and progress.
          </p>
          <div className="mt-5 flex gap-3">
            {socialIcons.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:border-gold hover:text-gold transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm tracking-wide text-white">
            Quick links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm tracking-wide text-white">
            Get involved
          </h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/join" className="text-sm text-white/70 hover:text-gold transition-colors">
                Join the movement
              </Link>
            </li>
            <li>
              <Link href="/donate" className="text-sm text-white/70 hover:text-gold transition-colors">
                Make a donation
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-sm text-white/70 hover:text-gold transition-colors">
                Attend an event
              </Link>
            </li>
            <li>
              <Link href="/programmes" className="text-sm text-white/70 hover:text-gold transition-colors">
                Our programmes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li>12 Unity Crescent, Central District</li>
            <li>+234 800 000 0000</li>
            <li>info@hszpm.org</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-content py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>&copy; {new Date().getFullYear()} Halima Suleiman Zakari Progressive Movement. All rights reserved.</p>
          <p>Leadership. Service. Progress.</p>
        </div>
      </div>
    </footer>
  );
}
