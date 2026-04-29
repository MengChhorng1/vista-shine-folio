import { useEffect, useRef, useState } from "react";
import { Calendar, Flag, Globe, MapPin } from "lucide-react";

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "", label: "Technologies" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let start = 0;
          const duration = 1500;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / duration);
            setN(Math.floor(start + (to - start) * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold gradient-text">
      {n}
      {suffix}
    </span>
  );
}

const info = [
  { Icon: Calendar, label: "Date of Birth", value: "Jan 15, 2003" },
  { Icon: Flag, label: "Nationality", value: "Cambodian" },
  { Icon: MapPin, label: "Location", value: "Phnom Penh, Cambodia" },
  { Icon: Globe, label: "Languages", value: "Khmer · English" },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container">
        <div className="reveal mb-14 max-w-2xl">
          <span className="text-sm font-semibold tracking-widest text-primary">ABOUT ME</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            A passionate developer <span className="gradient-text">crafting digital stories</span>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="reveal space-y-5 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              I'm a software developer based in Phnom Penh with a deep love for mobile and web
              engineering. My journey began with curiosity about how apps work and evolved into a
              career building production-grade Flutter apps and responsive web experiences.
            </p>
            <p className="leading-relaxed">
              I specialize in creating polished user interfaces, writing maintainable code, and
              bridging design with engineering. I believe great software comes from empathy —
              understanding users, understanding the team, and shipping with care.
            </p>
            <div>
              <h3 className="mb-2 font-display text-xl font-semibold text-foreground">Career Objective</h3>
              <p className="leading-relaxed">
                To join an ambitious team where I can contribute to meaningful products, grow as a
                full-stack engineer, and keep refining my craft in design and development.
              </p>
            </div>
          </div>

          <div className="reveal grid grid-cols-1 gap-4 sm:grid-cols-2">
            {info.map(({ Icon, label, value }) => (
              <div key={label} className="glass rounded-2xl p-5 transition-smooth hover:shadow-glow hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="mt-1 font-semibold">{value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-16 grid grid-cols-2 gap-6 rounded-3xl glass p-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <Counter to={s.value} suffix={s.suffix} />
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
