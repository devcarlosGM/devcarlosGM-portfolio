export default function About() {
  return (
    <section id="sobre-mi" className="py-16 px-6 flex items-center justify-center min-h-[60vh] bg-black relative">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#8b5cf6_0.5px,transparent_0.5px)] bg-[size:24px_24px]"></div>
      </div>
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
        <div className="mb-6">
       
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(139,92,246,0.15)]">Sobre mí</h3>
        </div>
        <div className="space-y-3 flex flex-col items-center">
          <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-3xl">
            Soy un Desarrollador Full Stack en formación con experiencia práctica en Python, Django y React. Me apasiona crear soluciones escalables y optimizar sistemas internos. He colaborado en proyectos institucionales y tengo un fuerte enfoque en el aprendizaje continuo y la innovación tecnológica.
          </p>
          <div className="pt-2">
            <a
              href="#contacto"
              className="text-violet-400 hover:text-violet-300 font-medium inline-flex items-center gap-2 transition-all duration-300 group hover:drop-shadow-[0_0_6px_rgba(139,92,246,0.3)]"
            >
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
