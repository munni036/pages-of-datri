import { cn } from "@/lib/utils";
import { Mail, Phone, Linkedin, Github, LucideProps } from "lucide-react";

interface ContactLink {
  icon: React.ComponentType<LucideProps>;
  label: string;
  value: string;
  href: string;
}

const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    value: "datrisaranyasaladi@gmail.com",
    href: "mailto:datrisaranyasaladi@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 918 259 9168",
    href: "tel:+919182599168",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "datri-saranya-saladi",
    href: "https://linkedin.com/in/datri-saranya-saladi-1552a3371",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "munni036",
    href: "https://github.com/munni036",
  },
];

export function ContactPage() {
  return (
    <div className="min-h-screen w-full px-8 pt-24 pb-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-2xl">
        {/* Chapter header */}
        <header className="mb-12 animate-fade-in">
          <span className="font-mono text-xs text-muted-foreground/60 tracking-widest">CHAPTER VI</span>
          <h2 className="chapter-heading mt-2">Contact</h2>
          <div className="section-marker mt-6" />
        </header>

        {/* Intro */}
        <section className="mb-12 animate-fade-in-delayed">
          <p className="font-serif text-foreground/90 leading-relaxed">
            I am open to research collaborations, internship opportunities, and meaningful discussions in Computer
            Science. Feel free to reach out for collaborations, opportunities, or clarifying questions.
          </p>
        </section>

        {/* Contact links */}
        <article className="space-y-0">
        {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (link.href.startsWith("mailto:") || link.href.startsWith("tel:")) {
                  e.preventDefault();
                  window.open(link.href, "_self");
                }
              }}
              className={cn(
                "group flex items-center gap-5 py-5",
                "border-b border-border/40",
                "transition-all duration-300",
                "hover:border-primary/40",
                "focus:outline-none focus:border-primary",
                "animate-fade-in",
              )}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <link.icon
                className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                strokeWidth={1.5}
              />
              <div className="flex-1">
                <span className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wider block mb-1">
                  {link.label}
                </span>
                <span className="font-serif text-foreground transition-colors duration-300 group-hover:text-primary">
                  {link.value}
                </span>
              </div>
              <span className="font-mono text-xs text-muted-foreground/40 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          ))}
        </article>

        {/* Closing note */}
        <footer className="mt-16 text-center animate-fade-in-delayed-3">
          <div className="section-marker mx-auto mb-6" />
          <p className="font-serif text-sm text-muted-foreground">Datri Saranya Saladi</p>
          <p className="font-mono text-xs text-muted-foreground/60 mt-1">VITAP University · B.Tech CSE (AI/ML)</p>
        </footer>
      </div>
    </div>
  );
}
