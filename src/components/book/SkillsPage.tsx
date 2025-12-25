import { cn } from '@/lib/utils';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['C/C++', 'Python', 'Java'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQL+'],
  },
  {
    title: 'AI/Machine Learning',
    skills: ['Supervised Learning', 'Feature Extraction', 'Model Evaluation', 'Genetic Algorithms'],
  },
  {
    title: 'Core Subjects',
    skills: ['Data Structures', 'Algorithms'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub'],
  },
];

export function SkillsPage() {
  return (
    <div className="min-h-screen w-full px-8 pt-24 pb-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-2xl">
        {/* Chapter header */}
        <header className="mb-12 animate-fade-in">
          <span className="font-mono text-xs text-muted-foreground/60 tracking-widest">
            CHAPTER IV
          </span>
          <h2 className="chapter-heading mt-2">Technical Skills</h2>
          <div className="section-marker mt-6" />
        </header>

        {/* Skills grid */}
        <article className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <section 
              key={category.title}
              className="animate-fade-in"
              style={{ animationDelay: `${150 + catIndex * 100}ms` }}
            >
              <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      'font-mono text-sm px-4 py-2',
                      'border border-border/60 text-foreground/90',
                      'transition-all duration-300',
                      'hover:border-primary/50 hover:text-primary'
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}

          {/* Languages section */}
          <section className="animate-fade-in-delayed-3">
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-primary mb-4">
              Languages
            </h3>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <span className="font-serif text-foreground">English</span>
                <span className="font-mono text-xs text-muted-foreground">Fluent</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-foreground">Telugu</span>
                <span className="font-mono text-xs text-muted-foreground">Native</span>
              </div>
            </div>
          </section>

          {/* Positions */}
          <section className="animate-fade-in-delayed-3 pt-4">
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-primary mb-4">
              Positions of Responsibility
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 font-serif text-foreground/90">
                <span className="text-primary/60">—</span>
                <span>Project Team Lead, OMR Based Evaluation System, VIT AP</span>
              </li>
              <li className="flex gap-3 font-serif text-foreground/90">
                <span className="text-primary/60">—</span>
                <span>Event Volunteer, Inter-Department Mechanical Event, VIT AP</span>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
