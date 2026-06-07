import { ArrowLeft, BookOpen, Download } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-32 text-center overflow-hidden">
      <div className="grain" />

      {/* splash shapes */}
      <div
        className="absolute -z-10 top-1/4 left-[15%] w-72 h-72 bg-blue-200/60"
        style={{ borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" }}
      />
      <div
        className="absolute -z-10 bottom-1/4 right-[14%] w-80 h-80 bg-indigo-200/50"
        style={{ borderRadius: "63% 37% 47% 53% / 38% 63% 37% 62%" }}
      />

      <div className="relative max-w-xl mx-auto">
        <p className="font-display text-[9rem] md:text-[12rem] font-semibold text-slate-900 dark:text-slate-50 leading-none tracking-tight">
          4<span className="text-blue-600 dark:text-blue-400">0</span>4
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mt-2">
          This page wandered off.
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mt-4 max-w-md mx-auto">
          The link might be old or mistyped. Let&apos;s get you back to something useful.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft size={18} /> Back home
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-black/10 dark:border-white/10 text-slate-900 dark:text-slate-50 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition-colors"
          >
            <BookOpen size={18} /> Read the docs
          </Link>
          <Link
            href="/download"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-500 transition-colors"
          >
            <Download size={18} /> Download
          </Link>
        </div>
      </div>
    </div>
  );
}
