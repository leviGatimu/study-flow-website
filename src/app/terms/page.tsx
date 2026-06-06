"use client";

import Link from "next/link";
import { FileText, Gavel, UserCheck, ShieldAlert, Scale, Info } from "lucide-react";

export default function Terms() {
  const sections = [
    {
      icon: <FileText className="text-blue-600" />,
      title: "1. Acceptance of Terms",
      content: "By downloading or using StudyFlow, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use the software."
    },
    {
      icon: <Scale className="text-blue-600" />,
      title: "2. Open Source License",
      content: "StudyFlow is distributed under an open-source license. You are free to use, modify, and distribute the software in accordance with the terms of that license (found in our GitHub repository)."
    },
    {
      icon: <UserCheck className="text-blue-600" />,
      title: "3. User Responsibility",
      content: "You are responsible for your own data and the API keys you provide. StudyFlow is provided 'as is' without any warranties. We are not responsible for any data loss or issues arising from the use of third-party AI providers."
    },
    {
      icon: <ShieldAlert className="text-blue-600" />,
      title: "4. Intellectual Property",
      content: "The StudyFlow name, logo, and original website content are the property of the StudyFlow project and its contributors. While the software itself is open-source, the branding and trademarks remain protected."
    },
    {
      icon: <Gavel className="text-blue-600" />,
      title: "5. Limitation of Liability",
      content: "In no event shall StudyFlow, its developers, or contributors be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the software, even if StudyFlow has been notified of the possibility of such damage."
    },
    {
      icon: <Info className="text-blue-600" />,
      title: "6. Governing Law",
      content: "These terms are governed by and construed in accordance with the laws of the jurisdiction in which the project maintainers operate, and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
    }
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
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Terms of <span className="text-blue-600">Service</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              The rules and guidelines for using the StudyFlow platform.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto py-20 px-6">
          <div className="space-y-12">
            {sections.map((section, i) => (
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
