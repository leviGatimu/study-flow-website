"use client";

import Link from "next/link";
import { MessageSquare, LifeBuoy, Mail, Users, ChevronRight, Search, ExternalLink } from "lucide-react";

export default function Support() {
  const categories = [
    {
      title: "Self-Service",
      icon: LifeBuoy,
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Video Tutorials", href: "#" },
        { label: "Developer Blog", href: "#" }
      ]
    },
    {
      title: "Community Support",
      icon: Users,
      links: [
        { label: "Discord Server", href: "https://discord.gg/RQQfJAUCy" },
        { label: "GitHub Repository", href: "https://github.com/leviGatimu/Study-Flow" },
        { label: "Community Forum", href: "#" }
      ]
    },
    {
      title: "Contact Us",
      icon: Mail,
      links: [
        { label: "Open a Ticket", href: "#" },
        { label: "Email Support", href: "mailto:support@studyflow.io" },
        { label: "Security Reporting", href: "#" }
      ]
    }
  ];

  const faqs = [
    { q: "Is StudyFlow really free?", a: "Yes, the core version of StudyFlow is open-source and free to use forever." },
    { q: "Where is my data stored?", a: "StudyFlow is local-first. Your data is stored on your machine in an encrypted SQLite database." },
    { q: "Does it work on Mac or Linux?", a: "Currently, we only support Windows 10/11. Mac and Linux versions are in our long-term roadmap." },
    { q: "How do I update the software?", a: "StudyFlow will notify you when an update is available. You can also download the latest installer from our home page." }
  ];

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
          <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom duration-1000">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight">
              How can we <span className="text-blue-600">help?</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Search our documentation or browse our support categories below.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="Search help topics..." 
                className="w-full bg-white/60 backdrop-blur-md border border-white/40 rounded-full py-6 px-10 pr-20 text-lg shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all"
              />
              <button className="absolute right-3 top-3 bg-blue-600 p-4 rounded-full hover:bg-blue-700 transition-colors shadow-lg">
                <Search size={24} className="text-white" />
              </button>
            </div>
          </div>
        </section>

        {/* Support Categories */}
        <main className="max-w-7xl mx-auto py-20 px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="glass-card flex flex-col items-start gap-8 hover:bg-white/60 transition-colors">
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-2xl text-blue-600 transition-transform hover:scale-110">
                   <cat.icon size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{cat.title}</h2>
                <ul className="space-y-4 w-full">
                  {cat.links.map((link, j) => (
                    <li key={j} className="border-b border-white/20 pb-2 last:border-0">
                      {link.href.startsWith("http") ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 font-semibold flex items-center justify-between group transition-colors">
                          {link.label}
                          <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </a>
                      ) : (
                        <Link href={link.href} className="text-gray-600 hover:text-blue-600 font-semibold flex items-center justify-between group transition-colors">
                          {link.label}
                          <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <section className="mt-40 space-y-16">
             <div className="text-center space-y-4">
                <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Frequently Asked Questions</h2>
                <p className="text-gray-600 text-lg">Everything you need to know about StudyFlow.</p>
             </div>
             
             <div className="max-w-4xl mx-auto grid gap-8">
                {faqs.map((faq, i) => (
                  <div key={i} className="glass-card p-10 hover:bg-white/60 transition-colors group">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex gap-4">
                       <span className="text-blue-600 font-mono">Q.</span>
                       {faq.q}
                    </h3>
                    <div className="flex gap-4">
                       <span className="text-gray-300 font-mono flex-shrink-0">A.</span>
                       <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
             </div>
             <div className="text-center pt-10">
                <Link href="/docs" className="btn-primary inline-flex">
                  View All Documentation
                </Link>
             </div>
          </section>

          {/* Forum CTA */}
          <div className="mt-40 glass-card bg-gray-900 text-white p-16 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full -ml-32 -mt-32"></div>
             <div className="space-y-6 max-w-xl relative z-10">
                <div className="flex items-center gap-4 text-blue-400">
                  <div className="p-3 bg-blue-400/10 rounded-2xl">
                    <MessageSquare size={32} />
                  </div>
                  <span className="font-bold uppercase tracking-[0.2em] text-sm">Community Forums</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Join the conversation.</h2>
                <p className="text-gray-400 text-xl leading-relaxed">
                  Connect with thousands of other StudyFlow users, share your workflows, and get help from the community experts.
                </p>
             </div>
             <a href="https://discord.gg/RQQfJAUCy" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white font-bold py-5 px-12 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3 whitespace-nowrap text-lg relative z-10">
               Join the Discord <ExternalLink size={20} />
             </a>
          </div>
        </main>
      </div>
    </div>
  );
}
