import { cn } from '@/lib/utils';

export function ProjectOMRPage1() {
  return (
    <div className="min-h-screen w-full px-8 pt-24 pb-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-2xl">
        {/* Chapter header */}
        <header className="mb-12 animate-fade-in">
          <span className="font-mono text-xs text-muted-foreground/60 tracking-widest">
            CHAPTER III
          </span>
          <h2 className="chapter-heading mt-2">OMR Evaluation System</h2>
          <p className="font-sans text-sm text-muted-foreground mt-3">
            Software Engineering Project · Team Lead
          </p>
          <div className="section-marker mt-6" />
        </header>

        {/* Content */}
        <article className="space-y-10">
          <section className="animate-fade-in-delayed">
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-primary mb-4">
              Problem Statement
            </h3>
            <p className="font-serif text-foreground/90 leading-relaxed">
              Educational institutions often face challenges evaluating objective-type 
              answer sheets when dedicated OMR scanning machines are unavailable or 
              cost-prohibitive. Manual evaluation is time-consuming, error-prone, and 
              does not scale well with large student populations.
            </p>
          </section>

          <section className="animate-fade-in-delayed-2">
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-primary mb-4">
              Solution Approach
            </h3>
            <p className="font-serif text-foreground/90 leading-relaxed mb-6">
              A web-based OMR evaluation system that digitally evaluates scanned answer 
              sheets, providing a software-centric, cost-effective alternative to 
              hardware-dependent solutions.
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-primary/40 pl-4">
                <h4 className="font-sans text-sm font-medium text-foreground mb-2">
                  Role-Based Architecture
                </h4>
                <ul className="space-y-2">
                  {[
                    { role: 'Admin', desc: 'System configuration and user management' },
                    { role: 'Faculty', desc: 'Answer key management and result verification' },
                    { role: 'Students', desc: 'Secure result viewing and feedback' },
                  ].map((item) => (
                    <li key={item.role} className="flex gap-3 font-serif text-sm text-foreground/80">
                      <span className="font-mono text-xs text-primary/80 w-16">{item.role}</span>
                      <span>{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-2 border-primary/40 pl-4">
                <h4 className="font-sans text-sm font-medium text-foreground mb-2">
                  Modular Workflow
                </h4>
                <ul className="space-y-1 font-serif text-sm text-foreground/80">
                  <li>• OMR sheet input handling and validation</li>
                  <li>• Automated response processing</li>
                  <li>• Rule-based scoring engine</li>
                  <li>• Result generation and export</li>
                </ul>
              </div>
            </div>
          </section>

          <footer className="pt-4 animate-fade-in-delayed-3">
            <p className="font-mono text-xs text-muted-foreground/60 text-right italic">
              Continued on next page →
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
}
