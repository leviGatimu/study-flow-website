import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  ExternalLink,
  LifeBuoy,
  Mail,
  MessageSquare,
  Users,
} from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const blobRadii = [
  "42% 58% 63% 37% / 41% 44% 56% 59%",
  "63% 37% 47% 53% / 38% 63% 37% 62%",
  "39% 61% 38% 62% / 58% 39% 61% 42%",
];

const categories = [
  {
    title: "Self-service",
    icon: <LifeBuoy size={22} />,
    chip: "bg-blue-600",
    blob: "bg-blue-200",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "What's new", href: "/changelog" },
      { label: "Download", href: "/download" },
    ],
  },
  {
    title: "Community",
    icon: <Users size={22} />,
    chip: "bg-emerald-500",
    blob: "bg-emerald-200",
    links: [
      { label: "YouTube channel", href: "https://www.youtube.com/channel/UCF19E7DtMFwa0eRv1BNiPbw", external: true },
      { label: "Discord server", href: "https://discord.gg/RQQfJAUCy", external: true },
      { label: "GitHub repository", href: "https://github.com/leviGatimu/Study-Flow", external: true },
      { label: "Roadmap", href: "/download#roadmap" },
    ],
  },
  {
    title: "Contact",
    icon: <Mail size={22} />,
    chip: "bg-indigo-500",
    blob: "bg-indigo-200",
    links: [
      { label: "Email support", href: "mailto:getmorelev@gmail.com", external: true },
      { label: "Report a bug (GitHub)", href: "https://github.com/leviGatimu/Study-Flow/issues", external: true },
    ],
  },
];

const faqs = [
  { q: "Is Study Flow really free?", a: "Yes — the core app is free to download and use forever, and it's local-first, so there are no subscriptions." },
  { q: "Where is my data stored?", a: "On your machine, in a local SQLite database. There's no account on our servers and nothing is uploaded." },
  { q: "Does it work on Mac or Linux?", a: "Right now it's Windows 10/11 only. macOS and Linux builds are on the roadmap." },
  { q: "Do I need an API key?", a: "Only for the optional AI features (tutor, buddy, notes). Paste a free Gemini or OpenAI key in Settings — everything else works without one." },
  { q: "How do I update?", a: "The app notifies you when an update is available, and you can always grab the latest installer from the download page." },
];

export default function Support() {
  return (
    <div className="relative">
      <div className="grain" />

      {/* Hero */}
      <section className="px-6 pt-40 pb-12 text-center">
        <ScrollReveal className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-black/[0.06] dark:border-white/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.22em] shadow-sm">
            <LifeBuoy size={13} /> Support
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight leading-[0.9] mt-6">
            How can we <span className="text-blue-600 dark:text-blue-400">help?</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mt-6 max-w-xl mx-auto">
            Start with the docs, ask the community, or reach out directly — whatever gets you back to studying fastest.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-slate-800 transition-colors">
              <BookOpen size={18} /> Read the docs
            </Link>
            <a href="https://discord.gg/RQQfJAUCy" className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-black/10 dark:border-white/10 text-slate-900 dark:text-slate-50 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition-colors">
              <MessageSquare size={18} /> Join the Discord
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Categories */}
      <section className="px-6 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08}>
              <div className="relative h-full overflow-hidden bg-white dark:bg-slate-900 rounded-[1.75rem] p-8 border border-black/[0.06] dark:border-white/10 shadow-[0_28px_60px_-34px_rgba(15,23,42,0.3)]">
                <div className={`absolute -top-9 -right-7 w-36 h-36 ${cat.blob} opacity-60`} style={{ borderRadius: blobRadii[i % blobRadii.length] }} />
                <div className="relative">
                  <div className={`w-14 h-14 ${cat.chip} rounded-2xl flex items-center justify-center text-white mb-6 shadow-[0_14px_30px_-12px_rgba(15,23,42,0.55)]`}>
                    {cat.icon}
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-5">{cat.title}</h2>
                  <ul className="space-y-1">
                    {cat.links.map((link) => {
                      const Cmp: any = link.href.startsWith("/") ? Link : "a";
                      return (
                        <li key={link.label}>
                          <Cmp
                            href={link.href}
                            className="flex items-center justify-between py-2.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 font-semibold transition-colors group border-b border-black/[0.05] dark:border-white/10 last:border-0"
                          >
                            {link.label}
                            {"external" in link && link.external ? (
                              <ExternalLink size={15} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                            ) : (
                              <ChevronRight size={16} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            )}
                          </Cmp>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">FAQ</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mt-4">
              Frequently asked.
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white dark:bg-slate-900 rounded-[1.25rem] border border-black/[0.06] dark:border-white/10 shadow-[0_24px_50px_-40px_rgba(15,23,42,0.3)] p-6">
                <summary className="flex items-center justify-between cursor-pointer list-none font-display text-lg font-semibold text-slate-900 dark:text-slate-50">
                  {f.q}
                  <ChevronRight size={18} className="text-slate-400 dark:text-slate-500 transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mt-3 text-[15px]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="px-6 py-16 lg:py-24">
        <ScrollReveal className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 text-white px-8 py-16 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="absolute -top-24 -left-16 w-80 h-80 bg-blue-600/25 blur-[110px] rounded-full" />
            <div className="relative z-10 max-w-xl space-y-5 text-center md:text-left">
              <div className="flex items-center gap-3 text-blue-300 justify-center md:justify-start">
                <MessageSquare size={20} />
                <span className="font-bold uppercase tracking-[0.2em] text-xs">Community</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">Join the conversation.</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Swap workflows with other students, ask questions, and help shape what gets built next.
              </p>
            </div>
            <a
              href="https://discord.gg/RQQfJAUCy"
              className="btn-on-dark relative z-10 inline-flex items-center gap-3 font-semibold py-4 px-9 rounded-2xl transition-colors whitespace-nowrap"
            >
              Join the Discord <ArrowUpRight size={18} />
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
