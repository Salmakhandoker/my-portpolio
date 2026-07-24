import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeCustomizer from '@/components/ThemeCustomizer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-brand-lime selection:text-black transition-colors duration-300">
      <Navbar />
      <ThemeCustomizer />
      
      <div className="pt-24 space-y-20 lg:space-y-32">
        <Hero />
        
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <Experience />
          <Services />
        </section>
        
        <About />
        
        <Skills />
        
        <Projects />
        
        <Resume />
        
        <Blog />
        
        <Contact />
        
        <Footer />
      </div>
    </main>
  );
}
