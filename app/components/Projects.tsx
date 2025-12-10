'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'NoteTify - Asistente de Productividad IA',
      description: 'Ganador del 1er Lugar - Feria de Prototipos UTP 2025. Aplicación móvil con integración de Gemini AI, comandos de voz y sincronización en tiempo real.',
      image: '/projects/notetify.jpg',
      tags: ['React Native', 'Expo', 'Firebase', 'Gemini AI', 'TypeScript'],
      link: '#'
    },
    {
      title: 'Django E-commerce',
      description: 'Tienda en línea completa con autenticación, carrito de compras, gestión de inventario y flujos de pago.',
      image: '/projects/ecommerce.jpg',
      tags: ['Python', 'Django', 'SQLite'],
      link: '#'
    },
    {
      title: 'BomberBlox 3D',
      description: 'Juego multijugador inspirado en Bomberman con generación procedimental de mapas y sistemas multi-arena.',
      image: '/projects/bomberblox.jpg',
      tags: ['Lua', 'Roblox Studio', 'Blender'],
      link: '#'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="proyectos" className="py-24 px-6 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent mb-16 text-center drop-shadow-[0_0_8px_rgba(139,92,246,0.15)]">
          Proyectos Destacados
        </h2>
        
        <div className="relative px-16">
          
          
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="min-w-full flex justify-center items-center px-8"
                >
                  <div className="bg-black border border-violet-900/30 rounded-xl overflow-hidden hover:border-violet-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300 w-full max-w-4xl group">
                    <a href={project.link} className="block h-full">
                      {project.image && (
                        <div className="relative h-56 bg-gradient-to-br from-violet-950 to-black overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center text-gray-600 group-hover:scale-105 transition-transform duration-500">
                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                      )}
                      <div className="p-8">
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-violet-950/50 text-violet-300 px-3 py-1 rounded-full text-sm border border-violet-500/40 shadow-[0_0_5px_rgba(139,92,246,0.1)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-block border-2 border-violet-500 group-hover:bg-violet-500/20 text-white px-5 py-2 rounded-lg font-medium transition-all duration-300 group-hover:scale-105 shadow-[0_0_8px_rgba(139,92,246,0.2)] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] text-sm md:text-base">
                          Ver más
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black hover:bg-violet-950 border border-violet-500/50 text-violet-400 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-[0_0_8px_rgba(139,92,246,0.2)] hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] z-10"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black hover:bg-violet-950 border border-violet-500/50 text-violet-400 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-[0_0_8px_rgba(139,92,246,0.2)] hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] z-10"
            aria-label="Next project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-violet-500 w-8 shadow-[0_0_6px_rgba(139,92,246,0.4)]' 
                    : 'bg-violet-900/50 w-3 hover:bg-violet-500/50'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
