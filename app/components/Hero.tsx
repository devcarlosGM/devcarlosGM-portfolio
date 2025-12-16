'use client';

import { useEffect, useState, useMemo } from 'react';
import RobotSVG from './RobotSVG';

// Declaración para lottie-player
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': any;
    }
  }
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [lottieLoaded, setLottieLoaded] = useState(false);
  
  const fullName = 'Carlos Javier Gayosso Martinez';
  const roles = [
    'Software Developer',
    'Full-Stack Developer', 
    'Mobile Developer',
    'Problem Solver'
  ];

  
  const particlePositions = useMemo(() => {
    const getRandomPosition = (seed: number) => ({
      left: Math.abs(Math.sin(seed * 12.9898 + 78.233) * 43758.5453) % 100,
      top: Math.abs(Math.sin(seed * 45.164 + 94.673) * 19134.2345) % 100
    });

    return {
      layer1: Array.from({ length: 40 }, (_, i) => getRandomPosition(i)),
      layer2: Array.from({ length: 30 }, (_, i) => getRandomPosition(i + 100)),
      layer3: Array.from({ length: 20 }, (_, i) => getRandomPosition(i + 200))
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);
    if (typeof window !== 'undefined' && !window.customElements.get('lottie-player')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
      script.onload = () => setLottieLoaded(true);
      document.head.appendChild(script);
    } else {
      setLottieLoaded(true);
    }
  }, []);

  
  // Typing effect for name
  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullName[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Typing effect for roles
  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    if (!isDeleting && displayedText.length < fullName.length) {
      return;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullName.length + currentRole.length) {
          setDisplayedText(prev => prev + currentRole[displayedText.length - fullName.length]);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > fullName.length) {
          setDisplayedText(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-black">
      {/* Sutil degradado morado desde arriba */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-black to-black" style={{ zIndex: 1 }} />
      
      {/* Floating particles overlay - POSICIONES RANDOM */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 3 }}>
        {/* Floating particles layer 1 */}
        <div className="particles-container">
          {particlePositions.layer1.map((pos, i) => (
            <div
              key={`p1-${i}`}
              className="particle"
              style={{
                left: `${pos.left.toFixed(4)}%`,
                top: `${pos.top.toFixed(4)}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${15 + (i % 5) * 2}s`
              }}
            />
          ))}
        </div>
        {/* Floating particles layer 2 (slower, larger) */}
        <div className="particles-container-slow">
          {particlePositions.layer2.map((pos, i) => (
            <div
              key={`p2-${i}`}
              className="particle-large"
              style={{
                left: `${pos.left.toFixed(4)}%`,
                top: `${pos.top.toFixed(4)}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${20 + (i % 4) * 3}s`
              }}
            />
          ))}
        </div>
        {/* Floating particles layer 3 (muy lentas, extra grandes) */}
        <div className="particles-container-slow">
          {particlePositions.layer3.map((pos, i) => (
            <div
              key={`p3-${i}`}
              className="particle"
              style={{
                left: `${pos.left.toFixed(4)}%`,
                top: `${pos.top.toFixed(4)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${25 + (i % 3) * 4}s`,
                width: '3px',
                height: '3px'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" style={{ zIndex: 5 }} />
      
      <div className={`max-w-5xl w-full mx-auto flex flex-col items-center text-center space-y-6 relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`} style={{ zIndex: 10 }}>
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(139,92,246,0.2)]">
              Carlos Javier Gayosso Martinez
            </span>
          </h1>
          <div className="text-2xl md:text-4xl font-semibold text-violet-400 min-h-[3rem] flex items-center animate-fade-in-up animation-delay-200">
            {displayedText.substring(fullName.length)}
            <span className="inline-block w-0.5 h-8 md:h-10 bg-violet-500 ml-1 animate-cursor-blink shadow-[0_0_8px_rgba(139,92,246,0.4)]"></span>
          </div>
        </div>
        
        <p className="text-lg text-gray-400 max-w-2xl animate-fade-in-up animation-delay-300">
            Full Stack en formación. Enfocado en Python, JavaScript y soluciones web.</p>
        
        <div className="flex flex-wrap gap-4 pt-6 justify-center animate-fade-in-up animation-delay-400">
          <a
            href="#proyectos"
            className="relative border-2 border-violet-500 hover:bg-violet-500/20 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-[0_0_8px_rgba(139,92,246,0.2)] hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
          >
            Ver proyectos
          </a>
          <a
            href="/devcarlosGM-portfolio/Carlos_Javier_GM_CV.pdf"
            className="relative border-2 border-violet-500 hover:bg-violet-500/20 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-[0_0_8px_rgba(139,92,246,0.2)] hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
          >
            Descargar CV
          </a>
        </div>
        
        {/* Robot SVG Animado - Más pequeño y al final */}
        <div className="mt-8 animate-fade-in-up animation-delay-600">
          <RobotSVG />
        </div>
      </div>
    </section>
  );
}
