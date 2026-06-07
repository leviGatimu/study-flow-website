import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

type Tag = "New" | "Improved" | "Soon";

const tagStyle: Record<Tag, string> = {
  New: "bg-blue-100 text-blue-700 dark:text-blue-400",
  Improved: "bg-emerald-100 text-emerald-700",
  Soon: "bg-amber-100 text-amber-700",
};

interface Entry {
  version: string;
  date: string;
  latest?: boolean;
  upcoming?: boolean;
  groups: { heading: string; items: { tag: Tag; text: string }[] }[];
  footerLink?: { label: string; href: string };
}

const entries: Entry[] = [
  {
    version: "Up next",
    date: "In progress",
    upcoming: true,
    groups: [
      {
        heading: "On the roadmap",
        items: [
          { tag: "Soon", text: "macOS build (Apple Silicon & Intel)" },
          { tag: "Soon", text: "Linux build (AppImage)" },
          { tag: "Soon", text: "Portable Windows version — no install" },
        ],
      },
    ],
    footerLink: { label: "See the full roadmap", href: "/download#roadmap" },
  },
  {
    version: "v1.0.0",
    date: "2026",
    latest: true,
    groups: [
      {
        heading: "Core",
        items: [
          { tag: "New", text: "Recurring timetable engine that auto-generates each day's tasks" },
          { tag: "New", text: "Dashboard with today's schedule, daily progress and a tomorrow preview" },
          { tag: "New", text: "Full calendar, history log and proof-of-work attachments" },
        ],
      },
      {
        heading: "Academics",
        items: [
          { tag: "New", text: "Subjects, marks & report cards with overall averages" },
          { tag: "New", text: "Target grades, insights and auto weekly summaries" },
          { tag: "New", text: "Exam countdowns with priority levels" },
        ],
      },
      {
        heading: "AI (bring your own key)",
        items: [
          { tag: "New", text: "AI Tutor — PDF → quizzes, flashcards and graded feedback" },
          { tag: "New", text: "AI Buddy chat and AI Notes with style presets" },
        ],
      },
      {
        heading: "Productivity & privacy",
        items: [
          { tag: "New", text: "Focus mode, ranks, XP and daily streaks" },
          { tag: "New", text: "Projects, resources, sticky notes, calculator and daily verse" },
          { tag: "New", text: "Fully local SQLite database — offline-first, no accounts" },
        ],
      },
    ],
  },
];

export default function Changelog() {
  return (
    <div className="relative">
      <div className="grain" />

      {/* Hero */}
      <section className="px-6 pt-40 pb-12">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-black/[0.06] dark:border-white/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.22em] shadow-sm">
            <Sparkles size={13} /> Changelog
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight leading-[0.9] mt-6">
            What&apos;s <span className="text-blue-600 dark:text-blue-400">new.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mt-6 max-w-xl mx-auto">
            Every notable change to Study Flow, newest first.
          </p>
        </ScrollReveal>
      </section>

      {/* Timeline */}
      <section className="px-6 pb-28">
        <div className="max-w-4xl mx-auto">
          {entries.map((e, i) => (
            <ScrollReveal key={e.version} delay={i * 0.05}>
              <div className="grid md:grid-cols-[160px_1fr] gap-6 md:gap-10 pb-10">
                {/* marker */}
                <div className="md:text-right md:pt-6">
                  <div className="inline-flex md:flex-col items-center md:items-end gap-2">
                    <span
                      className={`font-display text-2xl font-semibold tracking-tight ${
                        e.upcoming ? "text-slate-400 dark:text-slate-500" : "text-slate-900 dark:text-slate-50"
                      }`}
                    >
                      {e.version}
                    </span>
                    {e.latest && (
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] bg-blue-600 text-white px-2.5 py-1 rounded-full">
                        Latest
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">{e.date}</p>
                </div>

                {/* card */}
                <div
                  className={`relative bg-white dark:bg-slate-900 rounded-[1.75rem] p-8 md:p-9 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.3)] ${
                    e.upcoming ? "border-2 border-dashed border-black/10 dark:border-white/10" : "border border-black/[0.06] dark:border-white/10"
                  }`}
                >
                  <div className="space-y-7">
                    {e.groups.map((g) => (
                      <div key={g.heading}>
                        <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">{g.heading}</h3>
                        <ul className="space-y-2.5">
                          {g.items.map((it) => (
                            <li key={it.text} className="flex items-start gap-3">
                              <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-md mt-0.5 flex-shrink-0 ${tagStyle[it.tag]}`}>
                                {it.tag}
                              </span>
                              <span className="text-slate-600 dark:text-slate-300 leading-relaxed">{it.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  {e.footerLink && (
                    <Link
                      href={e.footerLink.href}
                      className="inline-flex items-center gap-2 mt-7 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                    >
                      {e.footerLink.label} <ArrowUpRight size={16} />
                    </Link>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
