import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActive(id);
      setOpen(false);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const y = window.scrollY + 140;

      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i].id);

        if (section && section.offsetTop <= y) {
          setActive(links[i].id);
          break;
        }
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-smooth",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2 transition-smooth sm:px-6",
            scrolled ? "glass shadow-card" : "bg-transparent"
          )}
        >
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 font-display text-lg font-bold"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
              EM
            </span>
            <span className="hidden sm:inline gradient-text">Eng Mengchhorng</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-smooth",
                    active === link.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}

                  {active === link.id && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-primary" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              aria-label="Menu"
              className="flex h-9 w-9 items-center justify-center rounded-full glass md:hidden"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-3xl glass p-2 animate-fade-in md:hidden">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition-smooth",
                  active === link.id
                    ? "bg-gradient-primary text-primary-foreground"
                    : "hover:bg-secondary"
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}