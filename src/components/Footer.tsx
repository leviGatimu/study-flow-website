import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2c3338] text-gray-400 py-16 px-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-left">
        <div className="col-span-2">
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">About StudyFlow</h3>
          <p className="text-sm leading-relaxed max-w-md">
            StudyFlow is open source software you can use to create a beautiful personal knowledge base. 
            We believe in the power of local data and scholarly privacy.
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Resources</h3>
          <ul className="text-sm space-y-2">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/download" className="hover:text-white transition-colors">Download</Link></li>
            <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Community</h3>
          <ul className="text-sm space-y-2">
            <li><a href="https://discord.gg/RQQfJAUCy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord Server</a></li>
            <li><a href="https://github.com/leviGatimu/Study-Flow" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub Repository</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-700 text-xs flex justify-between items-center text-left">
         <p>© 2026 StudyFlow. Built with pride by scholars.</p>
         <div className="flex gap-6">
           <Link href="/privacy" className="hover:text-white">Privacy</Link>
           <Link href="/terms" className="hover:text-white">Terms of Service</Link>
         </div>
      </div>
    </footer>
  );
}
