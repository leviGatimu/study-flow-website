"use client";

import Link from "next/link";
import { Download, Terminal, Book, Shield, Brain, ChevronRight, Check, Search } from "lucide-react";
import { useState } from "react";

export default function Docs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sections = [
    { id: "getting-started", title: "Getting Started", icon: Terminal },
    { id: "installation", title: "Installation", icon: Download },
    { id: "ai-config", title: "AI Configuration", icon: Brain },
    { id: "privacy", title: "Privacy & Security", icon: Shield },
    { id: "usage", title: "Standard Usage", icon: Book },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className={`${isSidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-gray-50 border-r border-gray-200 min-h-[calc(100vh-64px)] p-6 sticky top-16 h-fit`}>
          <div className="relative mb-8">
            <input 
              type="text" 
              placeholder="Search docs..." 
              className="w-full bg-white border border-gray-300 rounded py-2 pl-3 pr-10 text-sm focus:outline-none focus:border-[#21759b]"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={16} />
          </div>
          
          <nav className="space-y-1">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">Table of Contents</p>
            {sections.map((section) => (
              <a 
                key={section.id}
                href={`#${section.id}`} 
                className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:bg-[#21759b] hover:text-white rounded transition-colors text-sm font-medium group"
                onClick={() => setIsSidebarOpen(false)}
              >
                <section.icon size={16} className="text-gray-400 group-hover:text-white" />
                {section.title}
              </a>
            ))}
          </nav>

          <div className="mt-12 p-4 bg-[#21759b]/5 border border-[#21759b]/10 rounded">
             <p className="text-xs font-bold text-[#21759b] mb-2">Need help?</p>
             <p className="text-[10px] text-gray-600 mb-4">Can't find what you're looking for?</p>
             <Link href="/support" className="text-[10px] font-bold text-[#21759b] hover:underline flex items-center gap-1 uppercase">
                Contact Support <ChevronRight size={10} />
             </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 py-12 px-6 md:px-12 max-w-4xl">
          <div className="space-y-16">
            
            {/* Intro */}
            <div id="getting-started" className="space-y-6 scroll-mt-24">
              <h1 className="text-4xl font-light text-gray-800">Documentation</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Welcome to the official StudyFlow documentation. Here you will find everything you need to install, configure, and master your personal study workstation.
              </p>
            </div>

            {/* Installation */}
            <section id="installation" className="space-y-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold border-b border-gray-100 pb-4">Installation</h2>
              <p className="text-gray-700 leading-relaxed">
                StudyFlow is currently available for Windows. Follow these steps to get set up:
              </p>
              <div className="bg-gray-50 border border-gray-200 p-8 rounded space-y-4">
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  <li>Download the <a href="/StudyTrackerSetup.exe" className="text-[#21759b] font-bold hover:underline">StudyTrackerSetup.exe</a> installer.</li>
                  <li>Launch the installer and follow the on-screen instructions.</li>
                  <li>Once installed, open StudyFlow from your desktop or Start menu.</li>
                  <li>The app will automatically initialize your local database on first run.</li>
                </ol>
              </div>
            </section>

            {/* AI Config */}
            <section id="ai-config" className="space-y-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold border-b border-gray-100 pb-4">AI Configuration</h2>
              <p className="text-gray-700 leading-relaxed">
                To unlock AI-powered document analysis and synthesis, you'll need to provide your own API key. This ensures your data remains under your control and keeps StudyFlow free for everyone.
              </p>
              <div className="wp-card space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-2 rounded text-[#21759b]">
                    <Brain size={20} />
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold">Using Google Gemini</p>
                    <p className="text-sm text-gray-600">Navigate to Settings &gt; Intelligence and paste your API key. We recommend using Gemini 1.5 Pro for the best results.</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <Link href="#" className="text-sm text-[#21759b] font-bold hover:underline">How to get a Gemini API Key &rarr;</Link>
                </div>
              </div>
            </section>

            {/* Privacy */}
            <section id="privacy" className="space-y-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold border-b border-gray-100 pb-4">Privacy & Security</h2>
              <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
                <p>
                  StudyFlow is built on the principle of <strong>Local-First</strong>. This means your study notes, document summaries, and personal data never leave your machine unless you explicitly choose to export them.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-3 bg-green-50 p-4 rounded text-green-800 text-sm">
                    <Check size={18} />
                    Local SQLite Database
                  </div>
                  <div className="flex items-center gap-3 bg-green-50 p-4 rounded text-green-800 text-sm">
                    <Check size={18} />
                    AES-256 Encryption
                  </div>
                </div>
              </div>
            </section>

            {/* Usage */}
            <section id="usage" className="space-y-8 scroll-mt-24 pb-20">
              <h2 className="text-2xl font-semibold border-b border-gray-100 pb-4">Standard Usage</h2>
              <p className="text-gray-700 leading-relaxed">
                StudyFlow organizes your learning into <strong>Workspaces</strong> and <strong>Knowledge Blocks</strong>.
              </p>
              <div className="space-y-4">
                {[
                  { t: "Create a Workspace", d: "Start by creating a new workspace for your subject or project." },
                  { t: "Import Documents", d: "Drag and drop PDFs or text files to add them to your knowledge base." },
                  { t: "Generate Insights", d: "Use the AI toggle to summarize complex topics or find connections between documents." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start border-l-4 border-gray-100 pl-6 py-2">
                    <div className="font-bold text-[#2c3338] min-w-[150px]">{item.t}</div>
                    <div className="text-gray-600 text-sm">{item.d}</div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}
