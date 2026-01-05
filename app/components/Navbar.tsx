'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="absolute top-4 sm:top-6 left-0 right-0 z-50 flex flex-col items-center px-4 gap-2">
      <div className="w-full max-w-5xl bg-black/30 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.15)] px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-between transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]">
        <Link href="/" className="font-bold text-lg sm:text-xl tracking-tight text-white hover:text-violet-300 transition-colors duration-300">
          Carlos Gayosso<span className="text-violet-500"></span>
        </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
              Inicio
            </Link>
            <Link href="#proyectos" className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
              Proyectos
            </Link>
            <Link href="#sobre-mi" className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
              Sobre mi
            </Link>
            <Link href="#contacto" className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
              Contacto
            </Link>
          </div>

 
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
      </div>


      {isMenuOpen && (
        <div className="md:hidden w-full max-w-5xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-4 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-2 fade-in duration-200">
            <Link 
              href="#home" 
              onClick={closeMenu}
              className="text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 py-3 px-6 rounded-xl font-medium"
            >
              Inicio
            </Link>
            <Link 
              href="#proyectos" 
              onClick={closeMenu}
              className="text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 py-3 px-6 rounded-xl font-medium"
            >
              Proyectos
            </Link>
            <Link 
              href="#sobre-mi" 
              onClick={closeMenu}
              className="text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 py-3 px-6 rounded-xl font-medium"
            >
              Sobre mi
            </Link>
            <Link 
              href="#contacto" 
              onClick={closeMenu}
              className="text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 py-3 px-6 rounded-xl font-medium"
            >
              Contacto
            </Link>
        </div>
      )}
    </nav>
  );
}
