"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2" data-purpose="logo">
          <div className="w-8 h-8 rounded-full bg-brand-lime flex items-center justify-center overflow-hidden relative border border-white/10">
            <Image 
              alt="Salma Logo" 
              src="/profile.jpg"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-extrabold text-xl tracking-tighter uppercase text-foreground">SALMA</span>
        </div>
        
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/60">
          <li><Link href="/#home" className="text-foreground hover:text-brand-lime transition-colors">Home</Link></li>
          <li><Link href="/#about" className="hover:text-brand-lime transition-colors">About</Link></li>
          <li><Link href="/#portfolio" className="hover:text-brand-lime transition-colors">Skills</Link></li>
          <li><Link href="/#projects-section" className="hover:text-brand-lime transition-colors">Portfolio</Link></li>
          <li><Link href="/#resume" className="hover:text-brand-lime transition-colors">Resume</Link></li>
          <li><Link href="/#blog" className="hover:text-brand-lime transition-colors">Blog</Link></li>
          <li><Link href="/#contact" className="hover:text-brand-lime transition-colors">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full border border-foreground/10 hover:border-brand-lime/30 text-foreground/75 hover:text-brand-lime transition-all cursor-pointer relative w-9 h-9 flex items-center justify-center overflow-hidden"
            aria-label="Toggle Theme"
          >
            {/* Sun Icon */}
            <svg 
              className={`w-5 h-5 absolute transition-all duration-300 ${
                theme === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
            {/* Moon Icon */}
            <svg 
              className={`w-5 h-5 absolute transition-all duration-300 ${
                theme === 'light' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <span className="hidden sm:inline text-xs font-bold tracking-widest text-foreground/70 uppercase">LET&apos;S TALK</span>
          <button className="bg-brand-lime text-black p-2 rounded-full hover:scale-110 transition-transform cursor-pointer">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
