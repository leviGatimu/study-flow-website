"use client";

import { motion } from "framer-motion";
import { Download, Check, Shield, Zap, Calendar, Database, HardDrive, Brain, Focus, BookOpen, Clock, ChevronRight, PlayCircle, Lock, Layout, Sparkles, Flame, Trophy } from "lucide-react";
import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";
import MacbookMockup from "@/components/MacbookMockup";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen">
      <div className="bg-mesh" />

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-10 relative z-10"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100/50 backdrop-blur-md text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-200/50">
              <Sparkles size={12} className="animate-pulse" />
              Revolutionizing Academic Privacy
            </motion.div>
            
            <motion.h1 variants={item} className="text-7xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              Elite Workspace <br />
              <span className="text-gradient italic">for Scholars.</span>
            </motion.h1>
            
            <motion.p variants={item} className="text-2xl text-slate-600 leading-relaxed max-w-xl font-medium">
              StudyFlow is the definitive local-first workstation. Secure your data, automate your routine, and master your syllabus with zero-cloud dependencies.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link href="/download" className="btn-shiny flex items-center justify-center gap-3 text-lg px-12 py-5">
                <Download size={22} />
                Download StudyFlow
              </Link>
              <button className="flex items-center gap-4 font-bold text-slate-900 hover:text-blue-600 transition-all group">
                <div className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-50 transition-all">
                  <PlayCircle size={24} />
                </div>
                <span className="text-lg">Product Tour</span>
              </button>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-10 pt-6">
              <div className="flex -space-x-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/150?img=${i+20}`} alt="Scholar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                 <p className="text-sm font-black text-slate-900 leading-none">Global Academic Trust</p>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">10,000+ Active Scholars</p>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="relative flex justify-center lg:justify-end">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/20 blur-[130px] rounded-full" />
             <PhoneMockup screen="dashboard" />
             
             {/* Dynamic Badges */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute top-1/4 -left-12 glass-container p-6 rounded-[2rem] hidden xl:flex items-center gap-5 border-blue-600/10 shadow-2xl shadow-blue-500/10"
             >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                  <Check size={28} strokeWidth={3} />
                </div>
                <div>
                  <p className="font-black text-slate-900 leading-tight">Sync Complete</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Local Database Secure</p>
                </div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-1/4 -right-12 glass-container p-6 rounded-[2rem] hidden xl:flex items-center gap-5 border-blue-600/10 shadow-2xl shadow-blue-500/10"
             >
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                  <Flame size={28} strokeWidth={3} />
                </div>
                <div>
                  <p className="font-black text-slate-900 leading-tight">12 Day Streak</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Consistency is Key</p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 bg-blue-600/5 opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-16">
          <p className="text-sm font-black text-blue-500/60 uppercase tracking-[0.4em]">Engineered for Absolute Sovereignty</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-40 hover:opacity-100 transition-all duration-1000 grayscale hover:grayscale-0">
             <div className="flex items-center gap-4 font-black text-3xl text-white tracking-tighter"><Database size={32} className="text-blue-500" /> SQLite</div>
             <div className="flex items-center gap-4 font-black text-3xl text-white tracking-tighter"><Lock size={32} className="text-blue-500" /> AES-256</div>
             <div className="flex items-center gap-4 font-black text-3xl text-white tracking-tighter"><Brain size={32} className="text-blue-500" /> Neural Engine</div>
             <div className="flex items-center gap-4 font-black text-3xl text-white tracking-tighter"><HardDrive size={32} className="text-blue-500" /> Local-Only</div>
          </div>
        </div>
      </section>

      {/* Macbook Presentation */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
           <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-6xl font-black text-slate-900 tracking-tight leading-tight">A Desktop Experience <br /><span className="text-blue-600 text-gradient">Unlike any other.</span></h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">Native performance meets unmatched UI design. StudyFlow desktop app provides the horsepower needed for intense research sessions.</p>
           </div>
           <MacbookMockup />
        </div>
      </section>

      {/* Professional Feature Section 1 */}
      <section id="features" className="py-40 px-6 bg-white/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">
          <div className="space-y-12">
            <div className="w-16 h-1 bg-blue-600 rounded-full" />
            <h2 className="text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Automated <br /> 
              <span className="text-blue-600">Daily Execution.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              StudyFlow intelligently scans your weekly templates to generate a precise daily agenda. Stop planning your day and start executing your goals.
            </p>
            <div className="grid gap-8">
              {[
                { icon: <Zap />, t: "Instant Generation", d: "Your day is ready at 12:00 AM automatically." },
                { icon: <Focus />, t: "Frictionless Workflow", d: "Single-click task completion with XP rewards." },
                { icon: <Layout />, t: "Dynamic View", d: "Real-time updates as you complete your study blocks." }
              ].map((f, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-white rounded-[1.25rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-xl tracking-tight mb-1">{f.t}</h4>
                    <p className="text-slate-500 font-medium">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full scale-150" />
             <PhoneMockup screen="tasks" />
          </div>
        </div>
      </section>

      {/* Feature Section 2: Visual Workload */}
      <section className="py-40 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">
          <div className="relative order-2 md:order-1">
             <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full scale-150" />
             <PhoneMockup screen="calendar" />
          </div>
          <div className="space-y-12 order-1 md:order-2">
            <div className="w-16 h-1 bg-blue-600 rounded-full" />
            <h2 className="text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Visualized <br /> 
              <span className="text-blue-600">Study Intensity.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Understand your semester at a glance. Our heatmap visualization shows upcoming exam clusters and syllabus deadlines before they become emergencies.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-4">
               <div className="space-y-2">
                  <h4 className="text-5xl font-black text-slate-900 tracking-tighter">0.0%</h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Cloud Data Leaks</p>
               </div>
               <div className="space-y-2">
                  <h4 className="text-5xl font-black text-blue-600 tracking-tighter">100%</h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Offline Availability</p>
               </div>
            </div>
            <div className="pt-8">
               <Link href="/docs" className="inline-flex items-center gap-3 font-black text-blue-600 hover:text-blue-700 transition-all group text-lg">
                  Explore Research Capabilities
                  <ChevronRight size={22} className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Premium CTA */}
      <section className="py-40 px-6">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto relative rounded-[4rem] bg-slate-900 p-24 text-center text-white overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)]"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full -mr-64 -mt-64" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/10 blur-[120px] rounded-full -ml-64 -mb-64" />
          
          <div className="relative z-10 space-y-12">
            <h2 className="text-7xl md:text-8xl font-black tracking-tight leading-[0.9] text-white">Your future is <br /><span className="text-blue-500 italic">local-first.</span></h2>
            <p className="text-2xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Stop compromising your data for productivity. Join the elite scholars mastering their workflow on StudyFlow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8">
               <Link href="/download" className="bg-blue-600 text-white px-16 py-6 rounded-full text-2xl font-black hover:bg-blue-500 transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/40">
                 Secure Access Now
               </Link>
               <Link href="/docs" className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-16 py-6 rounded-full text-2xl font-black hover:bg-white/10 transition-all transform hover:scale-105">
                 View API Specs
               </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
