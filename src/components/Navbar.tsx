"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Download", href: "/download" },
    { label: "Documentation", href: "/docs" },
    { label: "About", href: "/about" },
    { label: "Support", href: "/support" }
  ];

  return (
    <nav className="bg-[#2c3338] text-white py-4 px-6 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-3">
          <img src="/logo.png" alt="StudyFlow Logo" className="w-10 h-10 object-contain" />
          StudyFlow
        </Link>
        
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`transition-colors hover:text-blue-400 ${pathname === link.href ? 'text-blue-400' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2c3338] border-t border-gray-700 mt-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`px-2 py-1 text-sm ${pathname === link.href ? 'text-blue-400' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
