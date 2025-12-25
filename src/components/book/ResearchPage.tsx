import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

export function ResearchPage() {
  return (
    <div className="min-h-screen w-full px-8 pt-24 pb-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-2xl">
        {/* Chapter header */}
        <header className="mb-12 animate-fade-in">
          <span className="font-mono text-xs text-muted-foreground/60 tracking-widest">
            CHAPTER II
          </span>
          <h2 className="chapter-heading mt-2">Research</h2>
          <div className="section-marker mt-6" />
        </header>

        {/* Research project */}
        <article className="space-y-8">
          <section className="animate-fade-in-delayed">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-serif text-xl text-foreground">
                  Number Plate Detection Project
                </h3>
                <p className="font-sans text-sm text-muted-foreground mt-1">
                  Research Assistant · Machine Learning & Computer Vision
                </p>
              </div>
              <span className="font-mono text-xs text-primary/80 whitespace-nowrap">
                Aug 2025 – Present
              </span>
            </div>
          </section>

          <section className="animate-fade-in-delayed-2">
            <h4 className="font-sans text-sm uppercase tracking-[0.15em] text-primary mb-4">
              Problem
            </h4>
            <p className="font-serif text-foreground/90 leading-relaxed">
              Automating vehicle identification from video feeds requires robust detection 
              of license plates under varying conditions—different lighting, angles, and 
              plate formats. Manual review is impractical at scale.
            </p>
          </section>

          <section className="animate-fade-in-delayed-2">
            <h4 className="font-sans text-sm uppercase tracking-[0.15em] text-primary mb-4">
              Approach
            </h4>
            <ul className="space-y-3">
              {[
                'Built data preprocessing and feature extraction pipeline for vehicle image datasets',
                'Conducted exploratory data analysis for machine learning experiments',
                'Developing ML-based computer vision system for live video feed processing',
                'Implementing automatic license number extraction using OCR techniques',
              ].map((item, index) => (
                <li 
                  key={index} 
                  className="flex gap-3 font-serif text-foreground/90"
                >
                  <span className="text-primary/60 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="animate-fade-in-delayed-3">
            <h4 className="font-sans text-sm uppercase tracking-[0.15em] text-primary mb-4">
              Current Status
            </h4>
            <div className="border-l-2 border-primary/40 pl-4">
              <p className="font-serif text-foreground/90 leading-relaxed">
                Currently developing the core detection model with focus on accuracy 
                under real-world conditions. The system will accept video or live camera 
                feed as input and output extracted license numbers as text.
              </p>
            </div>
          </section>

          <section className="pt-4 animate-fade-in-delayed-3">
            <h4 className="font-sans text-sm uppercase tracking-[0.15em] text-primary mb-4">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'OpenCV', 'Machine Learning', 'Feature Extraction', 'OCR'].map((tech) => (
                <span 
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 bg-muted text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
