"use client";

import { Download, Globe, Server, ShieldCheck, ChevronRight, Check } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#f0f2f5] py-20 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-light text-[#2c3338]">Get StudyFlow</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            The world’s most popular personal study management software. 
            Download the installer and start building your knowledge base today.
          </p>
          
          <div className="pt-4">
            <a 
              href="/StudyTrackerSetup.exe" 
              className="wp-button-primary text-xl px-12 py-5"
            >
              Download StudyFlow 1.0
            </a>
            <p className="text-sm text-gray-500 mt-4">
              It’s easy to install and always free to use.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Requirements Card */}
          <div className="wp-card flex flex-col items-start gap-6">
            <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full text-[#21759b]">
               <Server size={24} />
            </div>
            <h2 className="text-2xl font-semibold">System Requirements</h2>
            <p className="text-gray-600">To run StudyFlow, we recommend your system meets the following:</p>
            <ul className="space-y-3 w-full">
              {[
                "Windows 10 or 11 (64-bit)",
                "Minimum 4GB RAM (8GB recommended)",
                "500MB of free disk space",
                "Display resolution of 1280x800 or higher"
              ].map((req, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <Check className="text-green-600" size={16} />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Security Card */}
          <div className="wp-card flex flex-col items-start gap-6">
            <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full text-[#21759b]">
               <ShieldCheck size={24} />
            </div>
            <h2 className="text-2xl font-semibold">Secure & Private</h2>
            <p className="text-gray-600">
              StudyFlow is designed with your privacy in mind. All data remains on your local machine.
            </p>
            <div className="mt-auto pt-6">
              <a href="/docs" className="text-[#21759b] hover:underline font-medium flex items-center gap-1">
                Read our security policy <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Secondary Download Section */}
        <div className="mt-24 border-t border-gray-100 pt-20">
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="wp-section-title">Other ways to get StudyFlow</h2>
            <p className="text-gray-600">
              Need a portable version or want to contribute to the project?
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
               <button className="border-2 border-[#21759b] text-[#21759b] font-bold py-2 px-6 rounded hover:bg-blue-50 transition-colors">
                 Download .ZIP
               </button>
               <button className="border-2 border-[#21759b] text-[#21759b] font-bold py-2 px-6 rounded hover:bg-blue-50 transition-colors">
                 Source Code
               </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
