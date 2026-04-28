import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const socials = [
  { Icon: Github, href: "https://github.com", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  { Icon: MessageCircle, href: "https://t.me/mengchhorng", label: "Telegram" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/50 py-10">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-xs font-bold text-primary-foreground">
            EM
          </span>
          <p className="text-sm text-muted-foreground">
            © {year} <span className="text-foreground font-medium">Eng Mengchhorng</span>. Crafted with care.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full glass text-muted-foreground transition-smooth hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
