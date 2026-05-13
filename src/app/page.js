import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-lime selection:text-black">
      <Navbar />
      
      <div className="pt-24 space-y-20 lg:space-y-32">
        <Hero />
        
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <Experience />
          <Services />
        </section>
        
        <About />
        
        <Skills />
        
        <Resume />
        
        <Blog />
        
        <Contact />
        
        <Footer />
      </div>
    </main>
  );
}
