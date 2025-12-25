import { cn } from '@/lib/utils';
import { PageId, pages } from '@/hooks/useBookNavigation';
import { BookOpen } from 'lucide-react';

interface PageNavigationProps {
  currentPageId: PageId;
  onNavigate: (pageId: PageId) => void;
}

// Pages to show in navigation (excluding cover, index, thank-you)
const navPages = pages.filter(
  (p) => p.id !== 'cover' && p.id !== 'index' && p.id !== 'thank-you'
);

export function PageNavigation({ currentPageId, onNavigate }: PageNavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border/30">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Contents button */}
        <button
          onClick={() => onNavigate('index')}
          className={cn(
            'flex items-center gap-2 px-3 py-1.5',
            'font-sans text-xs uppercase tracking-[0.15em]',
            'text-muted-foreground hover:text-primary',
            'transition-colors duration-300',
            'border border-border/50 hover:border-primary/50'
          )}
        >
          <BookOpen className="h-3.5 w-3.5" strokeWidth={1.5} />
          <span>Contents</span>
        </button>

        {/* Page links */}
        <div className="flex items-center gap-1 md:gap-2">
          {navPages.map((page) => (
            <button
              key={page.id}
              onClick={() => onNavigate(page.id)}
              className={cn(
                'px-2 py-1 font-mono text-xs transition-colors duration-300',
                currentPageId === page.id
                  ? 'text-primary'
                  : 'text-muted-foreground/60 hover:text-foreground'
              )}
            >
              {page.chapter || page.pageNumber}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
