'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-violet-900/30 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-lg bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(139,92,246,0.25)]">
            devcarlosGM
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-gray-400 hover:text-violet-400 transition-all duration-300 hover:drop-shadow-[0_0_4px_rgba(139,92,246,0.3)]">
              Inicio
            </Link>
            <Link href="#proyectos" className="text-gray-400 hover:text-violet-400 transition-all duration-300 hover:drop-shadow-[0_0_4px_rgba(139,92,246,0.3)]">
              Proyectos
            </Link>
            <Link href="#sobre-mi" className="text-gray-400 hover:text-violet-400 transition-all duration-300 hover:drop-shadow-[0_0_4px_rgba(139,92,246,0.3)]">
              Sobre mi
            </Link>
            <Link href="#contacto" className="text-gray-400 hover:text-violet-400 transition-all duration-300 hover:drop-shadow-[0_0_4px_rgba(139,92,246,0.3)]">
              Contacto
            </Link>
            <button
              onClick={toggleTheme}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
