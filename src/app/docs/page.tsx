"use client";

import Link from "next/link";
import { Download, Terminal, Book, Shield, Brain, ChevronRight, Check, Search, Cpu, HardDrive, Keyboard, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function Docs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sections = [
    { id: "getting-started", title: "Getting Started", icon: Terminal },
    { id: "installation", title: "Installation", icon: Download },
    { id: "workspaces", title: "Workspaces", icon: HardDrive },
    { id: "ai-config", title: "AI Configuration", icon: Brain },
    { id: "privacy", title: "Privacy & Security", icon: Shield },
    { id: "shortcuts", title: "Keyboard Shortcuts", icon: Keyboard },
    { id: "troubleshooting", title: "Troubleshooting", icon: HelpCircle },
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

            {/* Workspaces */}
            <section id="workspaces" className="space-y-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold border-b border-gray-100 pb-4">Workspace Management</h2>
              <p className="text-gray-700 leading-relaxed">
                Workspaces are the primary way to organize your studies. Each workspace has its own isolated database of documents and notes.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="wp-card space-y-3">
                  <h4 className="font-bold">Creating a Workspace</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Click the "+" icon in the left sidebar to create a new workspace. Give it a name like "Computer Science 101" or "Dissertation Research".</p>
                </div>
                <div className="wp-card space-y-3">
                  <h4 className="font-bold">Supported File Types</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">You can import PDF, DOCX, TXT, and Markdown files. StudyFlow will automatically index them for local search.</p>
                </div>
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
                    <p className="text-sm text-gray-600 leading-relaxed">Navigate to <strong>Settings &gt; Intelligence</strong> and paste your API key. We recommend using <strong>Gemini 1.5 Pro</strong> or <strong>Flash</strong> for optimal performance.</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-sm text-[#21759b] font-bold hover:underline">Get a Gemini API Key from Google AI Studio &rarr;</a>
                </div>
              </div>
            </section>

            {/* Privacy */}
            <section id="privacy" className="space-y-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold border-b border-gray-100 pb-4">Privacy & Security</h2>
              <div className="prose prose-gray max-w-none text-gray-700 space-y-4 leading-relaxed">
                <p>
                  StudyFlow is built on the principle of <strong>Local-First</strong>. This means your study notes, document summaries, and personal data never leave your machine unless you explicitly choose to export them.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6 text-sm">
                  <div className="flex items-center gap-3 bg-green-50 p-4 rounded text-green-800">
                    <Check size={18} />
                    Local SQLite Database
                  </div>
                  <div className="flex items-center gap-3 bg-green-50 p-4 rounded text-green-800">
                    <Check size={18} />
                    AES-256 Content Encryption
                  </div>
                  <div className="flex items-center gap-3 bg-green-50 p-4 rounded text-green-800">
                    <Check size={18} />
                    Zero Cloud Dependencies
                  </div>
                  <div className="flex items-center gap-3 bg-green-50 p-4 rounded text-green-800">
                    <Check size={18} />
                    Privacy-Focused AI Calls
                  </div>
                </div>
              </div>
            </section>

            {/* Keyboard Shortcuts */}
            <section id="shortcuts" className="space-y-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold border-b border-gray-100 pb-4">Keyboard Shortcuts</h2>
              <p className="text-gray-700 leading-relaxed">Boost your productivity with these built-in shortcuts:</p>
              <div className="bg-gray-50 border border-gray-200 rounded overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                      <th className="px-6 py-3 text-left font-bold text-gray-700">Action</th>
                      <th className="px-6 py-3 text-left font-bold text-gray-700">Shortcut</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { a: "Quick Search", s: "Ctrl + K" },
                      { a: "New Workspace", s: "Ctrl + N" },
                      { a: "Toggle AI Chat", s: "Ctrl + J" },
                      { a: "Save Note", s: "Ctrl + S" },
                      { a: "Import Files", s: "Ctrl + O" },
                      { a: "Settings", s: "Ctrl + ," }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white transition-colors">
                        <td className="px-6 py-4 text-gray-600">{row.a}</td>
                        <td className="px-6 py-4 font-mono text-[#21759b]">{row.s}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="space-y-8 scroll-mt-24 pb-20">
              <h2 className="text-2xl font-semibold border-b border-gray-100 pb-4">Troubleshooting</h2>
              <div className="space-y-6">
                {[
                  { q: "The app won't open on Windows?", a: "Ensure you have the latest .NET Desktop Runtime installed. If you see a SmartScreen warning, click 'More Info' and then 'Run Anyway'." },
                  { q: "AI isn't responding?", a: "Verify your API key in Settings. Make sure you have an active internet connection and that your key has remaining quota." },
                  { q: "My files aren't importing?", a: "Check that the files aren't open in another program and that they are in a supported format (PDF, DOCX, TXT)." }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <p className="font-bold text-[#2c3338]">{item.q}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
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
