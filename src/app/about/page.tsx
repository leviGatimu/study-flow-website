"use client";

import Link from "next/link";
import { ShieldCheck, User } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#f0f2f5] py-20 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-light text-[#2c3338]">About StudyFlow</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Democratizing personal knowledge management through open-source software and local-first principles.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-20 px-6 space-y-24">
        
        {/* Mission Statement */}
        <div className="space-y-8">
          <h2 className="text-3xl font-light text-gray-800">Our Mission</h2>
          <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
            <p>
              StudyFlow was founded on the belief that your academic data and personal insights should belong to you, not a cloud provider. In an era of data harvesting and subscription models, we provide a powerful, free, and private alternative for scholars everywhere.
            </p>
            <p>
              We are dedicated to building a tool that is as fast as it is flexible, allowing you to focus on what matters most: learning and discovery.
            </p>
          </div>
        </div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="wp-card flex flex-col items-start gap-6">
            <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full text-[#21759b]">
               <ShieldCheck size={24} />
            </div>
            <h3 className="text-2xl font-semibold">Privacy First</h3>
            <p className="text-gray-600 leading-relaxed">
              We never track your usage or store your data on our servers. Everything lives locally on your hard drive in an encrypted database.
            </p>
          </div>

          <div className="wp-card flex flex-col items-start gap-6">
            <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full text-[#21759b]">
               <User size={24} />
            </div>
            <h3 className="text-2xl font-semibold">User Centric</h3>
            <p className="text-gray-600 leading-relaxed">
              Every feature is designed to reduce friction in your workflow. We prioritize speed, clarity, and ease of use above all else.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-12">
           <h2 className="text-3xl font-light text-gray-800 text-center">Core Values</h2>
           <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Transparency", desc: "Our code is open-source and audited by the community." },
                { title: "Sovereignty", desc: "You have complete control over your knowledge base." },
                { title: "Excellence", desc: "We strive for high-performance software for high-performing students." }
              ].map((value, i) => (
                <div key={i} className="text-center space-y-4">
                  <div className="w-2 h-2 bg-[#21759b] rounded-full mx-auto" />
                  <h4 className="font-bold text-lg">{value.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* CTA */}
        <div className="bg-[#f0f2f5] p-12 rounded text-center space-y-6 border border-gray-200">
           <h2 className="text-2xl font-light">Join the StudyFlow Community</h2>
           <p className="text-gray-600">Help us build the future of personal knowledge management.</p>
           <div className="pt-4">
             <Link href="/" className="wp-button-primary">
               Download Now
             </Link>
           </div>
        </div>

      </main>
    </div>
  );
}
