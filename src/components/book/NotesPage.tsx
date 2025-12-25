import { cn } from '@/lib/utils';

interface Note {
  id: string;
  title: string;
  content: string;
  tag: string;
}

const notes: Note[] = [
  {
    id: '01',
    title: 'On Feature Engineering',
    content: 'The quality of features determines model ceiling. No algorithm compensates for poor feature selection. Spend time understanding the data before reaching for complex architectures.',
    tag: 'ML',
  },
  {
    id: '02',
    title: 'Code Review Observations',
    content: 'Clear variable naming reduces cognitive load more than comments. Write code as if the next reader has no context—because they won\'t.',
    tag: 'Engineering',
  },
  {
    id: '03',
    title: 'System Design Principle',
    content: 'Start with the simplest solution that works. Optimize only when measurements demand it. Premature optimization often creates more problems than it solves.',
    tag: 'Design',
  },
  {
    id: '04',
    title: 'Learning Approach',
    content: 'Implementation teaches more than reading. Build something small with every new concept. Theory anchors understanding, but practice creates competence.',
    tag: 'Growth',
  },
];

export function NotesPage() {
  return (
    <div className="min-h-screen w-full px-8 pt-24 pb-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-2xl">
        {/* Chapter header */}
        <header className="mb-12 animate-fade-in">
          <span className="font-mono text-xs text-muted-foreground/60 tracking-widest">
            CHAPTER V
          </span>
          <h2 className="chapter-heading mt-2">Notes</h2>
          <p className="font-serif text-muted-foreground italic mt-3">
            Brief technical insights and working principles
          </p>
          <div className="section-marker mt-6" />
        </header>

        {/* Notes list */}
        <article className="space-y-8">
          {notes.map((note, index) => (
            <section
              key={note.id}
              className={cn(
                'group py-6 border-b border-border/30',
                'animate-fade-in'
              )}
              style={{ animationDelay: `${150 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="font-mono text-xs text-primary/60 mt-1">
                  {note.id}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {note.title}
                    </h3>
                    <span className="font-mono text-xs px-2 py-0.5 bg-muted text-muted-foreground">
                      {note.tag}
                    </span>
                  </div>
                  <p className="font-serif text-foreground/80 leading-relaxed mt-3">
                    {note.content}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </article>

        {/* Footer */}
        <footer className="mt-12 animate-fade-in-delayed-3">
          <div className="border-l-2 border-primary/40 pl-4">
            <p className="font-serif text-sm text-muted-foreground italic">
              "The engineer's notebook is never complete—only current."
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
