import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface SwipeHintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SwipeHintModal({ isOpen, onClose }: SwipeHintModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen && isMobile) {
      // Small delay for animation
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen, isMobile]);

  // Don't show on desktop
  if (!isOpen || !isMobile) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <div 
        className={`relative mx-4 max-w-sm rounded-2xl bg-card border border-border p-6 shadow-2xl transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute right-3 top-3 p-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <h3 className="text-center text-lg font-semibold text-foreground mb-2">
          Navigate Pages
        </h3>
        <p className="text-center text-sm text-muted-foreground mb-6">
          Swipe left/right or use arrow keys to turn pages
        </p>

        {/* Visual swipe demonstration */}
        <div className="relative h-40 bg-muted/30 rounded-xl overflow-hidden mb-6">
          {/* Page representation */}
          <div className="absolute inset-4 bg-card rounded-lg shadow-md border border-border flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-1 bg-muted-foreground/30 rounded mb-2 mx-auto" />
              <div className="w-12 h-1 bg-muted-foreground/20 rounded mx-auto" />
            </div>
          </div>

          {/* Animated swipe hand */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="swipe-hand-animation">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-primary/40" />
              </div>
            </div>
          </div>

          {/* Direction arrows */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-primary animate-[pulse_1.5s_ease-in-out_infinite]">
            <ChevronLeft className="h-6 w-6" />
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-primary animate-[pulse_1.5s_ease-in-out_infinite]">
            <ChevronRight className="h-6 w-6" />
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-sm">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <ChevronRight className="h-4 w-4 text-primary" />
            </div>
            <span className="text-muted-foreground">
              <span className="text-foreground font-medium">Swipe Left</span> — Next page
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <ChevronLeft className="h-4 w-4 text-primary" />
            </div>
            <span className="text-muted-foreground">
              <span className="text-foreground font-medium">Swipe Right</span> — Previous page
            </span>
          </div>
        </div>

        {/* Got it button */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}