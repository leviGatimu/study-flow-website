"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Features", href: "/#features" },
    { label: "About", href: "/about" },
    { label: "Docs", href: "/docs" },
    { label: "Support", href: "/support" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-3 nav-blur' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-black flex items-center gap-2 text-slate-900 tracking-tight">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            <motion.div 
              animate={{ rotate: [0, 90, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              S
            </motion.div>
          </div>
          StudyFlow
        </Link>
        
        <div className="hidden md:flex gap-10 items-center">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`text-sm font-bold transition-all hover:text-blue-600 ${pathname === link.href ? 'text-blue-600' : 'text-slate-600'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/download" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all flex items-center gap-2 group">
            Download
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 py-6 px-6 flex flex-col gap-6 shadow-xl shadow-slate-200/50"
          >
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-lg font-bold text-slate-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/download" className="bg-blue-600 text-white py-4 rounded-2xl font-bold text-center">
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
