import Link from "next/link";
import { ArrowUpRight, Github, Instagram, MessageSquare, Youtube } from "lucide-react";
import SandText from "@/components/SandText";
import Logo from "@/components/Logo";

const YOUTUBE_URL = "https://www.youtube.com/channel/UCF19E7DtMFwa0eRv1BNiPbw";
const INSTAGRAM_URL = "https://www.instagram.com/studyflowofficiall/";

// Stable references so SandText doesn't re-init each render.
const INK_GRAINS = ["#000000", "#070707", "#0d0d0d", "#050505", "#111111", "#030303"];
const LIGHT_GRAINS = ["#ffffff", "#e9eefb", "#cdd8f2", "#aebfe6", "#dde6fa", "#8fa6dd"];

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Download", href: "/download" },
      { label: "Documentation", href: "/docs" },
      { label: "What's new", href: "/changelog" },
      { label: "Roadmap", href: "/download#roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Support", href: "/support" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discord", href: "https://discord.gg/RQQfJAUCy", external: true },
      { label: "GitHub", href: "https://github.com/leviGatimu/Study-Flow", external: true },
      { label: "YouTube", href: YOUTUBE_URL, external: true },
      { label: "Instagram", href: INSTAGRAM_URL, external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#ececec] dark:bg-[#0a0e17] text-slate-600 dark:text-slate-300 overflow-hidden border-t border-black/10 dark:border-white/10">
      <div className="relative max-w-7xl mx-auto px-6 pt-28">
        <div className="grid md:grid-cols-12 gap-12 pb-24 border-b border-black/10 dark:border-white/10">
          {/* brand + CTA */}
          <div className="md:col-span-5 space-y-8">
            <Logo size={40} textClassName="font-display text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50" />
            <p className="text-lg leading-relaxed max-w-sm text-slate-500 dark:text-slate-400">
              A private, local-first study workstation. Turn your timetable into a daily rhythm — no cloud, no login, no noise.
            </p>
            <Link
              href="/download"
              className="group inline-flex items-center gap-3 bg-slate-900 text-white pl-7 pr-5 py-4 rounded-2xl font-semibold hover:bg-slate-800 transition-colors shadow-[0_18px_40px_-14px_rgba(15,23,42,0.6)]"
            >
              Download free
              <span className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={16} />
              </span>
            </Link>
            <div className="flex gap-5 pt-2">
              <a href="https://github.com/leviGatimu/Study-Flow" className="w-11 h-11 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-colors">
                <Github size={18} />
              </a>
              <a href="https://discord.gg/RQQfJAUCy" className="w-11 h-11 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-colors">
                <MessageSquare size={18} />
              </a>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-11 h-11 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors">
                <Youtube size={18} />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-pink-500 hover:text-pink-500 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* link columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-blue-600 dark:text-blue-400 font-semibold mb-6 text-xs uppercase tracking-[0.25em]">{col.title}</h3>
                <ul className="space-y-4 text-[15px]">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-colors inline-flex items-center gap-1.5 group"
                      >
                        {link.label}
                        {"external" in link && link.external && (
                          <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* bottom meta */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
          <p>© 2026 Study Flow — built by scholars, for scholars.</p>
          <div className="flex gap-8">
            <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy</Link>
            <span>English (US)</span>
          </div>
        </div>
      </div>

      {/* Giant interactive wordmark — black grains on white */}
      <div className="relative w-full select-none">
        <div className="h-[34vw] min-h-[260px] max-h-[520px] w-full">
          <SandText lines={["STUDY", "FLOW"]} colors={INK_GRAINS} darkColors={LIGHT_GRAINS} className="w-full h-full cursor-none touch-none" />
        </div>
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 pointer-events-none">
          Drag your cursor through the grains
        </p>
      </div>
    </footer>
  );
}
