"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  Database,
  Flame,
  Lock,
  Shield,
  Sparkles,
  Target,
  WifiOff,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Hero from "@/components/Hero";
import MacbookMockup from "@/components/MacbookMockup";
import ScrollReveal from "@/components/ScrollReveal";

const blobRadii = [
  "42% 58% 63% 37% / 41% 44% 56% 59%",
  "63% 37% 47% 53% / 38% 63% 37% 62%",
  "39% 61% 38% 62% / 58% 39% 61% 42%",
  "58% 42% 64% 36% / 49% 56% 44% 51%",
  "47% 53% 35% 65% / 64% 47% 53% 36%",
  "61% 39% 56% 44% / 36% 58% 42% 64%",
];

const features = [
  { icon: <Zap />, chip: "bg-blue-600", blob: "bg-blue-200", title: "Auto-built agenda", desc: "Your weekly templates turn into a precise daily to-do list at midnight. Wake up, execute." },
  { icon: <Target />, chip: "bg-emerald-500", blob: "bg-emerald-200", title: "Focus mode", desc: "Mute everything and lock into one study block at a time, with a live countdown." },
  { icon: <Flame />, chip: "bg-amber-500", blob: "bg-amber-200", title: "Streaks & XP", desc: "Every finished task feeds your streak and level — momentum you can actually see." },
  { icon: <CalendarDays />, chip: "bg-indigo-500", blob: "bg-indigo-200", title: "Workload heatmap", desc: "Spot exam clusters and deadline pile-ups weeks before they become an emergency." },
  { icon: <Sparkles />, chip: "bg-sky-500", blob: "bg-sky-200", title: "On-device AI", desc: "A private study assistant for notes, summaries and exam prep — nothing leaves your machine." },
  { icon: <Lock />, chip: "bg-slate-900", blob: "bg-slate-200", title: "Local & private", desc: "Everything lives in a local SQLite database. No login, no cloud, no tracking. Ever." },
];

const laptopPoints = [
  { t: "Set your timetable once", d: "Add subjects, times and deadlines as recurring templates — no code, no spreadsheets." },
  { t: "Wake up to a ready day", d: "Today's homework and revision are generated automatically, in time order." },
  { t: "Review your whole semester", d: "Calendar, history and insights keep every bit of effort in one place." },
];

export default function Home() {
  return (
    <div className="relative">
      <div className="grain" />

      {/* Full-screen hero */}
      <Hero />

      {/* Features with splash shapes */}
      <section id="features" className="px-6 py-28 lg:py-36">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="max-w-3xl">
            <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">Everything in one place</span>
            <h2 className="font-display text-5xl md:text-7xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight leading-[0.95] mt-5">
              Built for the way <br />
              you <span className="text-blue-600 dark:text-blue-400">actually study.</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mt-6">
              Far more than a to-do list — a complete, offline student workstation that keeps homework, revision and exams moving without the busywork.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={(i % 3) * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="relative h-full overflow-hidden bg-white dark:bg-slate-900 rounded-[1.9rem] p-8 border border-black/[0.06] dark:border-white/10 shadow-[0_28px_60px_-34px_rgba(15,23,42,0.3)]"
                >
                  {/* splash shape */}
                  <div
                    className={`absolute -top-10 -right-8 w-44 h-44 ${f.blob} opacity-70`}
                    style={{ borderRadius: blobRadii[i % blobRadii.length] }}
                  />
                  <div className="relative">
                    <div className={`w-16 h-16 ${f.chip} rounded-[1.3rem] flex items-center justify-center text-white mb-7 shadow-[0_14px_30px_-10px_rgba(15,23,42,0.5)]`}>
                      {f.icon}
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-2">{f.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Laptop mockup + text */}
      <section id="desktop" className="px-6 py-20 lg:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal direction="right">
            <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">On the desktop</span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight leading-[0.95] mt-5 mb-8">
              A workstation that <span className="text-blue-600 dark:text-blue-400">keeps up.</span>
            </h2>
            <div className="space-y-7">
              {laptopPoints.map((p) => (
                <div key={p.t} className="flex gap-4">
                  <span className="mt-1 w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-[0_8px_20px_-6px_rgba(37,99,235,0.7)]">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-50 mb-1">{p.t}</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/download"
              className="group inline-flex items-center gap-3 mt-10 bg-slate-900 text-white pl-8 pr-5 py-4 rounded-2xl font-semibold hover:bg-slate-800 transition-colors"
            >
              Get the desktop app
              <span className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="left" className="relative">
            <div className="absolute -inset-6 bg-blue-300/30 rounded-[3rem] -z-10" style={{ borderRadius: blobRadii[2] }} />
            <MacbookMockup />
          </ScrollReveal>
        </div>
      </section>

      {/* Cool shape with text inside */}
      <section id="privacy" className="px-6 py-20 lg:py-28 scroll-mt-24">
        <ScrollReveal className="max-w-6xl mx-auto">
          <div
            className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-8 py-24 md:px-20 md:py-32 text-center"
            style={{ borderRadius: "44% 56% 70% 30% / 38% 38% 62% 62%" }}
          >
            {/* floating splash accents */}
            <div className="absolute top-10 left-12 w-24 h-24 bg-white/10 rounded-[40%_60%_55%_45%/55%_45%_60%_40%]" />
            <div className="absolute bottom-12 right-16 w-32 h-32 bg-white/10 rounded-[60%_40%_45%_55%/45%_55%_50%_50%]" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-7">
              <span className="inline-flex items-center gap-2 text-blue-100 text-[11px] font-bold uppercase tracking-[0.3em]">
                <Shield size={14} /> Local-first by design
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[0.98]">
                Your data never <br /> leaves your device.
              </h2>
              <p className="text-lg md:text-xl text-blue-50/90 leading-relaxed">
                No accounts, no servers, no sync you didn&apos;t ask for. Study Flow stores everything in a local, encrypted SQLite database — so your notes, grades and schedule stay yours alone.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold"><WifiOff size={15} /> Works offline</span>
                <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold"><Database size={15} /> SQLite + Prisma</span>
                <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold"><Lock size={15} /> Encrypted</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Closing CTA */}
      <section className="px-6 pb-32 pt-10 text-center">
        <ScrollReveal className="max-w-3xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight leading-[0.95]">
            Ready for a <span className="text-blue-600 dark:text-blue-400">calmer</span> semester?
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mt-6 max-w-xl mx-auto">
            Private, offline, and free. Download Study Flow and turn your timetable into a daily rhythm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/download"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-slate-900 px-12 py-5 text-lg font-semibold text-white shadow-[0_24px_50px_-16px_rgba(0,0,0,0.6)] transition-transform hover:scale-[1.02] active:scale-95"
            >
              <span className="relative z-10">Get started</span>
              <span className="absolute right-0 bottom-0 w-0 h-0 border-l-[34px] border-l-transparent border-b-[34px] border-b-blue-600" />
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center gap-2 border border-black/10 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-slate-50 transition-colors"
            >
              <BookOpen size={20} />
              Read the docs
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
