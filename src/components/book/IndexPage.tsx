import { cn } from "@/lib/utils";
import { pages, PageId } from "@/hooks/useBookNavigation";

interface IndexPageProps {
  onNavigate: (pageId: PageId) => void;
  currentPageId: PageId;
}

const indexItems = [
  { id: "about" as PageId, chapter: "I", title: "About", page: 2 },
  { id: "research" as PageId, chapter: "II", title: "Research", page: 3 },
  { id: "project-omr-1" as PageId, chapter: "III", title: "OMR Evaluation System", page: "4–5" },
  { id: "skills" as PageId, chapter: "IV", title: "Technical Skills", page: 6 },
  { id: "notes" as PageId, chapter: "V", title: "Notes", page: 7 },
  { id: "contact" as PageId, chapter: "VI", title: "Contact", page: 8 },
];

export function IndexPage({ onNavigate, currentPageId }: IndexPageProps) {
  return (
    <div className="min-h-screen w-full px-8 py-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <header className="mb-16 text-center animate-fade-in">
          <h2 className="font-serif text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Contents</h2>
          <div className="section-marker mx-auto" />
        </header>

        {/* Index list */}
        <nav className="space-y-0">
          {indexItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "group w-full flex items-center gap-4 py-5 text-left",
                "border-b border-border/50 transition-all duration-300",
                "hover:border-primary/40 focus:outline-none focus:border-primary",
                "animate-fade-in",
              )}
              style={{ animationDelay: `${100 + index * 80}ms` }}
            >
              {/* Chapter number */}
              <span className="font-mono text-xs text-muted-foreground/60 w-8 transition-colors duration-300 group-hover:text-primary">
                {item.chapter}
              </span>

              {/* Title */}
              <span className="font-serif text-lg text-foreground flex-1 transition-colors duration-300 group-hover:text-primary group-focus:text-primary">
                {item.title}
              </span>

              {/* Dots */}
              <span className="hidden md:block flex-1 border-b border-dotted border-border/30 mx-4" />

              {/* Page number */}
              <span className="font-mono text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                {item.page}
              </span>
            </button>
          ))}
        </nav>

        {/* Footer note */}
        <footer className="mt-16 text-center animate-fade-in-delayed-3">
          <p className="font-sans text-xs text-muted-foreground/60 tracking-wide">
            Use arrow keys or slide to navigate
          </p>
        </footer>
      </div>
    </div>
  );
}
