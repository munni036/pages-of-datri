import { cn } from '@/lib/utils';

export function ProjectOMRPage2() {
  return (
    <div className="min-h-screen w-full px-8 pt-24 pb-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-2xl">
        {/* Continuation header */}
        <header className="mb-12 animate-fade-in">
          <span className="font-mono text-xs text-muted-foreground/60 tracking-widest">
            CHAPTER III · CONTINUED
          </span>
          <h2 className="chapter-heading mt-2">Results & Learnings</h2>
          <div className="section-marker mt-6" />
        </header>

        {/* Content */}
        <article className="space-y-10">
          <section className="animate-fade-in-delayed">
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-primary mb-4">
              Expected Outcomes
            </h3>
            <div className="grid gap-4">
              {[
                { metric: 'Cost Reduction', value: 'Eliminates hardware dependency' },
                { metric: 'Time Savings', value: 'Automated batch processing' },
                { metric: 'Accuracy', value: 'Rule-based scoring consistency' },
                { metric: 'Accessibility', value: 'Web-based, device-agnostic' },
              ].map((item, index) => (
                <div 
                  key={item.metric}
                  className="flex items-center justify-between py-3 border-b border-border/30"
                >
                  <span className="font-serif text-foreground">{item.metric}</span>
                  <span className="font-mono text-sm text-muted-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="animate-fade-in-delayed-2">
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-primary mb-4">
              Key Learnings
            </h3>
            <ul className="space-y-4">
              {[
                'Leading a project team requires balancing technical decisions with clear communication',
                'Modular architecture enables independent testing and future extensibility',
                'Software alternatives can provide viable solutions when hardware is constrained',
                'User role analysis is critical before system design begins',
              ].map((item, index) => (
                <li 
                  key={index}
                  className="flex gap-3 font-serif text-foreground/90"
                >
                  <span className="font-mono text-xs text-primary/80 mt-1">{String(index + 1).padStart(2, '0')}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="animate-fade-in-delayed-3">
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-primary mb-4">
              Next Steps
            </h3>
            <div className="bg-muted/30 p-5 border border-border/50">
              <ul className="space-y-3 font-serif text-foreground/90 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  Implement image preprocessing for varied scan quality
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  Add support for multiple answer key formats
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  Develop analytics dashboard for result insights
                </li>
              </ul>
            </div>
          </section>

          <section className="pt-4 animate-fade-in-delayed-3">
            <h4 className="font-sans text-sm uppercase tracking-[0.15em] text-primary mb-4">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Software Engineering', 'Web Development', 'System Design', 'Team Leadership'].map((tech) => (
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
