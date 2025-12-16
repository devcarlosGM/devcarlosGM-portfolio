import { projectsData } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from './DownloadButton';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: projectId } = await params;

  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-violet-400 mb-4">Proyecto no encontrado</h1>
          <Link
            href="/#proyectos"
            className="inline-block border-2 border-violet-500 hover:bg-violet-500/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Volver a Proyectos
          </Link>
        </div>
      </div>
    );
  }

  if (project.id === 'notetify') {
    return (
      <div className="min-h-screen bg-black text-white font-sans selection:bg-violet-500/30">
        <div className="fixed inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-black to-black" />
             <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto py-20" style={{paddingLeft: '120px', paddingRight: '120px'}}>
            <header style={{marginBottom: '100px'}}>
                <Link
                    href="/#proyectos"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    style={{marginBottom: '40px', display: 'inline-flex'}}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Volver
                </Link>
                
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10" style={{paddingBottom: '40px'}}>
                    <div className="text-left">
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-2">
                            {project.title}
                        </h1>
                        <p className="text-violet-400 text-xl font-medium">
                            Asistente de Productividad IA
                        </p>
                    </div>
                </div>
            </header>

            <section className="flex flex-col items-center text-center" style={{marginBottom: '120px', gap: '50px'}}>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-loose font-light">
                    {project.shortDescription}
                </p>
                
                {project.demoUrl && <DownloadButton href={project.demoUrl} />}
            </section>

            <section className="relative" style={{marginTop: '120px', marginBottom: '120px', paddingTop: '100px', paddingBottom: '100px'}}>
                <div className="absolute inset-0 bg-violet-500/10 blur-[120px] rounded-full -z-10" />
                <div className="flex justify-center items-center gap-8 md:gap-16 perspective-1000">
                    <div className="relative w-48 h-[24rem] md:w-64 md:h-[34rem] transform rotate-y-12 translate-y-12 opacity-80 hover:opacity-100 transition-all duration-500 hover:z-20 hover:scale-[1.02] hover:rotate-y-0 hover:translate-y-0">
                         <div className="absolute inset-0 bg-black rounded-[2.5rem] border-[3px] border-gray-800 overflow-hidden shadow-2xl">
                            <Image src={project.screenshots[0]} alt="Screen 1" fill className="object-cover" unoptimized quality={100} style={{imageRendering: 'crisp-edges'}} />
                         </div>
                    </div>
                    
                    <div className="relative w-56 h-[28rem] md:w-72 md:h-[38rem] z-10 transform hover:scale-[1.02] transition-all duration-500 shadow-2xl">
                        <div className="absolute inset-0 bg-black rounded-[3rem] border-[4px] border-gray-700 overflow-hidden shadow-violet-500/20 shadow-2xl">
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20 border border-gray-800" />
                            <Image src={project.screenshots[1]} alt="Screen 2" fill className="object-cover" unoptimized priority quality={100} style={{imageRendering: 'crisp-edges'}} />
                        </div>
                    </div>

                    <div className="relative w-48 h-[24rem] md:w-64 md:h-[34rem] transform -rotate-y-12 translate-y-12 opacity-80 hover:opacity-100 transition-all duration-500 hover:z-20 hover:scale-[1.02] hover:rotate-y-0 hover:translate-y-0">
                         <div className="absolute inset-0 bg-black rounded-[2.5rem] border-[3px] border-gray-800 overflow-hidden shadow-2xl">
                            <Image src={project.screenshots[2]} alt="Screen 3" fill className="object-cover" unoptimized quality={100} style={{imageRendering: 'crisp-edges'}} />
                         </div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-12" style={{marginTop: '120px', gap: '70px'}}>
                
                <div className="md:col-span-12 bg-zinc-900/50 border border-white/10 rounded-3xl" style={{padding: '80px'}}>
                    <h3 className="text-3xl font-bold text-white flex items-center gap-4" style={{marginBottom: '40px'}}>
                        <span className="w-2 h-8 bg-violet-500 rounded-full"/>
                        Sobre el Proyecto
                    </h3>
                    <p className="text-gray-300 text-xl leading-loose font-light" style={{marginBottom: '40px'}}>
                        {project.fullDescription}
                    </p>
                    {project.timeline && (
                        <div className="inline-flex items-center gap-3 text-violet-300 bg-violet-500/10 px-6 py-3 rounded-xl text-base font-medium border border-violet-500/20">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {project.timeline}
                        </div>
                    )}
                </div>

                <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3" style={{gap: '30px', marginTop: '80px'}}>
                    <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/20 border border-violet-500/30 rounded-3xl backdrop-blur-sm relative overflow-hidden group" style={{padding: '50px 40px'}}>
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-purple-500/0 group-hover:from-violet-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                        <div className="relative">
                            <h4 className="text-2xl font-bold text-white mb-4">Comandos de Voz</h4>
                            <p className="text-gray-300 text-lg leading-relaxed">Procesamiento natural del lenguaje con reconocimiento en tiempo real</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-900/30 to-violet-900/20 border border-blue-500/30 rounded-3xl backdrop-blur-sm relative overflow-hidden group" style={{padding: '50px 40px'}}>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-violet-500/0 group-hover:from-blue-500/10 group-hover:to-violet-500/10 transition-all duration-500" />
                        <div className="relative">
                            <h4 className="text-2xl font-bold text-white mb-4">Sincronización Real-Time</h4>
                            <p className="text-gray-300 text-lg leading-relaxed">Arquitectura Firebase para sync instantáneo multi-dispositivo</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-purple-500/30 rounded-3xl backdrop-blur-sm relative overflow-hidden group" style={{padding: '50px 40px'}}>
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
                        <div className="relative">
                            <h4 className="text-2xl font-bold text-white mb-4">Sugerencias Inteligentes</h4>
                            <p className="text-gray-300 text-lg leading-relaxed">IA contextual que aprende de tus patrones y optimiza tu flujo</p>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-12 bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden" style={{padding: '80px', marginTop: '60px'}}>
                    <h3 className="text-4xl font-bold text-white mb-12 text-center bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
                        Stack Tecnológico
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{gap: '40px'}}>
                        {project.technologies.map((tech, i) => (
                            <div key={i} className="bg-zinc-900/50 border border-violet-500/20 rounded-2xl hover:border-violet-500/50 transition-all duration-300 group" style={{padding: '30px'}}>
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 rounded-full bg-violet-500 group-hover:animate-pulse" />
                                    <p className="text-gray-200 text-xl font-semibold group-hover:text-violet-300 transition-colors">{tech}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            <footer className="mt-24 pt-8 border-t border-white/10 text-center text-gray-600 text-sm">
                © 2025 devcarlosGM
            </footer>
        </div>
      </div>
    );
  }


  return <div className="min-h-screen bg-black text-white">...</div>;
}