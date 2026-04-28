import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    role: "Flutter Developer Intern",
    org: "ABC Company",
    period: "2024 — Present",
    bullets: [
      "Built and shipped mobile applications using Flutter & Dart",
      "Integrated REST APIs and authentication flows",
      "Improved UI performance and reduced app startup time by 35%",
    ],
  },
  {
    role: "Frontend Developer — Freelance",
    org: "Remote",
    period: "2023 — 2024",
    bullets: [
      "Developed responsive websites for small businesses",
      "Created admin dashboards with React and Tailwind",
      "Improved SEO and page speed across multiple client sites",
    ],
  },
];

const education = [
  {
    role: "Bachelor of Information Technology",
    org: "National University of Management",
    period: "2022 — 2026",
    bullets: ["Focus on software engineering, databases, and mobile development."],
  },
  {
    role: "Web Development Certification",
    org: "Online Course Platform",
    period: "2023",
    bullets: ["Modern frontend workflows, React, and responsive design fundamentals."],
  },
];

function Timeline({ items, Icon }: { items: typeof experience; Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="relative space-y-8 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary before:via-accent-cyan before:to-transparent">
      {items.map((it, i) => (
        <div key={i} className="reveal relative pl-14">
          <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
            <Icon className="h-5 w-5" />
          </div>
          <div className="glass rounded-2xl p-6 transition-smooth hover:-translate-y-1 hover:shadow-elegant">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-display text-lg font-semibold">{it.role}</h4>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                {it.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-primary">{it.org}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {it.bullets.map((b, j) => (
                <li key={j} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-cyan" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="container">
        <div className="reveal mb-14 text-center">
          <span className="text-sm font-semibold tracking-widest text-primary">JOURNEY</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="reveal mb-8 font-display text-2xl font-semibold">Work Experience</h3>
            <Timeline items={experience} Icon={Briefcase} />
          </div>
          <div>
            <h3 className="reveal mb-8 font-display text-2xl font-semibold">Education</h3>
            <Timeline items={education} Icon={GraduationCap} />
          </div>
        </div>
      </div>
    </section>
  );
}
