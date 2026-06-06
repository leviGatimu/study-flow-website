import Link from "next/link";
import { Github, MessageSquare, Send, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 text-left">
        <div className="col-span-2 space-y-8">
          <Link href="/" className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-base">S</div>
            StudyFlow
          </Link>
          <p className="text-lg leading-relaxed max-w-sm text-slate-400">
            The world's most private academic workstation. Built for high-performers who value digital sovereignty.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Send size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><MessageSquare size={20} /></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Product</h3>
          <ul className="space-y-4 text-sm">
            <li><Link href="/#features" className="hover:text-blue-400 transition-colors">Features</Link></li>
            <li><Link href="/download" className="hover:text-blue-400 transition-colors">Download</Link></li>
            <li><Link href="/docs" className="hover:text-blue-400 transition-colors">Documentation</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h3>
          <ul className="space-y-4 text-sm">
            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link href="/support" className="hover:text-blue-400 transition-colors">Support</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Community</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="https://discord.gg/RQQfJAUCy" className="hover:text-blue-400 transition-colors">Discord</a></li>
            <li><a href="https://github.com/leviGatimu/Study-Flow" className="hover:text-blue-400 transition-colors">GitHub</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between items-center gap-6">
         <p className="text-slate-500">© 2026 StudyFlow. Local-first, academic workstation. Built by scholars.</p>
         <div className="flex gap-8 text-slate-500">
           <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
           <div className="flex items-center gap-2">
             <Globe size={14} />
             <span>English (US)</span>
           </div>
         </div>
      </div>
    </footer>
  );
}
