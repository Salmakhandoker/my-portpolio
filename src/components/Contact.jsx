export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="contact">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <p className="text-brand-lime text-[10px] font-bold uppercase tracking-widest mb-2">GET IN TOUCH</p>
            <h2 className="text-5xl font-black">Let&apos;s build <br /> something <span className="text-brand-lime italic">Extraordinary</span></h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Whether you have a specific project in mind or just want to explore the possibilities, I&apos;m here to help you navigate the digital landscape.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-card border border-white/10 flex items-center justify-center text-brand-lime">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Email Me</p>
                <p className="font-bold">salmakhandoker001@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-card border border-white/10 flex items-center justify-center text-brand-lime">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Location</p>
                <p className="font-bold">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 md:p-10">
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Your Name</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-lime transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-lime transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subject</label>
              <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-lime transition-colors" placeholder="Project Inquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message</label>
              <textarea rows="4" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-lime transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
            </div>
            <button className="w-full bg-brand-lime text-black font-bold py-4 rounded-lg hover:bg-white transition-colors uppercase tracking-widest text-xs">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
