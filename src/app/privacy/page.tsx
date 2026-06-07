"use client";

import Link from "next/link";
import { ShieldCheck, Lock, EyeOff, Code } from "lucide-react";

export default function Privacy() {
  return (
    <div className="relative min-h-screen">
      {/* Floating Background Shapes */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Privacy <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Your privacy is our priority. Learn how Study Flow protects your personal and academic data.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto py-20 px-6">
          <div className="space-y-12">
            {[
              {
                icon: <Lock className="text-blue-600" />,
                title: "1. Data Sovereignty",
                content: "Study Flow is built on a local-first architecture. This means that by default, all your study notes, document summaries, and personal configurations are stored exclusively on your local machine. We do not have access to your data, and we do not store it on our servers."
              },
              {
                icon: <ShieldCheck className="text-blue-600" />,
                title: "2. AI Features & API Keys",
                content: "When you use AI features (such as document synthesis), the application communicates directly with the AI provider (e.g., Google Gemini) using the API key you provide.",
                list: [
                  "Your API key is stored locally and encrypted.",
                  "Data sent to the AI provider is subject to their own privacy policies.",
                  "Study Flow does not intercept or log these communications."
                ]
              },
              {
                icon: <EyeOff className="text-blue-600" />,
                title: "3. No Tracking",
                content: "We do not use tracking cookies, analytics scripts, or any other form of behavioral monitoring. Our website and application are designed to be as private as possible."
              },
              {
                icon: <Code className="text-blue-600" />,
                title: "4. Open Source Transparency",
                content: "As an open-source project, our code is available for public audit on GitHub. You can verify exactly how your data is handled by reviewing our source code."
              }
            ].map((section, i) => (
              <section key={i} className="glass-card space-y-6 hover:bg-white/60 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {section.content}
                </p>
                {section.list && (
                  <ul className="space-y-3 pt-2">
                    {section.list.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            
            <div className="mt-20 pt-10 text-center">
               <Link href="/" className="btn-primary inline-flex">
                 Back to Home
               </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
