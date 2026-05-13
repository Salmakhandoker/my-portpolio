export default function Blog() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5" id="blog">
      <div className="text-center space-y-4">
        <p className="text-brand-lime text-[10px] font-bold uppercase tracking-widest">LATEST UPDATES</p>
        <h2 className="text-4xl font-black">My <span className="text-brand-lime italic">Blog</span></h2>
        <div className="glass-card p-12 flex flex-col items-center justify-center space-y-4 border-dashed border-white/10">
          <div className="w-16 h-16 rounded-full bg-brand-card flex items-center justify-center text-gray-600">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2v4a2 2 0 002 2h4"></path></svg>
          </div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Articles and insights coming soon!</p>
        </div>
      </div>
    </section>
  );
}
