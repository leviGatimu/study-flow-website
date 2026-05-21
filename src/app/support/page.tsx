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
    <div className="min-h-screen bg-white">
      {/* Hero Section with Search */}
      <section className="bg-[#21759b] py-20 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-5xl font-light">How can we help?</h1>
          <p className="text-xl opacity-90">
            Search our documentation or browse our support categories below.
          </p>
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search help topics..." 
              className="w-full bg-white text-gray-800 rounded-full py-5 px-8 pr-16 text-lg shadow-xl focus:outline-none focus:ring-4 focus:ring-white/20"
            />
            <button className="absolute right-3 top-2.5 bg-[#21759b] p-3 rounded-full hover:bg-[#1b5e7d] transition-colors">
              <Search size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <main className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="wp-card flex flex-col items-start gap-6">
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full text-[#21759b]">
                 <cat.icon size={24} />
              </div>
              <h2 className="text-2xl font-semibold">{cat.title}</h2>
              <ul className="space-y-4 w-full">
                {cat.links.map((link, j) => (
                  <li key={j}>
                    {link.href.startsWith("http") ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#21759b] hover:underline flex items-center justify-between group">
                        {link.label}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <Link href={link.href} className="text-[#21759b] hover:underline flex items-center justify-between group">
                        {link.label}
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="mt-32 space-y-12">
           <h2 className="wp-section-title text-center">Frequently Asked Questions</h2>
           <div className="max-w-3xl mx-auto grid gap-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-bold text-[#2c3338] mb-2">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
           <div className="text-center pt-8">
              <Link href="/docs" className="wp-button-primary">
                View All Documentation
              </Link>
           </div>
        </section>

        {/* Forum CTA */}
        <div className="mt-32 bg-[#2c3338] rounded-xl p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="space-y-4 max-w-xl">
              <div className="flex items-center gap-3 text-blue-400">
                <MessageSquare size={32} />
                <span className="font-bold uppercase tracking-widest text-sm">Community Forums</span>
              </div>
              <h2 className="text-3xl font-light">Join the conversation.</h2>
              <p className="opacity-70 leading-relaxed">
                Connect with thousands of other StudyFlow users, share your workflows, and get help from the community experts.
              </p>
           </div>
           <a href="https://discord.gg/RQQfJAUCy" target="_blank" rel="noopener noreferrer" className="bg-white text-[#2c3338] font-bold py-4 px-10 rounded hover:bg-gray-100 transition-colors flex items-center gap-2 whitespace-nowrap">
             Join the Discord <ExternalLink size={18} />
           </a>
        </div>
      </main>
    </div>
  );
}
