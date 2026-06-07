"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Book,
  BookOpen,
  Brain,
  BrainCircuit,
  Calculator,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cpu,
  Database,
  Download,
  FileText,
  Flame,
  FolderOpen,
  GraduationCap,
  KeyRound,
  Layers,
  LayoutGrid,
  Library,
  Lock,
  Sparkles,
  StickyNote,
  Target,
  TrendingUp,
  Trophy,
  WifiOff,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Small building blocks                                             */
/* ------------------------------------------------------------------ */

const blobRadii = [
  "42% 58% 63% 37% / 41% 44% 56% 59%",
  "63% 37% 47% 53% / 38% 63% 37% 62%",
  "39% 61% 38% 62% / 58% 39% 61% 42%",
  "58% 42% 64% 36% / 49% 56% 44% 51%",
];

const chipColors: Record<string, string> = {
  blue: "bg-blue-600",
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
  indigo: "bg-indigo-500",
  sky: "bg-sky-500",
  rose: "bg-rose-500",
  dark: "bg-slate-900",
  violet: "bg-violet-500",
};
const blobColors: Record<string, string> = {
  blue: "bg-blue-200",
  emerald: "bg-emerald-200",
  amber: "bg-amber-200",
  indigo: "bg-indigo-200",
  sky: "bg-sky-200",
  rose: "bg-rose-200",
  dark: "bg-slate-200",
  violet: "bg-violet-200",
};

function Feature({
  icon,
  color = "blue",
  title,
  children,
  i = 0,
}: {
  icon: ReactNode;
  color?: keyof typeof chipColors;
  title: string;
  children: ReactNode;
  i?: number;
}) {
  return (
    <div className="relative h-full overflow-hidden bg-white dark:bg-slate-900 rounded-[1.5rem] p-7 border border-black/[0.06] dark:border-white/10 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.3)]">
      <div
        className={`absolute -top-8 -right-6 w-32 h-32 ${blobColors[color]} opacity-60`}
        style={{ borderRadius: blobRadii[i % blobRadii.length] }}
      />
      <div className="relative">
        <div className={`w-12 h-12 ${chipColors[color]} rounded-2xl flex items-center justify-center text-white mb-5 shadow-[0_12px_26px_-12px_rgba(15,23,42,0.6)]`}>
          {icon}
        </div>
        <h4 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-1.5">{title}</h4>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[15px]">{children}</p>
      </div>
    </div>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-5">
      <span className="font-display text-2xl font-semibold text-white bg-slate-900 w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0">
        {n}
      </span>
      <div className="pt-1">
        <h4 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-50 mb-1">{title}</h4>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function Callout({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 bg-blue-600/[0.06] border border-blue-600/15 rounded-[1.5rem] p-6">
      <span className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">{icon}</span>
      <div>
        <p className="font-display font-semibold text-slate-900 dark:text-slate-50 mb-1">{title}</p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">{children}</p>
      </div>
    </div>
  );
}

function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-black/10 dark:border-white/10 shadow-sm text-sm font-semibold text-slate-700 dark:text-slate-200">
      {children}
    </kbd>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 pt-4">
      <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">{eyebrow}</span>
      <h2 className="font-display text-4xl md:text-5xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight leading-[1.0] mt-4 mb-7">{title}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "install", label: "Install & setup" },
  { id: "dashboard", label: "The dashboard" },
  { id: "timetable", label: "Timetable engine" },
  { id: "calendar", label: "Calendar & history" },
  { id: "academics", label: "Subjects, marks & goals" },
  { id: "ai", label: "AI tools" },
  { id: "focus", label: "Focus & gamification" },
  { id: "tools", label: "More tools" },
  { id: "shortcuts", label: "Shortcuts" },
  { id: "privacy", label: "Privacy & data" },
  { id: "faq", label: "FAQ" },
];

