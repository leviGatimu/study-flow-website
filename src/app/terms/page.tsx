import { FileText, Gavel, Info, Scale, ShieldAlert, UserCheck } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const sections = [
  {
    icon: <FileText size={20} />,
    title: "1. Acceptance of terms",
    content:
      "By downloading or using Study Flow, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use the software.",
  },
  {
    icon: <Scale size={20} />,
    title: "2. Open-source license",
    content:
      "Study Flow is distributed under an open-source license. You are free to use, modify and distribute the software in accordance with that license (found in the GitHub repository).",
  },
  {
    icon: <UserCheck size={20} />,
    title: "3. User responsibility",
    content:
      "You are responsible for your own data and the API keys you provide. Study Flow is provided 'as is' without warranties. We are not responsible for data loss or issues arising from third-party AI providers.",
  },
  {
    icon: <ShieldAlert size={20} />,
    title: "4. Intellectual property",
    content:
      "The Study Flow name, logo and original website content are the property of the Study Flow project and its contributors. While the software is open source, the branding and trademarks remain protected.",
  },
  {
    icon: <Gavel size={20} />,
    title: "5. Limitation of liability",
    content:
      "In no event shall Study Flow, its developers or contributors be liable for any damages (including loss of data or profit, or business interruption) arising out of the use or inability to use the software, even if advised of the possibility of such damage.",
  },
  {
    icon: <Info size={20} />,
    title: "6. Governing law",
    content:
      "These terms are governed by the laws of the jurisdiction in which the project maintainers operate, and you submit to the exclusive jurisdiction of the courts in that location.",
  },
];

export default function Terms() {
  return (
    <div className="relative">
      <div className="grain" />

      {/* Hero */}
      <section className="px-6 pt-40 pb-10 text-center">
        <ScrollReveal className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-black/[0.06] dark:border-white/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.22em] shadow-sm">
            <Scale size={13} /> Terms
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight leading-[0.9] mt-6">
            Terms of <span className="text-blue-600 dark:text-blue-400">service.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mt-6 max-w-xl mx-auto">
            The plain-language rules for using Study Flow.
          </p>
        </ScrollReveal>
      </section>

      {/* Sections */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-6">
          {sections.map((s, i) => (
            <ScrollReveal key={s.title} delay={(i % 2) * 0.06}>
              <section className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-black/[0.06] dark:border-white/10 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.3)] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
                    {s.icon}
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight">{s.title}</h2>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">{s.content}</p>
              </section>
            </ScrollReveal>
          ))}

          <ScrollReveal className="pt-6 text-center">
            <p className="text-sm text-slate-400 dark:text-slate-500 mb-6">Last updated 2026 · See also our <Link href="/privacy" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">privacy policy</Link>.</p>
            <Link href="/" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-slate-800 transition-colors">
              Back to home
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
