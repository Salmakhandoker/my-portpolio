import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
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
          <span className="font-extrabold text-xl tracking-tighter uppercase">SALMA</span>
        </div>
        
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <li><Link href="#home" className="text-white hover:text-brand-lime transition-colors">Home</Link></li>
          <li><Link href="#portfolio" className="hover:text-brand-lime transition-colors">Portfolio</Link></li>
          <li><Link href="#about" className="hover:text-brand-lime transition-colors">About</Link></li>
          <li><Link href="#resume" className="hover:text-brand-lime transition-colors">Resume</Link></li>
          <li><Link href="#blog" className="hover:text-brand-lime transition-colors">Blog</Link></li>
          <li><Link href="#contact" className="hover:text-brand-lime transition-colors">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-xs font-bold tracking-widest text-gray-300 uppercase">LET&apos;S TALK</span>
          <button className="bg-brand-lime text-black p-2 rounded-full hover:scale-110 transition-transform">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
