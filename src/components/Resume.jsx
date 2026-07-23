import Image from 'next/image';

export default function Resume() {
  const education = [
    { school: "Programming Hero", degree: "Full Stack Web Development (Batch 13)", year: "MERN Stack" },
    { school: "Cumilla Victoria Government College (National University)", degree: "MSS in Political Science", year: "2022 – 2023" }
  ];

  const highlights = [
    "Full Stack Development with MERN",
    "UI/UX Design with Figma",
    "Project Management & Data Analysis",
    "SEO & Digital Marketing Strategies"
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="resume">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="flex-1 space-y-10">
          <div>
            <p className="text-brand-lime text-[10px] font-bold uppercase tracking-widest mb-2">MY JOURNEY</p>
            <h2 className="text-5xl font-black">Professional <br /> <span className="text-brand-lime">Background</span></h2>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-bold border-b border-foreground/10 pb-4">Education</h3>
            {education.map((item, index) => (
              <div key={index} className="space-y-1">
                <h4 className="font-bold text-foreground">{item.school}</h4>
                <p className="text-brand-lime text-sm">{item.degree}</p>
                <p className="text-foreground/50 text-xs uppercase tracking-widest">{item.year}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-foreground/10 pb-4">Key Qualifications</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-foreground/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <div className="glass-card p-10 space-y-8 border-brand-lime/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime blur-[100px] opacity-10"></div>

            <div className="flex items-center gap-6 pb-6 border-b border-foreground/10">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-brand-lime/30">
                <Image
                  src="/profile.jpg"
                  alt="Salma Portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Salma Khandoker</h3>
                <p className="text-brand-lime text-xs font-bold uppercase tracking-widest">Skilled Web Developer</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Professional Summary</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Frontend Developer specializing in React.js and modern JavaScript, with hands-on experience building responsive, component-based web applications, REST API integrations, and CRUD-driven interfaces. Comfortable translating designs into clean, accessible UI and working independently in remote, deadline-driven environments. Background in data analysis and structured reporting brings strong attention to detail and documentation discipline to engineering work.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Download Full CV</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Looking for a more detailed look at my professional history and technical expertise? Download my comprehensive resume below.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <a
                href="/resume.pdf"
                download
                className="w-full bg-brand-lime text-black font-bold py-4 rounded-xl hover:bg-foreground hover:text-background transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume (PDF)
              </a>
              <p className="text-[10px] text-foreground/50 text-center uppercase tracking-widest italic">
                PDF format, size: ~1.2 MB
              </p>
            </div>

            <div className="pt-10 grid grid-cols-2 gap-8 border-t border-foreground/10">
              <div>
                <p className="text-[10px] text-foreground/50 uppercase font-bold tracking-widest mb-1">Languages</p>
                <p className="text-sm font-bold">English, Bengali</p>
              </div>
              <div>
                <p className="text-[10px] text-foreground/50 uppercase font-bold tracking-widest mb-1">Status</p>
                <p className="text-sm font-bold text-brand-lime">Available for Hire</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
