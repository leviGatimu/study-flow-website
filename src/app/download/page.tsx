import {
  Apple,
  ArrowUpRight,
  BookOpen,
  Check,
  CircleDashed,
  Clock,
  Download,
  HardDrive,
  KeyRound,
  LayoutGrid,
  Lock,
  Monitor,
  Terminal,
  UserPlus,
  WifiOff,
} from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const blobRadii = [
  "42% 58% 63% 37% / 41% 44% 56% 59%",
  "63% 37% 47% 53% / 38% 63% 37% 62%",
  "39% 61% 38% 62% / 58% 39% 61% 42%",
  "58% 42% 64% 36% / 49% 56% 44% 51%",
];

const platforms = [
  {
    name: "Windows",
    sub: "Windows 10 / 11 · 64-bit",
    type: ".exe installer",
    icon: <Monitor size={24} />,
    chip: "bg-blue-600",
    blob: "bg-blue-200",
    href: "https://media.githubusercontent.com/media/leviGatimu/study-flow-website/main/public/StudyTrackerSetup.exe",
    cta: "Download for Windows",
    available: true,
  },
  {
    name: "Portable",
    sub: "Windows · no install",
    type: ".zip archive",
    icon: <HardDrive size={24} />,
    chip: "bg-slate-900",
    blob: "bg-slate-200",
    href: "#",
    cta: "Coming soon",
    available: false,
  },
  {
    name: "macOS",
    sub: "Apple Silicon & Intel",
    type: ".dmg",
    icon: <Apple size={24} />,
    chip: "bg-indigo-500",
    blob: "bg-indigo-200",
    href: "#",
    cta: "Coming soon",
    available: false,
  },
  {
    name: "Linux",
    sub: "Debian, Fedora & more",
    type: ".AppImage",
    icon: <Terminal size={24} />,
    chip: "bg-emerald-500",
    blob: "bg-emerald-200",
    href: "#",
    cta: "Coming soon",
    available: false,
  },
];

const steps = [
  { icon: <UserPlus size={18} />, t: "Create your local account", d: "Pick a username and password — it unlocks the private database that lives on your device." },
  { icon: <LayoutGrid size={18} />, t: "Build your timetable", d: "Add your subjects and recurring study blocks; the app generates your daily tasks automatically." },
  { icon: <KeyRound size={18} />, t: "Connect AI (optional)", d: "Paste a free Gemini or OpenAI key in Settings to switch on the AI tutor, buddy and notes." },
];

const requirements = [
  { icon: <Monitor size={18} />, t: "Windows 10 or 11", d: "64-bit" },
  { icon: <HardDrive size={18} />, t: "~400 MB free disk", d: "for the app + your local database" },
  { icon: <WifiOff size={18} />, t: "No internet required", d: "only optional AI calls go online" },
  { icon: <Lock size={18} />, t: "No account on our servers", d: "everything stays on your machine" },
];

const roadmap = [
  {
    status: "Shipped",
    dot: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
    icon: <Check size={15} className="text-emerald-500" />,
    items: [
      "Windows 10/11 desktop app",
      "Recurring timetable engine",
      "AI tutor, buddy & notes",
      "Focus mode, ranks & streaks",
      "Marks, goals & insights",
    ],
  },
  {
    status: "In progress",
    dot: "bg-blue-500",
    badge: "bg-blue-100 text-blue-700",
    icon: <CircleDashed size={15} className="text-blue-500" />,
    items: ["macOS build (Silicon & Intel)", "Portable Windows build"],
  },
  {
    status: "Planned",
    dot: "bg-amber-500",
    badge: "bg-amber-100 text-amber-700",
    icon: <Clock size={15} className="text-amber-500" />,
    items: ["Linux build (AppImage)", "Mobile companion view", "More themes & accent colours"],
  },
];

