import {
  ArrowUpRight,
  BookOpen,
  Database,
  HeartHandshake,
  Layers,
  Quote,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const blobRadii = [
  "42% 58% 63% 37% / 41% 44% 56% 59%",
  "63% 37% 47% 53% / 38% 63% 37% 62%",
  "39% 61% 38% 62% / 58% 39% 61% 42%",
  "58% 42% 64% 36% / 49% 56% 44% 51%",
];

const values = [
  {
    icon: <Database size={20} />,
    chip: "bg-slate-900",
    blob: "bg-slate-200",
    title: "Local-first, always",
    desc: "Your schedule, grades and notes live in a SQLite file on your device. No servers, no accounts to breach, nothing to leak.",
  },
  {
    icon: <Zap size={20} />,
    chip: "bg-blue-600",
    blob: "bg-blue-200",
    title: "Automate the busywork",
    desc: "Set your timetable once and the app builds each day for you — so your energy goes into studying, not planning it.",
  },
  {
    icon: <Layers size={20} />,
    chip: "bg-emerald-500",
    blob: "bg-emerald-200",
    title: "One calm workspace",
    desc: "Tasks, exams, grades, focus, notes and a private AI tutor in a single place — instead of twelve open tabs.",
  },
  {
    icon: <HeartHandshake size={20} />,
    chip: "bg-amber-500",
    blob: "bg-amber-200",
    title: "Yours, free, forever",
    desc: "No subscriptions, no upsells, no tracking. Download Study Flow and it's simply yours to keep.",
  },
];

const stats = [
  { v: "20+", l: "Built-in study tools" },
  { v: "100%", l: "Works offline" },
  { v: "0", l: "Cloud accounts" },
  { v: "1", l: "Local database you own" },
];

export default function About() {
  return (
    <div className="relative">
      <div className="grain" />

      {/* Hero */}
      <section className="px-6 pt-40 pb-16">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/[0.06] text-blue-600 text-[10px] font-bold uppercase tracking-[0.22em] shadow-sm">
              <Sparkles size={13} /> About Study Flow
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-semibold text-slate-900 tracking-tight leading-[0.9] mt-6">
              Study software <br />
              that gets <span className="text-blue-600">out of your way.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed mt-7 max-w-2xl">
              Study Flow is a private, local-first workstation for students. It turns a weekly timetable into an
              automatic daily plan — then wraps every other part of school around it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story + quote card */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal direction="right">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.3em]">Why we built it</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.0] mt-4 mb-7">
              Born from a messy routine.
            </h2>
            <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
              <p>
                Study Flow started as one student&apos;s fix for a scattered week — homework in one app, a timetable on
                paper, revision held together by memory. Nothing talked to each other, and the planning itself ate the
                time meant for actually studying.
              </p>
              <p>
                So we built a single workstation that generates your day from a recurring timetable, then folds in exams,
                grades, focus sessions, notes and a private AI tutor. It runs entirely on your machine, answers to no
                server, and is free to use.
              </p>
            </div>
            <Link
              href="/docs"
              className="group inline-flex items-center gap-3 mt-9 bg-slate-900 text-white pl-8 pr-5 py-4 rounded-2xl font-semibold hover:bg-slate-800 transition-colors"
            >
              See how it works
              <span className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="left" className="relative">
            <div className="absolute -inset-5 bg-blue-300/30 -z-10" style={{ borderRadius: blobRadii[1] }} />
            <div className="relative bg-white rounded-[2rem] border border-black/[0.06] shadow-[0_40px_80px_-40px_rgba(15,23,42,0.4)] p-10 md:p-12">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-7">
                <Quote size={22} />
              </div>
              <p className="font-display text-2xl md:text-3xl font-semibold text-slate-900 leading-snug tracking-tight">
                &ldquo;Whatever your hand finds to do, do it with all your might.&rdquo;
              </p>
              <p className="text-slate-400 font-semibold mt-5 text-sm uppercase tracking-[0.18em]">Ecclesiastes 9:10</p>
              <p className="text-slate-500 leading-relaxed mt-6">
                It&apos;s the verse that greets you on the dashboard every morning — and the spirit the whole app is
                built around.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="max-w-2xl mb-14">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.3em]">What we believe</span>
            <h2 className="font-display text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[0.98] mt-4">
              Principles, not <span className="text-blue-600">features.</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={(i % 2) * 0.08}>
                <div className="relative h-full overflow-hidden bg-white rounded-[1.75rem] p-8 border border-black/[0.06] shadow-[0_28px_60px_-34px_rgba(15,23,42,0.3)]">
                  <div
                    className={`absolute -top-10 -right-8 w-40 h-40 ${v.blob} opacity-60`}
                    style={{ borderRadius: blobRadii[i % blobRadii.length] }}
                  />
                  <div className="relative">
                    <div className={`w-14 h-14 ${v.chip} rounded-2xl flex items-center justify-center text-white mb-6 shadow-[0_14px_30px_-12px_rgba(15,23,42,0.55)]`}>
                      {v.icon}
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-slate-900 tracking-tight mb-2">{v.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="px-6 py-16 lg:py-20">
        <ScrollReveal className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2rem] border border-black/[0.06] shadow-[0_28px_60px_-40px_rgba(15,23,42,0.3)] grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-black/[0.06]">
            {stats.map((s) => (
              <div key={s.l} className="p-8 lg:p-10 text-center">
                <p className="font-display text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight">{s.v}</p>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-3">{s.l}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 lg:py-24">
        <ScrollReveal className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 text-white px-8 py-20 md:p-24 text-center">
            <div className="absolute -top-28 -right-20 w-[460px] h-[460px] bg-blue-600/30 blur-[120px] rounded-full" />
            <div className="absolute -bottom-28 -left-20 w-[460px] h-[460px] bg-indigo-500/20 blur-[120px] rounded-full" />
            <div className="relative z-10 space-y-8">
              <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[0.98]">
                Make this semester <br /> the <span className="text-blue-400">calm one.</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-xl mx-auto leading-relaxed">
                Private, offline, and free. Download Study Flow and turn your timetable into a daily rhythm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/download"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-9 py-5 rounded-2xl text-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Download free
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white px-9 py-5 rounded-2xl text-lg font-semibold hover:bg-white/5 transition-colors"
                >
                  <BookOpen size={20} />
                  Read the docs
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
