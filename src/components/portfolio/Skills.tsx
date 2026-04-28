import { useEffect, useRef, useState } from "react";
import { Code2, Palette } from "lucide-react";

type Skill = { name: string; value: number };

const programming: Skill[] = [
  { name: "Flutter / Dart", value: 92 },
  { name: "HTML / CSS / JS", value: 95 },
  { name: "React / TypeScript", value: 85 },
  { name: "PHP / Laravel", value: 80 },
  { name: "MySQL", value: 82 },
  { name: "Git / GitHub", value: 88 },
];

const design: Skill[] = [
  { name: "UI / UX Design", value: 90 },
  { name: "Figma", value: 93 },
  { name: "Adobe XD", value: 80 },
  { name: "Responsive Design", value: 95 },
];

function Bar({ skill }: { skill: Skill }) {
  const [w, setW] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setW(skill.value);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [skill.value]);
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{skill.name}</span>
        <span className="text-muted-foreground">{skill.value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gradient-primary transition-all duration-[1500ms] ease-out"
          style={{ width: `${w}%` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="blob h-80 w-80 bg-accent-cyan/20 -top-10 right-0" />
      <div className="container relative">
        <div className="reveal mb-14 text-center">
          <span className="text-sm font-semibold tracking-widest text-primary">MY SKILLS</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Tools I use to <span className="gradient-text">build & design</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="reveal glass rounded-3xl p-8 shadow-card">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Programming</h3>
            </div>
            <div className="space-y-5">
              {programming.map((s) => <Bar key={s.name} skill={s} />)}
            </div>
          </div>

          <div className="reveal glass rounded-3xl p-8 shadow-card">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Palette className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Design</h3>
            </div>
            <div className="space-y-5">
              {design.map((s) => <Bar key={s.name} skill={s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
