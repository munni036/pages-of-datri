import { cn } from '@/lib/utils';

export function AboutPage() {
  return (
    <div className="min-h-screen w-full px-8 pt-24 pb-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-2xl">
        {/* Chapter header */}
        <header className="mb-12 animate-fade-in">
          <span className="font-mono text-xs text-muted-foreground/60 tracking-widest">
            CHAPTER I
          </span>
          <h2 className="chapter-heading mt-2">About</h2>
          <div className="section-marker mt-6" />
        </header>

        {/* Content */}
        <article className="space-y-8">
          <section className="animate-fade-in-delayed">
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-primary mb-4">
              Background
            </h3>
            <p className="font-serif text-foreground/90 leading-relaxed">
              I am Datri Saranya Saladi, a Computer Science and Engineering student 
              specializing in Artificial Intelligence and Machine Learning at VITAP University. 
              Currently maintaining a CGPA of 9.29, I focus on building practical solutions 
              that bridge theoretical knowledge with real-world applications.
            </p>
          </section>

          <section className="animate-fade-in-delayed-2">
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-primary mb-4">
              Education
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline border-b border-border/30 pb-3">
                <div>
                  <p className="font-serif text-foreground">B.Tech CSE (AI/ML)</p>
                  <p className="font-sans text-sm text-muted-foreground">VITAP University</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm text-primary">9.29 CGPA</p>
                  <p className="font-mono text-xs text-muted-foreground">2024 – Present</p>
                </div>
              </div>
              <div className="flex justify-between items-baseline border-b border-border/30 pb-3">
                <div>
                  <p className="font-serif text-foreground">Senior Secondary</p>
                  <p className="font-sans text-sm text-muted-foreground">APBIE Board</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm text-primary">98.5%</p>
                  <p className="font-mono text-xs text-muted-foreground">2022 – 2024</p>
                </div>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <p className="font-serif text-foreground">Secondary</p>
                  <p className="font-sans text-sm text-muted-foreground">SSC Board</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm text-primary">97.34%</p>
                  <p className="font-mono text-xs text-muted-foreground">2022</p>
                </div>
              </div>
            </div>
          </section>

          <section className="animate-fade-in-delayed-3">
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-primary mb-4">
              Focus Areas
            </h3>
            <p className="font-serif text-foreground/90 leading-relaxed">
              My work centers on machine learning, computer vision, and software engineering. 
              I am particularly interested in developing systems that automate manual processes 
              and extract meaningful insights from visual data.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
