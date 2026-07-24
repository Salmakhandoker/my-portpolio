"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Core filter tags
  const tags = ["All", "Next.js", "React", "Node.js", "MongoDB"];

  // Filter projects by selected tag
  const filteredProjects = useMemo(() => {
    if (selectedTag === "All") return projects;
    return projects.filter(project => 
      project.tech.some(t => t.toLowerCase() === selectedTag.toLowerCase())
    );
  }, [selectedTag]);

  // Handle showing more/less
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="projects-section">
      <div className="space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 border-b border-foreground/10 pb-8">
          <div>
            <p className="text-brand-lime text-[10px] font-bold uppercase tracking-widest mb-2">MY CREATIVE WORKS</p>
            <h2 className="text-4xl font-black">Featured <span className="text-brand-lime italic">Projects</span></h2>
          </div>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTag(tag);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-full text-[10px] font-bold transition-all duration-300 uppercase tracking-widest cursor-pointer border ${
                  selectedTag === tag
                    ? "bg-brand-lime text-black border-brand-lime"
                    : "bg-brand-card text-foreground/60 border-foreground/5 hover:border-brand-lime/30 hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {displayedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <div key={project.id} className="glass-card overflow-hidden group flex flex-col justify-between hover:border-brand-lime/20 transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                  <Image 
                    alt={project.name} 
                    src={project.image}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-brand-lime transition-colors">{project.name}</h3>
                    <p className="text-foreground/70 text-xs line-clamp-2 leading-relaxed">{project.tagline}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="bg-foreground/5 border border-foreground/5 text-[9px] font-semibold tracking-wider text-foreground/70 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link 
                      href={`/projects/${project.id}`}
                      className="w-full bg-brand-card border border-foreground/5 text-foreground/80 hover:bg-brand-lime hover:text-black hover:border-brand-lime font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all text-xs uppercase tracking-widest cursor-pointer"
                    >
                      View Details
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card p-12 text-center text-foreground/50 text-sm">
            No projects found in this category.
          </div>
        )}

        {filteredProjects.length > 3 && (
          <div className="flex justify-center pt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-brand-card border border-brand-lime/20 text-brand-lime px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-brand-lime hover:text-black transition-all group cursor-pointer text-xs uppercase tracking-widest"
            >
              {showAll ? 'See Less' : 'See More Projects'}
              <svg 
                className={`h-4 w-4 transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
