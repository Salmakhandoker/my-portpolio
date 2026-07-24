"use client";

import { useState } from 'react';
import Image from 'next/image';
import InteractiveTerminal from '@/components/InteractiveTerminal';

export default function Hero() {
  const [viewMode, setViewMode] = useState('visual'); // 'visual' | 'terminal'

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row gap-12 relative animate-fade-in" id="home">
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <p className="text-foreground/70 italic font-medium">Hello, I&apos;m</p>
          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
            Salma <br />
            khandoker <br />
            <span className="text-brand-lime">Skilled <br /> Web Developer</span>
          </h1>
        </div>
        <p className="text-foreground/70 max-w-md text-sm leading-relaxed">
          Providing expert web development services that design and develop interactive web platforms, perfectly reflecting your brand&apos;s identity and driving your business goals.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-brand-lime text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-foreground hover:text-background transition-colors group cursor-pointer"
          >
            Hire Me 
            <svg className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
          
          <a 
            href="/resume.pdf" 
            download 
            className="border border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all cursor-pointer"
          >
            Download CV
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 pt-4">
          <a href="https://www.linkedin.com/in/salma-khandoker" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/70 hover:text-brand-lime hover:border-brand-lime/30 transition-all">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://github.com/Salmakhandoker" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/70 hover:text-brand-lime hover:border-brand-lime/30 transition-all">
            <span className="sr-only">GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      {/* Stats and Visual Graphics */}
      <div className="flex-1 relative flex flex-col items-center justify-center w-full min-h-[460px]">
        {/* Toggle Switcher */}
        <div className="flex items-center gap-1 bg-brand-card border border-foreground/5 p-1 rounded-full mb-6 z-20 shadow-md">
          <button 
            onClick={() => setViewMode('visual')}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              viewMode === 'visual' 
                ? 'bg-brand-lime text-black' 
                : 'text-foreground/60 hover:text-foreground'
            }`}
          >
            Visual Profile
          </button>
          <button 
            onClick={() => setViewMode('terminal')}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              viewMode === 'terminal' 
                ? 'bg-brand-lime text-black' 
                : 'text-foreground/60 hover:text-foreground'
            }`}
          >
            Dev Terminal
          </button>
        </div>

        {/* Lime Circle Backdrop */}
        <div className="absolute inset-0 bg-brand-lime rounded-full blur-[120px] opacity-10"></div>
        
        {viewMode === 'visual' ? (
          <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] z-10 transition-all duration-500 animate-fade-in flex items-center justify-center">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-brand-lime/30 shadow-2xl shadow-brand-lime/10">
              <Image 
                src="/profile.jpg" 
                alt="Salma Khandoker" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -right-4 top-10 glass-card p-4 w-32 animate-float">
              <h3 className="text-2xl font-bold text-brand-lime">5+</h3>
              <p className="text-[10px] text-foreground/50 uppercase tracking-widest">Years Exp</p>
            </div>
            <div className="absolute -left-4 bottom-10 glass-card p-4 w-32 animate-float-delayed">
              <h3 className="text-2xl font-bold text-brand-lime">110+</h3>
              <p className="text-[10px] text-foreground/50 uppercase tracking-widest">Projects</p>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-[460px] z-10 animate-fade-in">
            <InteractiveTerminal />
          </div>
        )}
      </div>
    </section>
  );
}
