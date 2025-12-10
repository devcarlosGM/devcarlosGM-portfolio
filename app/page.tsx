import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
