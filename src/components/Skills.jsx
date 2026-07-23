export default function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "Figma (UI/UX)", level: 88 },
        { name: "Git & GitHub", level: 90 },
        { name: "Webflow", level: 80 },
        { name: "Docker", level: 70 }
      ]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="portfolio">
      <div className="space-y-12">
        <div>
          <p className="text-brand-lime text-[10px] font-bold uppercase tracking-widest mb-2">MY TOOLBOX</p>
          <h2 className="text-4xl font-black">Skills & <span className="text-brand-lime italic">Expertise</span></h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="glass-card p-8 space-y-6 hover:border-brand-lime/20 transition-all">
              <h3 className="text-lg font-bold text-foreground border-b border-foreground/10 pb-3">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-foreground/80">{skill.name}</span>
                      <span className="text-brand-lime">{skill.level}%</span>
                    </div>
                    {/* Visual graphical progress bar */}
                    <div className="w-full h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-lime rounded-full transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
