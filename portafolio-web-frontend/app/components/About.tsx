'use client';

import { useEffect, useRef } from 'react';

export default function About() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    const PARTICLE_COUNT = window.innerWidth < 768 ? 30 : 60;
    const CONNECTION_DISTANCE = 150;
    const MOUSE_DISTANCE = 200;

    let mouse = { x: 0, y: 0 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = '#8b5cf6';
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle(canvas!.width, canvas!.height));
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      
      particles.forEach(p => {
        p.update(canvas!.width, canvas!.height);
        p.draw(ctx!);
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(139, 92, 246, ${1 - distance / CONNECTION_DISTANCE})`;
            ctx!.lineWidth = 1;
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
        canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
        init();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="sobre-mi" className="py-12 sm:py-16 px-4 sm:px-6 flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] bg-black relative overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ zIndex: 1 }}
      />
      
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 2 }}></div>
      
      <div className="max-w-4xl lg:max-w-5xl mx-auto text-center flex flex-col items-center relative" style={{ zIndex: 10 }}>
        <div className="mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(139,92,246,0.15)]">Sobre mí</h3>
        </div>
        <div className="space-y-3 flex flex-col items-center px-4">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl lg:max-w-3xl drop-shadow-md">
            Soy un Desarrollador Full Stack en formación con experiencia práctica en Python, Django y React. Me apasiona crear soluciones escalables y optimizar sistemas internos. He colaborado en proyectos institucionales y tengo un fuerte enfoque en el aprendizaje continuo y la innovación tecnológica.
          </p>
          <div className="pt-2">
            <a
              href="#contacto"
              className="text-violet-400 hover:text-violet-300 font-medium inline-flex items-center gap-2 transition-all duration-300 group hover:drop-shadow-[0_0_6px_rgba(139,92,246,0.3)] text-sm sm:text-base"
            >
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
