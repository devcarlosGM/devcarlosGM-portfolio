'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { projectsData } from '../../data/projects';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const projects = projectsData.map(project => ({
    id: project.id,
    title: project.title,
    description: project.shortDescription,
    image: project.image,
    tags: project.tags,
    link: `/proyecto/${project.id}`
  }));

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="proyectos" className="min-h-screen flex flex-col justify-center items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
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
        <div className="particles-container-slow">
          {particlePositions.layer2.map((pos, i) => (
            <div
              key={`p2-${i}`}
              className="particle particle-large"
              style={{
                left: `${pos.left.toFixed(4)}%`,
                top: `${pos.top.toFixed(4)}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${20 + (i % 4) * 3}s`
              }}
            />
          ))}
        </div>
        <div className="particles-container-slowest">
          {particlePositions.layer3.map((pos, i) => (
            <div
              key={`p3-${i}`}
              className="particle particle-xlarge"
              style={{
                left: `${pos.left.toFixed(4)}%`,
                top: `${pos.top.toFixed(4)}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${25 + (i % 3) * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl w-full relative flex flex-col items-center justify-center h-full mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent mb-8 sm:mb-12 text-center drop-shadow-[0_0_8px_rgba(139,92,246,0.15)]">
          Proyectos Destacados
        </h2>

        <div className="relative w-full flex justify-center">

          <div className="relative w-full max-w-4xl">

            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="min-w-full px-2 sm:px-4">
                    <div className="bg-black border border-violet-900/30 rounded-xl overflow-hidden hover:border-violet-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300 w-full group">
                      <a href={project.link} className="block h-full">

                        {project.image && (
                          <div className="relative h-40 sm:h-48 md:h-56 bg-gradient-to-br from-violet-950 to-black overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600 group-hover:scale-105 transition-transform duration-500">
                              <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                        )}

                        <div className="p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center">
                          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-violet-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-base">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="bg-violet-950/50 text-violet-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm border border-violet-500/40 shadow-[0_0_5px_rgba(139,92,246,0.1)]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <span className="inline-block border-2 border-violet-500 group-hover:bg-violet-500/20 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg font-medium transition-all duration-300 group-hover:scale-105 shadow-[0_0_8px_rgba(139,92,246,0.2)] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] text-xs sm:text-sm md:text-base">
                            Ver más
                          </span>
                        </div>

                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 lg:-left-16 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-violet-950 border border-violet-500/50 text-violet-400 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-[0_0_8px_rgba(139,92,246,0.2)] z-10"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>


            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 lg:-right-16 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-violet-950 border border-violet-500/50 text-violet-400 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-[0_0_8px_rgba(139,92,246,0.2)] z-10"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>
        </div>

        <div className="flex justify-center gap-1.5 sm:gap-2 mt-8 sm:mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-violet-500 w-6 sm:w-8 shadow-[0_0_6px_rgba(139,92,246,0.4)]'
                  : 'bg-violet-900/50 w-2 sm:w-3 hover:bg-violet-500/50'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}