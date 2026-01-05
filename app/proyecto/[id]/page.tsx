import { projectsData } from '../../../data/projects';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from './DownloadButton';
import ProjectScreenshots from './ProjectScreenshots';

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

            <ProjectScreenshots screenshots={project.screenshots} />

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