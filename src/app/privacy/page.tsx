import { Code, EyeOff, Lock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const sections = [
  {
    icon: <Lock size={20} />,
    title: "1. Data sovereignty",
    content:
      "Study Flow is built on a local-first architecture. By default, all your study notes, document summaries, schedule and personal configuration are stored exclusively on your machine. We have no access to your data and we do not store it on our servers.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "2. AI features & API keys",
    content:
      "When you use the optional AI features, the app talks directly to the provider (e.g. Google Gemini or OpenAI) using the API key you supply.",
    list: [
      "Your API key is stored locally on your device.",
      "Data you send to the AI provider is subject to their own privacy policy.",
      "Study Flow does not intercept, proxy or log these requests.",
    ],
  },
  {
    icon: <EyeOff size={20} />,
    title: "3. No tracking",
    content:
      "We don't use tracking cookies, analytics scripts or any behavioural monitoring. The website and the app are designed to be as private as possible.",
  },
  {
    icon: <Code size={20} />,
    title: "4. Open-source transparency",
    content:
      "Study Flow is open source. The code is available for public audit on GitHub, so you can verify exactly how your data is handled.",
  },
];

export default function Privacy() {
  return (
    <div className="relative">
      <div className="grain" />

      {/* Hero */}
      <section className="px-6 pt-40 pb-10 text-center">
        <ScrollReveal className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/[0.06] text-blue-600 text-[10px] font-bold uppercase tracking-[0.22em] shadow-sm">
            <ShieldCheck size={13} /> Privacy
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-semibold text-slate-900 tracking-tight leading-[0.9] mt-6">
            Privacy <span className="text-blue-600">policy.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed mt-6 max-w-xl mx-auto">
            The short version: your data stays on your device. Here&apos;s exactly how Study Flow handles it.
          </p>
        </ScrollReveal>
      </section>

      {/* Sections */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-6">
          {sections.map((s, i) => (
            <ScrollReveal key={s.title} delay={(i % 2) * 0.06}>
              <section className="bg-white rounded-[1.5rem] border border-black/[0.06] shadow-[0_28px_60px_-40px_rgba(15,23,42,0.3)] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    {s.icon}
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-slate-900 tracking-tight">{s.title}</h2>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">{s.content}</p>
                {s.list && (
                  <ul className="space-y-3 pt-5">
                    {s.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </ScrollReveal>
          ))}

          <ScrollReveal className="pt-6 text-center">
            <p className="text-sm text-slate-400 mb-6">Last updated 2026 · Questions? <Link href="/support" className="text-blue-600 font-semibold hover:underline">Get in touch</Link>.</p>
            <Link href="/" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-slate-800 transition-colors">
              Back to home
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
