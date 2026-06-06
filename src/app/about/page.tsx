"use client";

import { motion } from "framer-motion";
import { Shield, User, Target, Zap, Globe, Heart, Layers, Cpu, Sparkles } from "lucide-react";
import Link from "next/link";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen">
      <div className="bg-mesh" />

      <div className="relative z-10 pt-40 pb-32 px-6">
        {/* Hero */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center space-y-10 mb-32"
        >
          <motion.div variants={item} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-200">
             <Layers size={14} /> Our Philosophy
          </motion.div>
          <motion.h1 variants={item} className="text-7xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
            The Future is <br /><span className="text-gradient italic text-8xl md:text-9xl">Private.</span>
          </motion.h1>
          <motion.p variants={item} className="text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            StudyFlow was engineered to dismantle the dependency on cloud-based tracking. We build tools that respect your intellectual property and academic privacy.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <main className="max-w-7xl mx-auto space-y-40">
          
          {/* Story Section */}
          <section className="grid md:grid-cols-2 gap-32 items-center">
            <div className="space-y-10">
               <div className="w-16 h-1 bg-blue-600 rounded-full" />
               <h2 className="text-6xl font-black text-slate-900 tracking-tight leading-tight">Built by Scholars, <br />for Scholars.</h2>
               <p className="text-xl text-slate-600 leading-relaxed font-medium">
                 In an era of aggressive data harvesting, we provide a sophisticated alternative. StudyFlow is more than a tool; it's a statement about digital sovereignty. We believe your research papers, notes, and schedules belong exclusively to you.
               </p>
               <div className="flex gap-16">
                  <div>
                    <h4 className="text-5xl font-black text-blue-600 tracking-tighter italic">2026</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Workstation Launched</p>
                  </div>
                  <div>
                    <h4 className="text-5xl font-black text-blue-600 tracking-tighter italic">100%</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Zero-Cloud Logic</p>
                  </div>
               </div>
            </div>
            <div className="glass-container aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative group">
               <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
               <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071" 
                alt="Our Engineering Team" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
               />
            </div>
          </section>

          {/* Value Pillars */}
          <section className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield />, t: "Absolute Privacy", d: "Military-grade local encryption. Your study data never touches a server." },
              { icon: <Cpu />, t: "Native Speed", d: "Bypassing the cloud means instant response times for search and AI tasks." },
              { icon: <Target />, t: "Elite Standards", d: "Designed for high-performance students who demand precision and reliability." }
            ].map((v, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -15 }}
                className="glass-container p-16 rounded-[4rem] space-y-8 border-slate-100 hover:bg-white transition-all duration-500"
              >
                <div className="w-20 h-20 bg-blue-50 rounded-[2rem] flex items-center justify-center text-blue-600 shadow-xl shadow-blue-500/5">
                  {v.icon}
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">{v.t}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </section>

          {/* Final Vision CTA */}
          <section className="text-center space-y-12">
             <div className="w-20 h-20 bg-slate-900 rounded-[2.5rem] flex items-center justify-center text-white mx-auto shadow-2xl">
                <Sparkles size={32} className="text-blue-500 animate-pulse" />
             </div>
             <h2 className="text-7xl font-black text-slate-900 tracking-tighter">The Vision <br />is <span className="text-blue-600 italic">Sovereign.</span></h2>
             <p className="text-2xl text-slate-600 max-w-2xl mx-auto font-medium">Join the new generation of elite scholars building their future on private foundations.</p>
             <div className="flex justify-center pt-8">
               <Link href="/download" className="btn-shiny px-16 py-6 text-xl">
                 Secure Your Workstation
               </Link>
             </div>
          </section>

        </main>
      </div>
    </div>
  );
}
