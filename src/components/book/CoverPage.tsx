import { cn } from '@/lib/utils';

interface CoverPageProps {
  onOpen: () => void;
}

export function CoverPage({ onOpen }: CoverPageProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Texture overlay */}
      <div className="book-texture pointer-events-none absolute inset-0" />
      
      {/* Spine accent on the left */}
      <div className="absolute left-0 top-0 h-full w-2 bg-book-spine" />
      
      {/* Cover content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8">
        {/* Main title block */}
        <div className="text-center animate-fade-in">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 animate-text-reveal">
            Portfolio
          </p>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground leading-tight mb-6">
            Welcome to Datri's
            <br />
            <span className="text-primary">Personal Book</span>
          </h1>

          <div className="section-marker mx-auto my-8" />

          <p className="font-serif text-lg text-muted-foreground italic max-w-md mx-auto animate-fade-in-delayed">
            Engineering notes, research, and projects
          </p>
        </div>

        {/* Enter button */}
        <button
          onClick={onOpen}
          className={cn(
            'mt-16 group relative overflow-hidden',
            'px-8 py-3 font-sans text-sm uppercase tracking-[0.2em]',
            'border border-border text-muted-foreground',
            'transition-all duration-500 ease-book',
            'hover:border-primary hover:text-primary',
            'focus:outline-none focus:ring-1 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background',
            'animate-fade-in-delayed-2'
          )}
        >
          <span className="relative z-10">Open Book</span>
          <div className="absolute inset-0 -translate-x-full bg-primary/10 transition-transform duration-500 ease-book group-hover:translate-x-0" />
        </button>

        {/* Bottom decoration */}
        <div className="absolute bottom-16 inset-x-0 flex justify-center animate-fade-in-delayed-3">
          <div className="text-center">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground/40 mb-2">
              Author
            </p>
            <p className="font-mono text-xs text-muted-foreground/60 tracking-wider">
              DATRI SARANYA SALADI
            </p>
            <p className="font-mono text-xs text-muted-foreground/40 mt-1">
              B.Tech CSE (AI/ML) · VITAP University
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