export default function Docs() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="grain" />

      {/* Header */}
      <section className="px-6 pt-36 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.5, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-black/[0.06] dark:border-white/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.22em] shadow-sm">
              <BookOpen size={13} /> Documentation
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight leading-[0.9] mt-6">
              How Study <br /> Flow <span className="text-blue-600 dark:text-blue-400">works.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mt-6">
              Everything you need to turn a weekly timetable into a daily rhythm — from the recurring task engine to the built-in AI study tools. Private, offline, and entirely yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body: sticky TOC + content */}
      <div className="max-w-7xl mx-auto px-6 pb-32 grid lg:grid-cols-[260px_1fr] gap-12 lg:gap-16">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500 px-4 mb-3">On this page</p>
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  active === n.id ? "bg-slate-900 text-white" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-black/[0.04]"
                }`}
              >
                {n.label}
              </a>
            ))}
            <div className="pt-6 px-4">
              <Link
                href="/download"
                className="group inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-blue-500 transition-colors w-full justify-center"
              >
                <Download size={16} /> Download the app
              </Link>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="min-w-0 space-y-24">
          {/* Overview */}
          <Section id="overview" eyebrow="Overview" title="A complete student workstation.">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Study Flow is a local-first desktop and web app for students. It turns a recurring weekly timetable
              into automatically-generated daily tasks, then layers a full academic workspace on top — exams, grades,
              homework, focus sessions, projects, and a private AI study assistant. There is no cloud and no account on
              a server: everything lives on your machine.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <Feature i={0} color="blue" icon={<Zap size={20} />} title="Automatic daily tasks">
                Define your timetable once; the app generates each day&apos;s homework and revision for you.
              </Feature>
              <Feature i={1} color="indigo" icon={<Brain size={20} />} title="Built-in AI tutor">
                Turn a PDF into quizzes, flashcards and graded feedback using your own API key.
              </Feature>
              <Feature i={2} color="emerald" icon={<TrendingUp size={20} />} title="Grades & insights">
                Track report cards, set target grades, and see where your time actually goes.
              </Feature>
              <Feature i={3} color="amber" icon={<Flame size={20} />} title="Streaks & XP">
                Earn experience, level up, and keep a daily streak that rewards consistency.
              </Feature>
              <Feature i={0} color="violet" icon={<Zap size={20} />} title="Focus mode">
                Distraction-free study sessions with a timer that logs your focused minutes.
              </Feature>
              <Feature i={1} color="dark" icon={<Lock size={20} />} title="Local & private">
                A local SQLite database. No login to our servers, no tracking, works fully offline.
              </Feature>
            </div>
          </Section>

          {/* Install */}
          <Section id="install" eyebrow="Get started" title="Install & first run.">
            <div className="space-y-7">
              <Step n="1" title="Download & install">
                Grab the installer from the{" "}
                <Link href="/download" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  download page
                </Link>{" "}
                and run it. Study Flow ships as a desktop app (and an installable PWA), so it lives in your dock like
                any native program.
              </Step>
              <Step n="2" title="Create your local account">
                On first launch you set a username and password. This unlocks the local database on your device — it is
                never sent anywhere. Your name powers the personalised greeting on the dashboard.
              </Step>
              <Step n="3" title="Add your subjects & timetable">
                Add your subjects, then build your recurring weekly schedule under <strong>Timetable</strong>. Each entry
                becomes a template the engine uses to generate daily tasks (see below).
              </Step>
              <Step n="4" title="Connect AI (optional)">
                To use the AI Tutor, AI Buddy and AI Notes, paste a free Google Gemini or OpenAI key in{" "}
                <strong>Settings</strong>. Everything else works without it.
              </Step>
            </div>
            <Callout icon={<WifiOff size={18} />} title="Works fully offline">
              After install, Study Flow needs no internet connection for its core features — your schedule, tasks,
              grades and notes are all stored and computed locally.
            </Callout>
          </Section>

          {/* Dashboard */}
          <Section id="dashboard" eyebrow="Daily use" title="The dashboard.">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              The dashboard is your command center and the default landing screen. It opens to a personalised greeting,
              the current date and time, and a daily verse for a little motivation.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <Feature i={0} color="blue" icon={<Clock size={20} />} title="Today, in order">
                A time-ordered timeline of everything due today. Homework shows a solid border; revision shows a dashed
                accent border — so you know your mode at a glance.
              </Feature>
              <Feature i={1} color="emerald" icon={<CheckCircle2 size={20} />} title="One-tap complete">
                Tick a task to mark it done. Completing work feeds your streak and XP, and moves it into History.
              </Feature>
              <Feature i={2} color="indigo" icon={<Activity size={20} />} title="Daily progress">
                A progress widget shows completed vs. pending for the day, plus a &ldquo;tomorrow at a glance&rdquo; peek
                so nothing sneaks up on you.
              </Feature>
              <Feature i={3} color="amber" icon={<Zap size={20} />} title="Live focus">
                If a study block is active right now, a live banner surfaces it so you can jump straight into focus mode.
              </Feature>
            </div>
          </Section>

          {/* Timetable engine */}
          <Section id="timetable" eyebrow="The engine" title="Recurring timetable, automated.">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Study Flow behaves like a recurring timetable engine, not a static to-do list. You define{" "}
              <strong>schedule templates</strong> once and the app generates dated task instances automatically.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <Feature i={0} color="blue" icon={<LayoutGrid size={20} />} title="Templates">
                Each template holds a day of week, subject, start &amp; end time, deadline day, and a type —{" "}
                <strong>HOMEWORK</strong> or <strong>REVISION</strong>.
              </Feature>
              <Feature i={1} color="violet" icon={<Zap size={20} />} title="Auto-generation">
                When the dashboard loads it checks today&apos;s weekday, finds matching templates, and creates that
                day&apos;s tasks if they don&apos;t already exist — no duplicates.
              </Feature>
              <Feature i={2} color="emerald" icon={<Layers size={20} />} title="Edit without code">
                Manage your whole semester from the <strong>Manage</strong> and <strong>Timetable</strong> pages — add,
                edit or delete templates as your classes change.
              </Feature>
              <Feature i={3} color="amber" icon={<CheckCircle2 size={20} />} title="One-off tasks">
                Need a single extra task? Add a one-off that lives alongside generated ones and won&apos;t regenerate if
                you remove it.
              </Feature>
            </div>
            <Callout icon={<Sparkles size={18} />} title="Homework vs revision">
              The two task types are colour-coded everywhere — dashboard, calendar, history and management — so your eye
              instantly separates &ldquo;work to hand in&rdquo; from &ldquo;study to review.&rdquo;
            </Callout>
          </Section>

          {/* Calendar & history */}
          <Section id="calendar" eyebrow="Look back & ahead" title="Calendar & history.">
            <div className="grid sm:grid-cols-2 gap-5">
              <Feature i={0} color="blue" icon={<CalendarDays size={20} />} title="Month calendar">
                A full month grid with colour-coded dots for days that contain homework or revision. Click any day to
                open its tasks, times and deadlines.
              </Feature>
              <Feature i={1} color="emerald" icon={<CheckCircle2 size={20} />} title="History log">
                Every completed task, filterable by last 7 days, last 30 days, or all time — a satisfying record of the
                work you&apos;ve put in.
              </Feature>
              <Feature i={2} color="indigo" icon={<FileText size={20} />} title="Proof of work">
                Attach a short description or a PDF as proof when you complete a task, so your history doubles as a
                portfolio.
              </Feature>
              <Feature i={3} color="amber" icon={<Target size={20} />} title="Marked days">
                Mark important days so they stand out on the calendar at a glance.
              </Feature>
            </div>
          </Section>

          {/* Academics */}
          <Section id="academics" eyebrow="Academics" title="Subjects, marks & goals.">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Keep the academic side of school in one place — your subjects, your results, and the targets you&apos;re
              chasing this term.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <Feature i={0} color="blue" icon={<Library size={20} />} title="Subjects">
                Maintain your subject list; it powers grouping across resources, notes, goals and the tutor.
              </Feature>
              <Feature i={1} color="emerald" icon={<TrendingUp size={20} />} title="Marks & report cards">
                Record report cards per term with subject grades, an overall average, and AI feedback that flags where
                to focus.
              </Feature>
              <Feature i={2} color="rose" icon={<Target size={20} />} title="Goals">
                Set a target grade for each subject and track how your real marks compare.
              </Feature>
              <Feature i={3} color="indigo" icon={<Activity size={20} />} title="Insights">
                Visual analytics of your study activity, completion rates and momentum over time.
              </Feature>
              <Feature i={0} color="sky" icon={<FileText size={20} />} title="Weekly summaries">
                Auto-generated weekly reports with a grade, total focused minutes and a per-subject breakdown.
              </Feature>
              <Feature i={1} color="amber" icon={<GraduationCap size={20} />} title="Exams">
                A countdown to every upcoming exam, with priority levels so the big ones stay front and centre.
              </Feature>
            </div>
          </Section>

          {/* AI tools */}
          <Section id="ai" eyebrow="Intelligence" title="AI study tools.">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Study Flow includes a private AI layer. It runs on <strong>your own</strong> Google Gemini or OpenAI
              key — your notes and questions go directly from your machine to the provider you chose, with nothing
              stored on our side.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <Feature i={0} color="indigo" icon={<Brain size={20} />} title="AI Tutor">
                Upload a PDF and get auto-generated questions, flashcards and exercises. Take graded quizzes, receive
                per-answer feedback, and track your understanding from Beginner to Master with spaced review.
              </Feature>
              <Feature i={1} color="blue" icon={<BrainCircuit size={20} />} title="AI Buddy">
                A conversational study assistant with saved chat sessions — ask questions, get explanations, and keep the
                history per topic.
              </Feature>
              <Feature i={2} color="violet" icon={<Sparkles size={20} />} title="AI Notes">
                Turn an uploaded document into clean Markdown notes using style presets like Detailed, Summary or Q&amp;A.
              </Feature>
            </div>
            <Callout icon={<KeyRound size={18} />} title="Connecting a key">
              Create a free key in Google AI Studio (Gemini) or OpenAI, open <strong>Settings</strong>, paste it in, and
              choose your primary provider. You can switch providers any time — the rest of the app keeps working without
              a key.
            </Callout>
          </Section>

          {/* Focus & gamification */}
          <Section id="focus" eyebrow="Momentum" title="Focus & gamification.">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <Feature i={0} color="violet" icon={<Zap size={20} />} title="Focus mode">
                A distraction-free session with a timer. Every session logs your focused minutes toward your totals.
              </Feature>
              <Feature i={1} color="amber" icon={<Flame size={20} />} title="Streaks">
                Show up daily to grow your current streak; your longest streak is kept as a badge of honour.
              </Feature>
              <Feature i={2} color="blue" icon={<Trophy size={20} />} title="Ranks & XP">
                Completing tasks and focusing earns XP and levels. The Ranks page shows your badge and a roadmap to the
                next tier.
              </Feature>
            </div>
          </Section>

          {/* More tools */}
          <Section id="tools" eyebrow="The rest of the kit" title="More tools.">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <Feature i={0} color="blue" icon={<BookOpen size={20} />} title="Homeworks">
                A dedicated assignment tracker with due dates, planned dates, completion and proof attachments.
              </Feature>
              <Feature i={1} color="emerald" icon={<FolderOpen size={20} />} title="Projects">
                Track longer projects with status, a progress bar and attached documents.
              </Feature>
              <Feature i={2} color="indigo" icon={<Layers size={20} />} title="Resources">
                Save links and files per subject so your references are always one click away.
              </Feature>
              <Feature i={3} color="amber" icon={<StickyNote size={20} />} title="Sticky notes">
                A draggable, colourful sticky-note board for quick thoughts and reminders.
              </Feature>
              <Feature i={0} color="sky" icon={<GraduationCap size={20} />} title="School timetable">
                A view of your in-person school timetable, separate from your study blocks.
              </Feature>
              <Feature i={1} color="rose" icon={<Book size={20} />} title="Bible & daily verse">
                A daily verse for focus and motivation, surfaced on the dashboard and its own page.
              </Feature>
              <Feature i={2} color="dark" icon={<Calculator size={20} />} title="Calculator">
                A built-in calculator for quick maths without leaving the app.
              </Feature>
            </div>
          </Section>

          {/* Shortcuts */}
          <Section id="shortcuts" eyebrow="Power user" title="Shortcuts & command menu.">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Move at speed with keyboard shortcuts and a command menu that jumps to any tool, homework, tutor module,
              note or project.
            </p>
            <div className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-black/[0.06] dark:border-white/10 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.3)] divide-y divide-black/5">
              {[
                { keys: ["Ctrl/⌘", "E"], label: "Open the command menu" },
                { keys: ["Alt", "D"], label: "Go to the dashboard" },
                { keys: ["Alt", "F"], label: "Open focus mode" },
                { keys: ["Alt", "C"], label: "Open the calculator" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between px-6 py-4">
                  <span className="text-slate-600 dark:text-slate-300 font-medium">{s.label}</span>
                  <span className="flex items-center gap-1.5">
                    {s.keys.map((k, idx) => (
                      <span key={k} className="flex items-center gap-1.5">
                        {idx > 0 && <span className="text-slate-300">+</span>}
                        <Kbd>{k}</Kbd>
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          {/* Privacy */}
          <Section id="privacy" eyebrow="Your data" title="Privacy & how it's built.">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Study Flow is local-first by design. Your schedule, grades, notes and chats live in a single SQLite
              database on your device — there is no account on our servers and nothing to leak.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <Feature i={0} color="dark" icon={<Database size={20} />} title="SQLite + Prisma">
                A typed, local database via Prisma ORM. Your data is a file you control, easy to back up.
              </Feature>
              <Feature i={1} color="blue" icon={<WifiOff size={20} />} title="Offline-first">
                Core features need no connection. Only your own AI calls leave the device, to the provider you chose.
              </Feature>
              <Feature i={2} color="indigo" icon={<Cpu size={20} />} title="Modern stack">
                Built with Next.js (App Router), React, TypeScript, Tailwind CSS and shadcn/ui, packaged for desktop.
              </Feature>
            </div>
          </Section>

          {/* FAQ */}
          <Section id="faq" eyebrow="Questions" title="FAQ.">
            <div className="space-y-4">
              {[
                { q: "Is Study Flow free?", a: "Yes — the core app is free to download and use forever, and it's local-first so there are no subscriptions." },
                { q: "Do I need an account or internet?", a: "You create a local account on your device to protect your data, but there's no server sign-up and the app works fully offline." },
                { q: "Do I have to use the AI features?", a: "No. They're optional and only activate when you add your own Gemini or OpenAI key in Settings. Everything else works without one." },
                { q: "Where is my data stored?", a: "In a local SQLite database on your machine. You can back it up by copying the database file." },
                { q: "How do daily tasks appear?", a: "When the dashboard loads, the engine reads your weekly templates and generates that day's tasks automatically, avoiding duplicates." },
              ].map((f) => (
                <details key={f.q} className="group bg-white dark:bg-slate-900 rounded-[1.25rem] border border-black/[0.06] dark:border-white/10 shadow-[0_24px_50px_-40px_rgba(15,23,42,0.3)] p-6 open:shadow-[0_24px_50px_-30px_rgba(15,23,42,0.3)]">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-display text-lg font-semibold text-slate-900 dark:text-slate-50">
                    {f.q}
                    <ChevronRight size={18} className="text-slate-400 dark:text-slate-500 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed mt-3 text-[15px]">{f.a}</p>
                </details>
              ))}
            </div>

            {/* closing CTA */}
            <div className="mt-12 relative overflow-hidden rounded-[2rem] bg-slate-900 text-white p-10 md:p-14 text-center">
              <div className="absolute -top-24 -right-16 w-80 h-80 bg-blue-600/30 blur-[120px] rounded-full" />
              <div className="relative z-10 space-y-6">
                <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Ready to try it?</h3>
                <p className="text-slate-300 max-w-md mx-auto leading-relaxed">
                  Download Study Flow and turn your timetable into a calmer, more consistent semester.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/download" className="btn-on-dark inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold transition-colors">
                    <Download size={18} /> Download free
                  </Link>
                  <Link href="/support" className="inline-flex items-center justify-center gap-2 border border-white/15 px-8 py-4 rounded-2xl font-semibold hover:bg-white/5 transition-colors">
                    Get support
                  </Link>
                </div>
              </div>
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
}
