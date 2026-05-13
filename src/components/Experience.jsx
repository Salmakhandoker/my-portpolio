export default function Experience() {
  const experiences = [
    { date: "DEC, 2025 - PRESENT", title: "Student of programming hero", company: "programming hero Bangladesh", active: false },
    { date: "NOV, 2024 - APRIL, 2025", title: "Project Manager", company: "Hybrid Bangladesh", active: true },
    { date: "SEP, 2023 - JAN, 2024", title: "data analyst", company: "ICT division", active: false },
    { date: "OCT, 2014 - JAN, 2018", title: "payroll officer", company: "Rising Group of company", active: false },
  ];

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4 text-brand-lime mb-8">
        <div className="text-5xl font-mono">&lt;/&gt;</div>
      </div>
      <div className="border-l border-white/10 ml-5 space-y-12 relative">
        {experiences.map((exp, index) => (
          <div key={index} className="pl-10 relative">
            <div className="timeline-dot"></div>
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">{exp.date}</p>
            <h4 className={`text-lg font-bold ${exp.active ? 'text-brand-lime' : ''}`}>{exp.title}</h4>
            <p className="text-sm text-gray-500">{exp.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
