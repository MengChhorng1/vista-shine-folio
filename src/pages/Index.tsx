import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Eng Mengchhorng",
    jobTitle: "Flutter Developer, Frontend Developer, UI/UX Designer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Phnom Penh",
      addressCountry: "Cambodia",
    },
    sameAs: ["https://github.com", "https://linkedin.com"],
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
