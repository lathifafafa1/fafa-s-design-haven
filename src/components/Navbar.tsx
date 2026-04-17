import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/cv", label: "CV" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border/60 bg-card/80 px-5 py-3 shadow-soft backdrop-blur-md">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-pink shadow-soft">
            <Heart className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
          </span>
          <span>Fafa</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{
                  className:
                    "bg-gradient-pink text-primary-foreground shadow-soft",
                }}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-all hover:bg-accent/40 hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-secondary-foreground md:hidden"
        >
          <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border/60 bg-card/95 p-3 shadow-cute backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "bg-gradient-pink text-primary-foreground" }}
                  className="block rounded-2xl px-4 py-2 text-sm font-medium hover:bg-accent/40"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
