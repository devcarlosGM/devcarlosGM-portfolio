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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-violet-900/30 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-base sm:text-lg bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(139,92,246,0.25)]">
            devcarlosGM
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="#home" className="text-sm lg:text-base text-gray-400 hover:text-violet-400 transition-all duration-300 hover:drop-shadow-[0_0_4px_rgba(139,92,246,0.3)]">
              Inicio
            </Link>
            <Link href="#proyectos" className="text-sm lg:text-base text-gray-400 hover:text-violet-400 transition-all duration-300 hover:drop-shadow-[0_0_4px_rgba(139,92,246,0.3)]">
              Proyectos
            </Link>
            <Link href="#sobre-mi" className="text-sm lg:text-base text-gray-400 hover:text-violet-400 transition-all duration-300 hover:drop-shadow-[0_0_4px_rgba(139,92,246,0.3)]">
              Sobre mi
            </Link>
            <Link href="#contacto" className="text-sm lg:text-base text-gray-400 hover:text-violet-400 transition-all duration-300 hover:drop-shadow-[0_0_4px_rgba(139,92,246,0.3)]">
              Contacto
            </Link>
          </div>

 
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-400 hover:text-violet-400 transition-colors p-2"
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
      </div>


      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-violet-900/30 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              href="#home" 
              onClick={closeMenu}
              className="text-gray-400 hover:text-violet-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-violet-900/10"
            >
              Inicio
            </Link>
            <Link 
              href="#proyectos" 
              onClick={closeMenu}
              className="text-gray-400 hover:text-violet-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-violet-900/10"
            >
              Proyectos
            </Link>
            <Link 
              href="#sobre-mi" 
              onClick={closeMenu}
              className="text-gray-400 hover:text-violet-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-violet-900/10"
            >
              Sobre mi
            </Link>
            <Link 
              href="#contacto" 
              onClick={closeMenu}
              className="text-gray-400 hover:text-violet-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-violet-900/10"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
