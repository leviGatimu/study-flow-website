"use client";

import Link from "next/link";

export default function Privacy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#f0f2f5] py-20 px-6 border-b border-gray-200 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl font-light text-[#2c3338]">Privacy Policy</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Your privacy is our priority. Learn how StudyFlow protects your personal and academic data.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-20 px-6 prose prose-gray prose-lg">
        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-light text-gray-800 border-b border-gray-100 pb-4">1. Data Sovereignty</h2>
            <p className="text-gray-700 leading-relaxed">
              StudyFlow is built on a **local-first** architecture. This means that by default, all your study notes, document summaries, and personal configurations are stored exclusively on your local machine. We do not have access to your data, and we do not store it on our servers.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-light text-gray-800 border-b border-gray-100 pb-4">2. AI Features & API Keys</h2>
            <p className="text-gray-700 leading-relaxed">
              When you use AI features (such as document synthesis), the application communicates directly with the AI provider (e.g., Google Gemini) using the API key you provide. 
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Your API key is stored locally and encrypted.</li>
              <li>Data sent to the AI provider is subject to their own privacy policies.</li>
              <li>StudyFlow does not intercept or log these communications.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-light text-gray-800 border-b border-gray-100 pb-4">3. No Tracking</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not use tracking cookies, analytics scripts, or any other form of behavioral monitoring. Our website and application are designed to be as private as possible.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-light text-gray-800 border-b border-gray-100 pb-4">4. Open Source Transparency</h2>
            <p className="text-gray-700 leading-relaxed">
              As an open-source project, our code is available for public audit on GitHub. You can verify exactly how your data is handled by reviewing our source code.
            </p>
          </section>
          
          <div className="mt-20 pt-10 border-t border-gray-100 text-center">
             <Link href="/" className="wp-button-primary">
               Back to Home
             </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
