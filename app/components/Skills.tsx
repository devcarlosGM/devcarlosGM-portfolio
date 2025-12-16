'use client';

import { useState } from 'react';

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills = [
    {
      title: 'Frontend y Móvil',
      icon: (
        <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      items: ['React', 'React Native', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Backend y Base de Datos',
      icon: (
        <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      items: ['Python', 'Django', 'Node.js', 'PostgreSQL', 'Firebase']
    },
    {
      title: 'Herramientas y Cloud',
      icon: (
        <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      items: ['Git', 'Google Cloud', 'VS Code', 'GitHub CLI']
    }
  ];

  return (
    <section className="py-16 px-6 flex items-center justify-center min-h-[60vh] bg-black relative">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent mb-12 text-center animate-fade-in drop-shadow-[0_0_8px_rgba(139,92,246,0.15)]">
          Habilidades Principales
        </h2>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative bg-black border rounded-xl p-6 flex-1 min-w-[220px] max-w-[300px] flex flex-col items-center transition-all duration-500 animate-fade-in-up cursor-pointer overflow-hidden ${
                hoveredIndex === index 
                  ? 'border-violet-500 scale-110 shadow-[0_0_15px_rgba(139,92,246,0.3)] -translate-y-2' 
                  : 'border-violet-900/30 hover:border-violet-500/50 shadow-[0_0_5px_rgba(139,92,246,0.05)]'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/10 animate-pulse"></div>
              )}
              <div className="flex flex-col items-center space-y-4 w-full relative z-10">
                <div className={`text-4xl mb-2 transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-125 rotate-12 drop-shadow-[0_0_10px_rgba(139,92,246,0.4)]' : ''
                }`}>{skill.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">
                  {skill.title}
                </h3>
                <div className="space-y-2 w-full flex flex-col items-center">
                  {skill.items.map((item, i) => (
                    <p key={i} className={`text-sm text-center w-full transition-all duration-300 ${
                      hoveredIndex === index ? 'text-violet-300' : 'text-gray-500'
                    }`}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
