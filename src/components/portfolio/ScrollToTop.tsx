import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-smooth hover:scale-110",
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
