import { useState } from "react";
import { z } from "zod";
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().trim().email("Invalid email address").max(160),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const contactInfo = [
  { Icon: Phone, label: "Phone", value: "+855 12 345 678", href: "tel:+85512345678" },
  { Icon: Mail, label: "Email", value: "mengchhorng@example.com", href: "mailto:mengchhorng@example.com" },
  { Icon: MessageCircle, label: "Telegram", value: "@mengchhorng", href: "https://t.me/mengchhorng" },
  { Icon: MapPin, label: "Location", value: "Phnom Penh, Cambodia", href: "#" },
];

const socials = [
  { Icon: Github, href: "https://github.com", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: MessageCircle, href: "https://wa.me/85512345678", label: "WhatsApp" },
];

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="container">
        <div className="reveal mb-14 text-center">
          <span className="text-sm font-semibold tracking-widest text-primary">GET IN TOUCH</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Let's <span className="gradient-text">work together</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="reveal lg:col-span-2 space-y-4">
            {contactInfo.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 rounded-2xl glass p-4 transition-smooth hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="font-medium">{value}</div>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full glass text-muted-foreground transition-smooth hover:text-primary hover:shadow-glow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="reveal lg:col-span-3 glass rounded-3xl p-6 sm:p-8 shadow-card space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" name="name" placeholder="Jane Doe" required maxLength={80} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input id="email" name="email" type="email" placeholder="jane@example.com" required maxLength={160} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={6} placeholder="Tell me about your project..." required maxLength={1000} />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full sm:w-auto">
              {loading ? "Sending..." : (<>Send Message <Send className="h-4 w-4" /></>)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
