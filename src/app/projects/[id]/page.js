import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProjectDetail({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-brand-lime selection:text-black py-20 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back Link */}
        <Link 
          href="/#projects-section" 
          className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-brand-lime transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Portfolio
        </Link>

        {/* Hero Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black">{project.name}</h1>
          <p className="text-brand-lime font-bold tracking-wide">{project.tagline}</p>
        </div>

        {/* Project Image */}
        <div className="relative h-64 md:h-[450px] w-full overflow-hidden rounded-2xl border border-foreground/10 shadow-2xl">
          <Image 
            alt={project.name} 
            src={project.image}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Description & Links Grid */}
        <div className="grid md:grid-cols-3 gap-12 border-b border-foreground/10 pb-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-xl font-bold border-b border-foreground/10 pb-3">Project Description</h2>
            <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold border-b border-foreground/10 pb-3">Links & Tech</h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-brand-lime text-black font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-foreground hover:text-background transition-colors text-xs uppercase tracking-widest text-center"
                >
                  Live Preview
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="border border-foreground/10 text-foreground font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-foreground/5 transition-colors text-xs uppercase tracking-widest text-center"
                >
                  GitHub (Client)
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-[10px] text-foreground/50 uppercase font-bold tracking-widest">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="bg-foreground/5 border border-foreground/5 text-[10px] font-semibold text-foreground/70 px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections (Challenges & Improvements) */}
        <div className="grid md:grid-cols-2 gap-12 pt-6">
          <div className="glass-card p-8 space-y-4 hover:border-red-500/20 transition-all border border-foreground/5">
            <div className="flex items-center gap-3 text-red-400 font-bold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              <h3>Challenges Faced</h3>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">{project.challenges}</p>
          </div>

          <div className="glass-card p-8 space-y-4 hover:border-brand-lime/20 transition-all border border-foreground/5">
            <div className="flex items-center gap-3 text-brand-lime font-bold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <h3>Future Improvements</h3>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">{project.futurePlans}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
