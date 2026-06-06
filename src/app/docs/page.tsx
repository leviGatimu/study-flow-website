"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Terminal, Download, HardDrive, Brain, Shield, Keyboard, HelpCircle, ChevronRight, Menu, X, Book, Database, Lock, Code, Cpu, Layers, Zap, Clock, Trophy } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Docs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("architecture");

  const sections = [
    { id: "architecture", title: "System Architecture", icon: Layers },
    { id: "installation", title: "Installation Guide", icon: Download },
    { id: "dashboard", title: "Command Center", icon: Zap },
    { id: "workload", title: "Workload Visualizer", icon: Clock },
    { id: "ai-engine", title: "Neural Engine (AI)", icon: Brain },
    { id: "security", title: "Sovereignty & Security", icon: Lock },
    { id: "database", title: "Local Schema", icon: Database },
    { id: "shortcuts", title: "Power-User Shortcuts", icon: Keyboard },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="bg-mesh" />

      <div className="relative z-10 pt-32 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 px-6">
        
        {/* Sidebar Toggle for Mobile */}
        <button 
          className="md:hidden fixed bottom-10 right-10 z-[110] w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Sidebar */}
        <aside className={`${isSidebarOpen ? 'fixed inset-0 bg-white z-[100] p-12 overflow-y-auto' : 'hidden'} md:block w-full md:w-80 space-y-12`}>
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Search specifications..." 
              className="w-full bg-white/50 backdrop-blur-md border border-slate-200 rounded-[1.5rem] py-5 pl-14 pr-4 text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
            />
            <Search className="absolute left-5 top-5 text-slate-400" size={20} />
          </div>
          
          <nav className="space-y-1.5">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8 px-5">Technical Docs</p>
            {sections.map((s) => (
              <a 
                key={s.id}
                href={`#${s.id}`} 
                onClick={() => {
                  setActiveSection(s.id);
                  setIsSidebarOpen(false);
                }}
                className={`flex items-center gap-5 px-5 py-4 rounded-2xl font-black text-sm transition-all group ${activeSection === s.id ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20' : 'text-slate-600 hover:bg-white hover:text-blue-600'}`}
              >
                <s.icon size={20} className={activeSection === s.id ? 'text-blue-500' : 'text-slate-400 group-hover:text-blue-600'} />
                {s.title}
              </a>
            ))}
          </nav>

          <div className="p-10 glass-container rounded-[3rem] bg-blue-600 text-white border-0 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
             <h4 className="font-black text-lg mb-2 relative z-10">Elite Support</h4>
             <p className="text-xs text-blue-100 mb-8 leading-relaxed relative z-10 font-medium">Access our priority engineering channel for deep technical assistance.</p>
             <a href="https://discord.gg/RQQfJAUCy" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-colors relative z-10">
                Join Discord <ChevronRight size={14} />
             </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 pb-40">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeSection}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-32"
            >
              {/* Architecture Section */}
              <div id="architecture" className="space-y-12 scroll-mt-40">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-200">
                  <Layers size={14} /> Core Foundation
                </div>
                <h1 className="text-7xl font-black text-slate-900 tracking-tighter leading-tight">System <br /> Architecture.</h1>
                <p className="text-2xl text-slate-600 leading-relaxed max-w-3xl font-medium">
                  StudyFlow is built on a "Local-First" paradigm. This means your workstation is a self-contained environment that requires no external server to function.
                </p>
                <div className="grid md:grid-cols-2 gap-8 pt-8">
                   <div className="glass-container p-12 rounded-[3.5rem] space-y-6">
                      <div className="w-16 h-16 bg-slate-900 rounded-[1.5rem] flex items-center justify-center text-blue-500">
                         <Terminal size={32} />
                      </div>
                      <h4 className="text-2xl font-black tracking-tight">Runtime Specs</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">Built with Next.js 16 and Electron for native desktop performance. The UI layer is optimized for sub-16ms frame times even during heavy PDF vectorization.</p>
                   </div>
                   <div className="glass-container p-12 rounded-[3.5rem] space-y-6 border-blue-600/10 bg-blue-600/5">
                      <div className="w-16 h-16 bg-blue-600 rounded-[1.5rem] flex items-center justify-center text-white shadow-xl shadow-blue-600/20">
                         <Database size={32} />
                      </div>
                      <h4 className="text-2xl font-black tracking-tight">Database Engine</h4>
                      <p className="text-slate-700 font-medium leading-relaxed">Leverages SQLite with Prisma ORM. All schemas are strictly typed and locally encrypted using AES-256-GCM.</p>
                   </div>
                </div>
              </div>

              {/* Dashboard Section */}
              <section id="dashboard" className="space-y-12 scroll-mt-40">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest border border-orange-200">
                  <Zap size={14} /> Intelligence
                </div>
                <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Command Center.</h2>
                <div className="glass-container p-16 rounded-[4rem] space-y-10 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 blur-[100px] rounded-full -mr-32 -mt-32" />
                   <p className="text-xl text-slate-600 font-medium leading-relaxed">The Dashboard is the brain of your workstation. It performs a "Template-to-Task" synchronization every time it mounts.</p>
                   <div className="grid gap-6">
                      {[
                        { t: "Dynamic Greeting", d: "Context-aware greeting system based on the time of day and your current streak." },
                        { t: "Rwanda High-Precision Clock", d: "Built-in precision timekeeping for synchronized study blocks." },
                        { t: "XP & Rank Badge", d: "Gamified reward system that calculates experience points based on task difficulty." },
                        { t: "Live Focus Mode", d: "Detects active study blocks and enables a distraction-free UI overlay." }
                      ].map((feature, i) => (
                        <div key={i} className="flex gap-6 items-start p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
                           <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 font-black italic">{i+1}</div>
                           <div>
                              <h5 className="font-black text-slate-900 text-xl tracking-tight mb-1">{feature.t}</h5>
                              <p className="text-slate-500 font-medium">{feature.d}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </section>

              {/* AI Engine Section */}
              <section id="ai-engine" className="space-y-12 scroll-mt-40">
                 <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-600/20">
                  <Brain size={14} /> Neural Integration
                </div>
                <h2 className="text-6xl font-black text-slate-900 tracking-tighter italic">Neural Engine.</h2>
                <div className="bg-slate-900 rounded-[4rem] p-20 text-white space-y-12 relative overflow-hidden border-0">
                   <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-600/20 to-transparent" />
                   <div className="relative z-10 grid md:grid-cols-2 gap-20">
                      <div className="space-y-8">
                         <h4 className="text-3xl font-black tracking-tight">AI Study Assistant</h4>
                         <p className="text-slate-400 text-lg font-medium leading-relaxed">Connect StudyFlow to state-of-the-art LLMs like Gemini 1.5 Pro or Llama 3 via Ollama. Unlock advanced capabilities directly from your sidebar.</p>
                         <ul className="space-y-5">
                            {[
                              "Automated Flashcard Generation",
                              "Complex Research Paper Summarization",
                              "AI-Powered Note Refinement",
                              "Natural Language Schedule Queries"
                            ].map((item, i) => (
                              <li key={i} className="flex items-center gap-4 text-blue-400 font-bold">
                                 <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                 {item}
                              </li>
                            ))}
                         </ul>
                      </div>
                      <div className="glass-container bg-white/5 border-white/10 p-12 rounded-[3rem] space-y-8 h-fit">
                         <h4 className="text-xl font-bold">Configuration Specs</h4>
                         <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">API Key Encryption</p>
                               <p className="font-mono text-sm text-blue-300">HMAC-SHA512 + Salted Local Storage</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Default Endpoint</p>
                               <p className="font-mono text-sm text-blue-300">https://generativelanguage.googleapis.com</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              </section>

              {/* Security Section */}
              <section id="security" className="space-y-12 scroll-mt-40">
                 <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-green-100 text-green-600 text-[10px] font-black uppercase tracking-widest border border-green-200">
                  <Shield size={14} /> Sovereignty
                </div>
                <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-tight">Digital <br /> Sovereignty.</h2>
                <div className="grid md:grid-cols-3 gap-8">
                   {[
                     { i: <Lock />, t: "Zero-Cloud", d: "No telemetry. No accounts. No data leaves your machine unless you explicitly export it." },
                     { i: <Shield />, t: "AES-256-GCM", d: "Sensitive data like API keys and workspace notes are encrypted at rest." },
                     { i: <Code />, t: "Open Audit", d: "Every line of our source code is public. Verify our security claims on GitHub anytime." }
                   ].map((item, i) => (
                      <div key={i} className="glass-container p-12 rounded-[3rem] space-y-6 hover:scale-105 transition-transform duration-500">
                         <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600">
                            {item.i}
                         </div>
                         <h4 className="text-xl font-black tracking-tight text-slate-900">{item.t}</h4>
                         <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.d}</p>
                      </div>
                   ))}
                </div>
              </section>

              {/* Workload Section */}
              <section id="workload" className="space-y-12 scroll-mt-40">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-200">
                  <Clock size={14} /> Heatmaps
                </div>
                <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Workload <br /> Visualizer.</h2>
                <div className="glass-container p-16 rounded-[4rem] space-y-10">
                   <p className="text-xl text-slate-600 font-medium leading-relaxed">The visualizer maps your <strong>ScheduleTemplates</strong> against the current month to generate a "Density Heatmap" of your study intensity.</p>
                   <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] space-y-6">
                      <div className="flex gap-2">
                         {[...Array(7)].map((_, i) => (
                           <div key={i} className={`h-8 w-8 rounded-md ${i > 4 ? 'bg-blue-600' : 'bg-blue-100'}`} />
                         ))}
                      </div>
                      <p className="text-sm text-slate-500 font-medium italic">Figure 1.1: Typical Density Heatmap displaying high intensity (blue) vs low intensity (light blue) study blocks.</p>
                   </div>
                </div>
              </section>

              {/* Database Section */}
              <section id="database" className="space-y-12 scroll-mt-40">
                 <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">
                  <Database size={14} /> Schema V1.0
                </div>
                <h2 className="text-6xl font-black text-slate-900 tracking-tighter italic text-gradient">Local Schema.</h2>
                <div className="bg-slate-900 rounded-[4rem] p-16 text-white space-y-12 border-0">
                   <div className="space-y-8">
                      <h4 className="text-2xl font-black tracking-tight flex items-center gap-3">
                         <Code className="text-blue-500" size={24} />
                         Prisma Model Definition
                      </h4>
                      <div className="p-8 bg-white/5 border border-white/5 rounded-[2rem] font-mono text-sm text-blue-300 leading-relaxed overflow-x-auto">
                        <pre>{`model ScheduleTemplate {
  id          String   @id @default(cuid())
  subject     String
  dayOfWeek   String   // MONDAY, TUESDAY...
  startTime   String
  endTime     String
  type        String   // HOMEWORK, REVISION
}

model Task {
  id          String   @id @default(cuid())
  date        DateTime
  isDone      Boolean  @default(false)
  templateId  String
}`}</pre>
                      </div>
                   </div>
                </div>
              </section>

            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
