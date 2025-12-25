import { cn } from '@/lib/utils';
import { BookOpen } from 'lucide-react';

interface ThankYouPageProps {
  onBackToHome: () => void;
}

export function ThankYouPage({ onBackToHome }: ThankYouPageProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Texture overlay */}
      <div className="book-texture pointer-events-none absolute inset-0" />
      
      {/* Closing book spine effect on the right */}
      <div 
        className="absolute right-0 top-0 h-full w-2 bg-book-spine animate-spine-close"
        style={{ transformOrigin: 'right center' }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8">

        {/* Main content block */}
        <div className="text-center max-w-lg mx-auto">
          {/* Book icon */}
          <div className="mb-8 animate-fade-in">
            <BookOpen 
              className="w-10 h-10 mx-auto text-primary/60"
              strokeWidth={1}
            />
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-foreground leading-tight mb-6 animate-fade-in">
            Thank You for Reading
          </h1>

          <div className="section-marker mx-auto my-8 animate-fade-in-delayed" />

          {/* Message */}
          <div className="space-y-4 animate-fade-in-delayed">
            <p className="font-serif text-lg text-foreground/90 leading-relaxed">
              You have reached the final page of my digital portfolio.
            </p>
            <p className="font-serif text-muted-foreground leading-relaxed">
              Every page before this represents effort, mistakes, learning, and growth.
            </p>
          </div>

          {/* Secondary message */}
          <p className="font-serif text-sm text-muted-foreground/70 italic mt-8 animate-fade-in-delayed-2">
            Feel free to revisit any section or start again from the beginning.
          </p>

          {/* Back to Home button - fades in after 1 second */}
          <button
            onClick={onBackToHome}
            className={cn(
              'mt-12 group relative overflow-hidden',
              'px-8 py-3 font-sans text-sm uppercase tracking-[0.2em]',
              'border border-border text-muted-foreground',
              'transition-all duration-500 ease-book',
              'hover:border-primary hover:text-primary',
              'hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10',
              'focus:outline-none focus:ring-1 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background',
              'opacity-0 animate-button-fade-in'
            )}
          >
            <span className="relative z-10">Back to Cover Page</span>
            <div className="absolute inset-0 -translate-x-full bg-primary/10 transition-transform duration-500 ease-book group-hover:translate-x-0" />
          </button>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-16 inset-x-0 flex justify-center animate-fade-in-delayed-3">
          <p className="font-mono text-xs text-muted-foreground/40 tracking-widest uppercase">
            End of Book
          </p>
        </div>
      </div>
    </div>
  );
}
