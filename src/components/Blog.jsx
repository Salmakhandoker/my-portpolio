"use client";

export default function Blog() {
  const posts = [
    {
      title: "Optimizing Next.js Turbopack Builds for Large Scale Applications",
      date: "Jul 15, 2026",
      readTime: "5 min read",
      category: "Performance",
      excerpt: "Explore how Next.js Turbopack compiles pages incrementally, strategies to minimize build sizes, and techniques for improving local development server reactivity."
    },
    {
      title: "Ensuring Concurrent State Safety in MERN Crowdfunding Applications",
      date: "Jun 28, 2026",
      readTime: "7 min read",
      category: "Backend Design",
      excerpt: "A deep dive into preventing race conditions during concurrent donation pledge requests using MongoDB transactions and atomic operations."
    },
    {
      title: "Elevating User Experience: Building Interactive Terminals inside Portfolios",
      date: "May 10, 2026",
      readTime: "4 min read",
      category: "UI/UX",
      excerpt: "Why custom CLI controls create memorable experiences for developers and technical recruiters, and how to build one using React state."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-foreground/10" id="blog">
      <div className="space-y-12">
        <div className="text-center lg:text-left">
          <p className="text-brand-lime text-[10px] font-bold uppercase tracking-widest mb-2">LATEST ARTICLES</p>
          <h2 className="text-4xl font-black">Technical <span className="text-brand-lime italic">Blog</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article 
              key={idx} 
              className="glass-card p-8 flex flex-col justify-between space-y-6 hover:border-brand-lime/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-foreground/50">
                  <span className="text-brand-lime">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-brand-lime transition-colors duration-300 line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-foreground/60 text-xs leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-foreground/5 pt-4 text-xs font-bold uppercase tracking-widest text-foreground/45 group-hover:text-brand-lime transition-colors">
                <span>{post.date}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
