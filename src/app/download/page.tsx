"use client";

import { Download, Monitor, Laptop, Terminal, Check, Info, AlertCircle, Cpu, HardDrive } from "lucide-react";
import Link from "next/link";

export default function DownloadPage() {
  const platforms = [
    {
      name: "Windows",
      icon: Monitor,
      version: "1.0.0",
      type: ".exe (Recommended)",
      size: "100.6 MB",
      href: "/StudyTrackerSetup.exe",
      primary: true,
      badge: "Stable"
    },
    {
      name: "Windows Portable",
      icon: Laptop,
      version: "1.0.0",
      type: ".zip",
      size: "85.2 MB",
      href: "#",
      primary: false,
      badge: "Portable"
    },
    {
      name: "MacOS",
      icon: Laptop,
      version: "1.0.0",
      type: ".dmg",
      size: "92.4 MB",
      href: "#",
      primary: false,
      badge: "Coming Soon",
      disabled: true
    },
    {
      name: "Linux",
      icon: Terminal,
      version: "1.0.0",
      type: ".AppImage",
      size: "78.9 MB",
      href: "#",
      primary: false,
      badge: "Coming Soon",
      disabled: true
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#f0f2f5] py-20 px-6 border-b border-gray-200 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl font-light text-[#2c3338]">Download StudyFlow</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Choose the version that best fits your workflow. StudyFlow is open-source and respects your digital sovereignty.
          </p>
        </div>
      </section>

      {/* Download Grid */}
      <main className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((p, i) => (
            <div key={i} className={`wp-card flex flex-col h-full relative ${p.disabled ? 'opacity-60 grayscale' : ''}`}>
              {p.badge && (
                <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${p.primary ? 'bg-blue-100 text-[#21759b]' : 'bg-gray-100 text-gray-500'}`}>
                  {p.badge}
                </span>
              )}
              <div className="mb-6">
                <p.icon className={`w-10 h-10 ${p.primary ? 'text-[#21759b]' : 'text-gray-400'}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">
                Version {p.version} ({p.type}) <br />
                Size: {p.size}
              </p>
              
              {p.disabled ? (
                <button disabled className="w-full bg-gray-200 text-gray-400 font-bold py-3 rounded cursor-not-allowed">
                  Download
                </button>
              ) : (
                <a 
                  href={p.href} 
                  className={`w-full text-center font-bold py-3 rounded transition-colors ${p.primary ? 'bg-[#21759b] hover:bg-[#1b5e7d] text-white shadow-lg' : 'border-2 border-[#21759b] text-[#21759b] hover:bg-blue-50'}`}
                >
                  Download
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Requirements & Info */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-light text-gray-800">Prerequisites</h2>
            <div className="wp-card space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-50 p-2 rounded text-[#21759b]">
                  <Cpu size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">Hardware Requirements</p>
                  <p className="text-sm text-gray-600">Dual-core CPU, 4GB RAM (8GB recommended), and 500MB SSD space.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-50 p-2 rounded text-[#21759b]">
                  <Monitor size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">Operating System</p>
                  <p className="text-sm text-gray-600">Windows 10 Build 19041 or later. macOS 11.0 Big Sur or later.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-light text-gray-800">Verification</h2>
            <div className="wp-card space-y-4">
              <div className="flex items-start gap-3">
                 <ShieldCheck className="text-green-600 mt-1" size={18} />
                 <div>
                    <p className="font-bold text-sm">Secure Signatures</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Our Windows installer is digitally signed to ensure its authenticity. You may see a "Windows Protected Your PC" prompt on first run—click "More Info" and "Run Anyway" to proceed.
                    </p>
                 </div>
              </div>
              <div className="flex items-start gap-3 pt-4 border-t border-gray-100">
                 <Terminal className="text-gray-400 mt-1" size={18} />
                 <div className="w-full">
                    <p className="font-bold text-sm">SHA-256 Checksum</p>
                    <code className="block mt-2 p-2 bg-gray-50 border border-gray-200 rounded text-[10px] text-gray-500 break-all">
                      3f9b8c7d6e5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9
                    </code>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Change Log Placeholder */}
        <section className="mt-32 border-t border-gray-100 pt-20">
           <h2 className="wp-section-title">What's new in v1.0.0</h2>
           <div className="space-y-6 mt-10">
              {[
                { t: "Neural Engine Integration", d: "Deep integration with Google Gemini 1.5 Pro for document synthesis." },
                { t: "Local SQLite Storage", d: "Zero-cloud database architecture for maximum academic privacy." },
                { t: "PDF Vectorization", d: "Automatic processing of research papers into manageable knowledge blocks." },
                { t: "Workspace Sync", d: "Manually export and import entire knowledge bases across your machines." }
              ].map((change, i) => (
                <div key={i} className="flex gap-4 items-start border-l-4 border-gray-100 pl-6 py-2">
                  <div className="font-bold text-[#2c3338] min-w-[200px]">{change.t}</div>
                  <div className="text-gray-600 text-sm">{change.d}</div>
                </div>
              ))}
           </div>
        </section>
      </main>
    </div>
  );
}

import { ShieldCheck } from "lucide-react";
