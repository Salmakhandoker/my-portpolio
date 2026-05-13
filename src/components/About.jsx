import Image from 'next/image';

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="about">
      <div className="glass-card p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
        <div className="flex-1 space-y-8 z-10">
          <p className="text-brand-lime text-[10px] font-bold uppercase tracking-widest">ABOUT ME</p>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Expert Web Development Services for Complex <span className="text-brand-lime">Digital Product Challenges</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
            I am a skilled full stack developer with a strong focus on crafting seamless and responsive digital experiences. From developing dynamic user interfaces to building robust backend systems, I combine technical expertise with a deep understanding of design principles.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm font-bold">
            <div className="flex items-center gap-3">
              <span className="text-brand-lime">✓</span> Full Stack Web Development
            </div>
            <div className="flex items-center gap-3">
              <span className="text-brand-lime">✓</span> WordPress
            </div>
            <div className="flex items-center gap-3">
              <span className="text-brand-lime">✓</span> UI/UX Design
            </div>
            <div className="flex items-center gap-3">
              <span className="text-brand-lime">✓</span> SEO
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t border-white/10">
            <div className="text-gray-500 text-xs italic font-bold">Contact Now.</div>
            <div className="text-xs font-bold">Email address: <span className="text-white hover:text-brand-lime cursor-pointer ml-1 transition-colors">salmakhandoker001@gmail.com</span></div>
          </div>

          <button className="bg-[#1a1a1a] border border-brand-lime/20 text-brand-lime px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-brand-lime hover:text-black transition-all group">
            View My Journey
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>

        <div className="flex-shrink-0 relative w-80 h-80">
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
            <Image 
              alt="Salma Portrait" 
              src="/profile.jpg"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
