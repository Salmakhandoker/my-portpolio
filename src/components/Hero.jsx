import Image from 'next/image';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row gap-12 relative" id="home">
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <p className="text-gray-400 italic font-medium">Hello, I&apos;m</p>
          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
            Salma <br />
            khandoker <br />
            <span className="text-brand-lime">Skilled <br /> Web Developer</span>
          </h1>
        </div>
        <p className="text-gray-400 max-w-md text-sm leading-relaxed">
          Providing expert web development services that design and develop interactive web platforms, perfectly reflecting your brand&apos;s identity and driving your business goals.
        </p>
        <button className="bg-brand-lime text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-colors group">
          Hire Me 
          <svg className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </button>
      </div>

      {/* Stats and Visual Graphics */}
      <div className="flex-1 relative flex flex-col items-center justify-center">
        {/* Lime Circle Backdrop */}
        <div className="absolute inset-0 bg-brand-lime rounded-full blur-[120px] opacity-10"></div>
        
        <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] z-10">
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
          <div className="absolute -right-4 top-10 glass-card p-4 w-32 animate-bounce-slow">
            <h3 className="text-2xl font-bold">5+</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">Years Exp</p>
          </div>
          <div className="absolute -left-4 bottom-10 glass-card p-4 w-32 animate-bounce-slow delay-700">
            <h3 className="text-2xl font-bold">110+</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
