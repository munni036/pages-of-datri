import { useState, useCallback, useEffect } from 'react';

export type PageId = 
  | 'cover' 
  | 'index' 
  | 'about' 
  | 'research' 
  | 'project-omr-1' 
  | 'project-omr-2' 
  | 'skills' 
  | 'notes' 
  | 'contact'
  | 'thank-you';

export interface Page {
  id: PageId;
  title: string;
  chapter?: string;
  pageNumber?: number;
}

export const pages: Page[] = [
  { id: 'cover', title: 'Cover' },
  { id: 'index', title: 'Index', pageNumber: 1 },
  { id: 'about', title: 'About', chapter: 'I', pageNumber: 2 },
  { id: 'research', title: 'Research', chapter: 'II', pageNumber: 3 },
  { id: 'project-omr-1', title: 'OMR System', chapter: 'III', pageNumber: 4 },
  { id: 'project-omr-2', title: 'OMR System', chapter: 'III', pageNumber: 5 },
  { id: 'skills', title: 'Technical Skills', chapter: 'IV', pageNumber: 6 },
  { id: 'notes', title: 'Notes', chapter: 'V', pageNumber: 7 },
  { id: 'contact', title: 'Contact', chapter: 'VI', pageNumber: 8 },
  { id: 'thank-you', title: 'Thank You' },
];

export type NavigationDirection = 'forward' | 'backward' | 'none';

export function useBookNavigation() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [direction, setDirection] = useState<NavigationDirection>('none');
  const [isAnimating, setIsAnimating] = useState(false);

  const currentPage = pages[currentPageIndex];
  const canGoNext = currentPageIndex < pages.length - 1;
  const canGoPrev = currentPageIndex > 0;

  const goToPage = useCallback((pageId: PageId) => {
    const targetIndex = pages.findIndex(p => p.id === pageId);
    if (targetIndex === -1 || targetIndex === currentPageIndex || isAnimating) return;

    setDirection(targetIndex > currentPageIndex ? 'forward' : 'backward');
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentPageIndex(targetIndex);
      setTimeout(() => setIsAnimating(false), 100);
    }, 50);
  }, [currentPageIndex, isAnimating]);

  const nextPage = useCallback(() => {
    if (!canGoNext || isAnimating) return;
    setDirection('forward');
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentPageIndex(prev => prev + 1);
      setTimeout(() => setIsAnimating(false), 100);
    }, 50);
  }, [canGoNext, isAnimating]);

  const prevPage = useCallback(() => {
    if (!canGoPrev || isAnimating) return;
    setDirection('backward');
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentPageIndex(prev => prev - 1);
      setTimeout(() => setIsAnimating(false), 100);
    }, 50);
  }, [canGoPrev, isAnimating]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextPage();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPage, prevPage]);

  return {
    currentPage,
    currentPageIndex,
    direction,
    isAnimating,
    canGoNext,
    canGoPrev,
    goToPage,
    nextPage,
    prevPage,
    pages,
  };
}
