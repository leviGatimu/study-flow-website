"use client";

import Link from "next/link";

export default function Terms() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#f0f2f5] py-20 px-6 border-b border-gray-200 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl font-light text-[#2c3338]">Terms of Service</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            The rules and guidelines for using the StudyFlow platform.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-20 px-6 prose prose-gray prose-lg">
        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-light text-gray-800 border-b border-gray-100 pb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By downloading or using StudyFlow, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use the software.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-light text-gray-800 border-b border-gray-100 pb-4">2. Open Source License</h2>
            <p className="text-gray-700 leading-relaxed">
              StudyFlow is distributed under an open-source license. You are free to use, modify, and distribute the software in accordance with the terms of that license (found in our GitHub repository).
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-light text-gray-800 border-b border-gray-100 pb-4">3. User Responsibility</h2>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for your own data and the API keys you provide. StudyFlow is provided "as is" without any warranties. We are not responsible for any data loss or issues arising from the use of third-party AI providers.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-light text-gray-800 border-b border-gray-100 pb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              The StudyFlow name, logo, and original website content are the property of the StudyFlow project and its contributors. While the software itself is open-source, the branding and trademarks remain protected.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-light text-gray-800 border-b border-gray-100 pb-4">5. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall StudyFlow, its developers, or contributors be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the software, even if StudyFlow has been notified of the possibility of such damage.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-light text-gray-800 border-b border-gray-100 pb-4">6. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms are governed by and construed in accordance with the laws of the jurisdiction in which the project maintainers operate, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-light text-gray-800 border-b border-gray-100 pb-4">7. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms of Service, please reach out to us through our Discord community or via GitHub.
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