export default function DownloadPage() {
  return (
    <div className="relative">
      <div className="grain" />

      {/* Hero */}
      <section className="px-6 pt-40 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/[0.06] text-blue-600 text-[10px] font-bold uppercase tracking-[0.22em] shadow-sm">
              <Download size={13} /> Download · v1.0.0
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-semibold text-slate-900 tracking-tight leading-[0.9] mt-6">
              Get <span className="text-blue-600">Study Flow.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mt-6 max-w-xl mx-auto">
              Free, offline, and entirely private. Install it once and turn your weekly timetable into a daily rhythm.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4">
              <a
                href="https://media.githubusercontent.com/media/leviGatimu/study-flow-website/main/public/StudyTrackerSetup.exe"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-slate-900 px-12 py-5 text-lg font-semibold text-white shadow-[0_24px_50px_-16px_rgba(0,0,0,0.6)] transition-transform hover:scale-[1.02] active:scale-95"
              >
                <Download size={20} />
                <span className="relative z-10">Download for Windows</span>
                <span className="absolute right-0 bottom-0 w-0 h-0 border-l-[34px] border-l-transparent border-b-[34px] border-b-blue-600" />
              </a>
              <p className="text-sm text-slate-400 font-medium">Windows 10/11 · 64-bit · .exe (~388 MB) · Free forever</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Platforms */}
      <section className="px-6 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Choose your platform</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((p, i) => (
              <ScrollReveal key={p.name} delay={(i % 4) * 0.06}>
                <div
                  className={`relative h-full overflow-hidden bg-white rounded-[1.75rem] p-7 border border-black/[0.06] shadow-[0_28px_60px_-34px_rgba(15,23,42,0.3)] flex flex-col ${
                    p.available ? "" : "opacity-80"
                  }`}
                >
                  <div
                    className={`absolute -top-9 -right-7 w-36 h-36 ${p.blob} opacity-60`}
                    style={{ borderRadius: blobRadii[i % blobRadii.length] }}
                  />
                  <div className="relative flex flex-col h-full">
                    <div className={`w-14 h-14 ${p.chip} rounded-2xl flex items-center justify-center text-white mb-6 shadow-[0_14px_30px_-12px_rgba(15,23,42,0.55)]`}>
                      {p.icon}
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-slate-900 tracking-tight">{p.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">{p.sub}</p>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.18em] mt-1.5 flex-grow">{p.type}</p>

                    {p.available ? (
                      <a
                        href={p.href}
                        className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-3.5 rounded-2xl font-semibold hover:bg-blue-500 transition-colors"
                      >
                        <Download size={16} />
                        Download
                      </a>
                    ) : (
                      <span className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-black/[0.04] text-slate-400 py-3.5 rounded-2xl font-semibold cursor-not-allowed border border-black/[0.04]">
                        Coming soon
                      </span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* After install + requirements */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* steps */}
          <ScrollReveal direction="right">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.3em]">After you install</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.0] mt-4 mb-9">
              Up and running <span className="text-blue-600">in minutes.</span>
            </h2>
            <div className="space-y-7">
              {steps.map((s, i) => (
                <div key={s.t} className="flex gap-5">
                  <span className="relative w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
                    {s.icon}
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </span>
                  <div className="pt-0.5">
                    <h3 className="font-display text-lg font-semibold text-slate-900 mb-1">{s.t}</h3>
                    <p className="text-slate-500 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/docs" className="inline-flex items-center gap-2 mt-9 text-blue-600 font-semibold hover:gap-3 transition-all">
              Read the full setup guide <ArrowUpRight size={18} />
            </Link>
          </ScrollReveal>

          {/* requirements card */}
          <ScrollReveal direction="left" className="relative">
            <div className="absolute -inset-5 bg-blue-300/25 -z-10" style={{ borderRadius: blobRadii[3] }} />
            <div className="relative bg-white rounded-[2rem] border border-black/[0.06] shadow-[0_40px_80px_-40px_rgba(15,23,42,0.4)] p-9 md:p-11">
              <h3 className="font-display text-2xl font-semibold text-slate-900 tracking-tight mb-7">System requirements</h3>
              <div className="space-y-5">
                {requirements.map((r) => (
                  <div key={r.t} className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-blue-600/[0.08] text-blue-600 flex items-center justify-center flex-shrink-0">
                      {r.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 leading-tight">{r.t}</p>
                      <p className="text-sm text-slate-500">{r.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center gap-3 text-slate-500">
                <Check size={16} className="text-emerald-500" />
                <span className="text-sm font-medium">Free forever — no subscription, no account, no tracking.</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="px-6 py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.3em]">The plan</span>
            <h2 className="font-display text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[0.98] mt-4">
              Where Study Flow is <span className="text-blue-600">headed.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mt-5">
              Built in the open. Here&apos;s what&apos;s shipped, what we&apos;re working on, and what&apos;s coming next.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {roadmap.map((col, i) => (
              <ScrollReveal key={col.status} delay={i * 0.08}>
                <div className="h-full bg-white rounded-[1.75rem] p-7 border border-black/[0.06] shadow-[0_28px_60px_-34px_rgba(15,23,42,0.3)]">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${col.dot}`} />
                      <span className="font-display text-lg font-semibold text-slate-900">{col.status}</span>
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${col.badge}`}>{col.items.length}</span>
                  </div>
                  <ul className="space-y-3">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-600">
                        <span className="mt-0.5 flex-shrink-0">{col.icon}</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 lg:py-24">
        <ScrollReveal className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 text-white px-8 py-20 md:p-24 text-center">
            <div className="absolute -top-28 -right-20 w-[460px] h-[460px] bg-blue-600/30 blur-[120px] rounded-full" />
            <div className="absolute -bottom-28 -left-20 w-[460px] h-[460px] bg-indigo-500/20 blur-[120px] rounded-full" />
            <div className="relative z-10 space-y-8">
              <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[0.98]">
                Your calmer semester <br /> is one click away.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://media.githubusercontent.com/media/leviGatimu/study-flow-website/main/public/StudyTrackerSetup.exe"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-9 py-5 rounded-2xl text-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Download size={20} /> Download free
                </a>
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white px-9 py-5 rounded-2xl text-lg font-semibold hover:bg-white/5 transition-colors"
                >
                  <BookOpen size={20} /> Read the docs
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
