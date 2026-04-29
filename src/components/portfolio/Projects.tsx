import { ExternalLink, Github } from "lucide-react";
import ecommerce from "@/assets/project-ecommerce.jpg";
import portfolio from "@/assets/project-portfolio.jpg";
import alumni from "@/assets/project-alumni.jpg";
import pos from "@/assets/project-pos.jpg";
import booking from "@/assets/project-booking.jpg";
import flutter from "@/assets/project-flutter.jpg";

const projects = [
  {
    title: "E-Commerce Flutter App",
    desc: "A cross-platform shopping app with cart, checkout, and secure payments.",
    stack: ["Flutter", "Dart", "Firebase", "Stripe"],
    img: ecommerce,
  },
  {
    title: "Portfolio Website",
    desc: "A modern, animated personal site built with React and Tailwind.",
    stack: ["React", "TypeScript", "Tailwind"],
    img: portfolio,
  },
  {
    title: "Alumni Management System",
    desc: "A full-featured platform for universities to manage alumni data.",
    stack: ["Laravel", "MySQL", "Bootstrap"],
    img: alumni,
  },
  {
    title: "POS Dashboard",
    desc: "Real-time sales and inventory dashboard for retail businesses.",
    stack: ["React", "Node.js", "Charts"],
    img: pos,
  },
  {
    title: "Booking App",
    desc: "A mobile booking experience with calendar, reminders, and payments.",
    stack: ["Flutter", "REST API", "Firebase"],
    img: booking,
  },
  {
    title: "Flutter UI Kit",
    desc: "A curated set of production-ready Flutter UI components and screens.",
    stack: ["Flutter", "Dart", "UI Kit"],
    img: flutter,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="blob h-80 w-80 bg-accent-pink/20 top-20 left-0" />
      <div className="container relative">
        <div className="reveal mb-14 text-center">
          <span className="text-sm font-semibold tracking-widest text-primary">PORTFOLIO</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            A glimpse of recent work — mobile apps, dashboards, and web platforms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal group relative overflow-hidden rounded-3xl glass shadow-card transition-smooth hover:-translate-y-2 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-smooth" />
                <div className="absolute right-3 top-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <a href="#" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-full glass hover:text-primary">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Live" className="flex h-9 w-9 items-center justify-center rounded-full glass hover:text-primary">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
