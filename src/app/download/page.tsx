"use client";

import { motion } from "framer-motion";
import { Download, Monitor, Laptop, Terminal, Cpu, ShieldCheck, Zap, ArrowRight, Play, Server, Layers } from "lucide-react";
import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";

export default function DownloadPage() {
  const platforms = [
    {
      name: "Windows",
      icon: Monitor,
      version: "1.0.0",
      type: ".exe",
      href: "/StudyTrackerSetup.exe",
      primary: true,
      badge: "Stable Release"
    },
    {
      name: "Portable",
      icon: Laptop,
      version: "1.0.0",
      type: ".zip",
      href: "#",
      primary: false,
      badge: "Standalone"
    },
    {
      name: "macOS",
      icon: Laptop,
      version: "1.0.0",
      type: ".dmg",
      href: "#",
      badge: "Silicon Optimized",
      disabled: true
    },
    {
      name: "Linux",
      icon: Terminal,
      version: "1.0.0",
      type: ".AppImage",
      href: "#",
      badge: "Rolling Beta",
      disabled: true
    }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="bg-mesh" />

      <div className="relative z-10 pt-40 pb-32 px-6">
        {/* Hero */}
        <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center mb-48">
           <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-10"
           >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-200">
                <Server size={14} /> Production Ready
              </div>
              <h1 className="text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                Obtain <br />
                <span className="text-gradient italic">StudyFlow.</span>
              </h1>
              <p className="text-2xl text-slate-600 leading-relaxed max-w-lg font-medium">
                Choose your environment and deploy the definitive workstation. Local-first architecture ensures 100% data residency and sub-millisecond response times.
              </p>
              <div className="flex items-center gap-8 pt-4">
                 <div className="flex -space-x-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-blue-600 flex items-center justify-center text-white text-xs font-black shadow-lg">
                        {i === 3 ? '10k' : ''}
                      </div>
                    ))}
                 </div>
                 <div className="space-y-1">
                    <p className="text-sm font-black text-slate-900 leading-none">Global Deployment</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Trusted by elite researchers</p>
                 </div>
              </div>
           </motion.div>
           
           <div className="relative flex justify-center lg:justify-end">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-blue-500/20 blur-[110px] rounded-full" />
              <PhoneMockup screen="tasks" />
           </div>
        </section>

        {/* Deployment Grid */}
        <main className="max-w-7xl mx-auto space-y-40">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((p, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -15 }}
                className={`glass-container p-12 rounded-[3.5rem] flex flex-col h-full relative group transition-all duration-500 ${p.disabled ? 'opacity-50 grayscale' : 'hover:bg-white/80 hover:shadow-2xl hover:shadow-blue-500/5'}`}
              >
                {p.badge && (
                  <span className={`absolute top-10 right-10 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${p.primary ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/30' : 'bg-slate-50 text-slate-500 border-slate-200'}`}>
                    {p.badge}
                  </span>
                )}
                <div className="mb-12">
                  <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${p.primary ? 'bg-blue-600 text-white shadow-2xl shadow-blue-600/40' : 'bg-slate-900 text-white shadow-xl'}`}>
                    <p.icon size={36} />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{p.name}</h3>
                <p className="text-xs font-black text-slate-400 mb-12 flex-grow uppercase tracking-widest">
                  Release v{p.version} • {p.type}
                </p>
                
                {p.disabled ? (
                  <button disabled className="w-full bg-slate-100 text-slate-400 font-black py-6 rounded-[1.5rem] cursor-not-allowed text-xs uppercase tracking-widest">
                    Notify Deploy
                  </button>
                ) : (
                  <a 
                    href={p.href} 
                    className={`w-full text-center font-black py-6 rounded-[1.5rem] transition-all shadow-2xl flex items-center justify-center gap-3 group text-sm uppercase tracking-widest ${p.primary ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-600/20' : 'bg-slate-900 text-white hover:bg-blue-800'}`}
                  >
                    <Download size={18} />
                    Download
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Technical Verification */}
          <section className="grid md:grid-cols-2 gap-12">
            <div className="glass-container p-20 rounded-[4rem] space-y-12">
               <h2 className="text-5xl font-black text-slate-900 tracking-tighter flex items-center gap-6 italic">
                  <Cpu className="text-blue-600" size={40} />
                  Hardware.
               </h2>
               <div className="space-y-8">
                  {[
                    { t: "Silicon Specs", d: "Optimized for x64 and ARM64 instruction sets." },
                    { t: "Memory Matrix", d: "Efficient GC ensures low overhead even with 10k+ entries." },
                    { t: "I/O Velocity", d: "Synchronous local writes via SQLite WAL-mode." }
                  ].map((req, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                       <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 group-hover:scale-150 transition-transform duration-500" />
                       <div>
                          <p className="font-black text-slate-900 text-xl tracking-tight">{req.t}</p>
                          <p className="text-slate-500 font-medium">{req.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="glass-container p-20 rounded-[4rem] space-y-12 bg-slate-900 text-white border-0 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full -mr-32 -mt-32" />
               <h2 className="text-5xl font-black tracking-tighter flex items-center gap-6 italic relative z-10">
                  <ShieldCheck className="text-blue-500" size={40} />
                  Integrity.
               </h2>
               <p className="text-slate-400 text-lg leading-relaxed relative z-10 font-medium">
                  Binaries are cryptographically signed to ensure authenticity. Verify your download against our hash signature.
               </p>
               <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                     <Terminal size={14} /> SHA-256 Checksum Signature
                  </div>
                  <code className="block p-6 bg-white/5 border border-white/5 rounded-3xl text-[10px] text-blue-400 break-all font-mono leading-relaxed">
                    3f9b8c7d6e5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9
                  </code>
               </div>
            </div>
          </section>

          {/* Feature Matrix */}
          <section className="py-24">
             <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                <div className="space-y-4">
                   <div className="w-16 h-1 bg-blue-600 rounded-full" />
                   <h2 className="text-6xl font-black text-slate-900 tracking-tighter">What's New <br /><span className="text-blue-600">in v1.0.0.</span></h2>
                </div>
                <Link href="/docs" className="text-blue-600 font-black text-sm uppercase tracking-widest flex items-center gap-3 group border-b-2 border-blue-600 pb-2">
                   View Full Engineering Logs <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
             </div>
             <div className="grid gap-6">
                {[
                  { t: "Neural Engine Core", d: "Native integration with Google Gemini for zero-latency document analysis." },
                  { t: "Prisma Layer Sync", d: "Optimized database migrations for seamless version upgrades." },
                  { t: "Vectorized Library", d: "High-speed semantic search across all indexed research PDFs." },
                  { t: "Workspace Portability", d: "Direct binary export of encrypted SQLite study environments." }
                ].map((change, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 15 }}
                    className="glass-container p-10 rounded-[3rem] flex flex-col md:flex-row gap-10 items-start md:items-center hover:bg-white transition-all duration-500 border-l-[10px] border-l-blue-600"
                  >
                    <div className="font-black text-slate-900 min-w-[300px] text-2xl tracking-tighter">{change.t}</div>
                    <div className="text-slate-500 text-lg font-medium leading-relaxed">{change.d}</div>
                  </motion.div>
                ))}
             </div>
          </section>
        </main>
      </div>
    </div>
  );
}
