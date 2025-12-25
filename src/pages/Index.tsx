import { useEffect } from 'react';
import { useBookNavigation, PageId } from '@/hooks/useBookNavigation';
import { BookLayout } from '@/components/book/BookLayout';
import { CoverPage } from '@/components/book/CoverPage';
import { IndexPage } from '@/components/book/IndexPage';
import { AboutPage } from '@/components/book/AboutPage';
import { ResearchPage } from '@/components/book/ResearchPage';
import { ProjectOMRPage1 } from '@/components/book/ProjectOMRPage1';
import { ProjectOMRPage2 } from '@/components/book/ProjectOMRPage2';
import { SkillsPage } from '@/components/book/SkillsPage';
import { NotesPage } from '@/components/book/NotesPage';
import { ContactPage } from '@/components/book/ContactPage';
import { ThankYouPage } from '@/components/book/ThankYouPage';
import { PageNavigation } from '@/components/book/PageNavigation';

const Index = () => {
  const {
    currentPage,
    direction,
    canGoNext,
    canGoPrev,
    goToPage,
    nextPage,
    prevPage,
  } = useBookNavigation();

  // Strip any injected "Edit with Lovable" badge that hosting platforms may add.
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const scrubLovableBadge = () => {
      const selectors = [
        '[aria-label="Edit with Lovable"]',
        '[data-testid="lovable-editor-toggle"]',
        '[data-lovable]',
        '[class*="lovable"]',
        'a[href*="lovable.app"]',
      ];

      selectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((node) => node.remove());
      });

      document.querySelectorAll('a, button, div, span').forEach((node) => {
        const text = (node.textContent || '').trim();
        if (/^Edit with\s*Lovable$/i.test(text)) {
          node.remove();
        }
      });
    };

    const observer = new MutationObserver(scrubLovableBadge);
    scrubLovableBadge();
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  // Navigate back to cover (home)
  const handleBackToHome = () => {
    goToPage('cover');
  };

  // Pages that should show navigation
  const showPageNavigation = !['cover', 'index', 'thank-you'].includes(currentPage.id);

  // Render the appropriate page component
  const renderPage = () => {
    switch (currentPage.id) {
      case 'cover':
        return <CoverPage onOpen={nextPage} />;
      case 'index':
        return <IndexPage onNavigate={goToPage} currentPageId={currentPage.id} />;
      case 'about':
        return <AboutPage />;
      case 'research':
        return <ResearchPage />;
      case 'project-omr-1':
        return <ProjectOMRPage1 />;
      case 'project-omr-2':
        return <ProjectOMRPage2 />;
      case 'skills':
        return <SkillsPage />;
      case 'notes':
        return <NotesPage />;
      case 'contact':
        return <ContactPage />;
      case 'thank-you':
        return <ThankYouPage onBackToHome={handleBackToHome} />;
      default:
        return <CoverPage onOpen={nextPage} />;
    }
  };

  const showNavigation = currentPage.id !== 'cover' && currentPage.id !== 'thank-you';

  return (
    <BookLayout
      direction={direction}
      showNavigation={showNavigation}
      canGoNext={canGoNext}
      canGoPrev={canGoPrev}
      onNext={nextPage}
      onPrev={prevPage}
      pageNumber={currentPage.pageNumber}
      chapter={currentPage.chapter}
      pageKey={currentPage.id}
      topNav={
        showPageNavigation ? (
          <PageNavigation currentPageId={currentPage.id} onNavigate={goToPage} />
        ) : undefined
      }
    >
      {renderPage()}
    </BookLayout>
  );
};

export default Index;
