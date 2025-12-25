import { ReactNode, useEffect, useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavigationDirection } from '@/hooks/useBookNavigation';
import { SwipeHintModal } from './SwipeHintModal';

interface BookLayoutProps {
  children: ReactNode;
  direction: NavigationDirection;
  showNavigation?: boolean;
  canGoNext?: boolean;
  canGoPrev?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
  pageNumber?: number;
  chapter?: string;
  pageKey?: string;
  topNav?: ReactNode;
}

export function BookLayout({
  children,
  direction,
  showNavigation = true,
  canGoNext,
  canGoPrev,
  onNext,
  onPrev,
  pageNumber,
  chapter,
  pageKey,
  topNav,
}: BookLayoutProps) {
  const [animationKey, setAnimationKey] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(() => {
    // Check if user has seen the hint before
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('swipe-hint-seen');
    }
    return true;
  });
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Minimum swipe distance to trigger navigation
  const minSwipeDistance = 50;

  // Trigger new animation on page change and scroll to top
  useEffect(() => {
    if (direction !== 'none') {
      setAnimationKey(prev => prev + 1);
      // Scroll to top when page changes
      window.scrollTo(0, 0);
    }
  }, [pageKey, direction]);

  const handleCloseHint = useCallback(() => {
    setShowSwipeHint(false);
    localStorage.setItem('swipe-hint-seen', 'true');
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && canGoNext && onNext) {
      setShowSwipeHint(false);
      localStorage.setItem('swipe-hint-seen', 'true');
      onNext();
    } else if (isRightSwipe && canGoPrev && onPrev) {
      setShowSwipeHint(false);
      localStorage.setItem('swipe-hint-seen', 'true');
      onPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  }, [canGoNext, canGoPrev, onNext, onPrev]);

  return (
    <div 
      className="relative min-h-screen w-full overflow-hidden bg-background" 
      style={{ perspective: '1500px' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle texture overlay */}
      <div className="book-texture pointer-events-none fixed inset-0 z-0" />

      {topNav}
      
      {/* Main content area */}
      <main
        key={animationKey}
        className={cn(
          'relative z-10 min-h-screen w-full',
          direction === 'forward' && 'animate-page-turn',
          direction === 'backward' && 'animate-page-turn-back'
        )}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </main>

      {/* Navigation arrows - hidden on mobile, shown on desktop */}
      {showNavigation && (
        <>
          <button
            onClick={onPrev}
            disabled={!canGoPrev}
            className={cn(
              "fixed left-4 top-[50vh] z-20 -translate-y-1/2 p-3 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background hidden md:block",
              canGoPrev ? "text-muted-foreground hover:text-primary cursor-pointer" : "text-muted-foreground/20 cursor-default"
            )}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={1} />
          </button>
          <button
            onClick={onNext}
            disabled={!canGoNext}
            className={cn(
              "fixed right-4 top-[50vh] z-20 -translate-y-1/2 p-3 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background hidden md:block",
              canGoNext ? "text-muted-foreground hover:text-primary cursor-pointer" : "text-muted-foreground/20 cursor-default"
            )}
            aria-label="Next page"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={1} />
          </button>
        </>
      )}

      {/* Mobile swipe hint modal - shows for first-time visitors */}
      <SwipeHintModal 
        isOpen={showNavigation && showSwipeHint} 
        onClose={handleCloseHint} 
      />

      {/* Page footer with page number */}
      {pageNumber && (
        <footer className="fixed bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-4">
          {chapter && (
            <span className="page-number opacity-60">Chapter {chapter}</span>
          )}
          <span className="page-number">{pageNumber}</span>
        </footer>
      )}
    </div>
  );
}
