export default function Experience() {
  const experiences = [
    {
      date: "Sep 2023 – Jul 2024",
      title: "Data Analyst",
      company: "ICT Division, ICT Ministry, Bangladesh",
      active: true,
      description: [
        "Collected, cleaned, and analyzed project data, translating findings into clear reports for stakeholders",
        "Evaluated data quality and accuracy against structured assessment criteria, ensuring reliable reporting"
      ]
    },
    {
      date: "2014 – 2019",
      title: "Payroll Officer",
      company: "Rising Group of Companies",
      active: false,
      description: [
        "Managed payroll operations and maintained detailed employee records with a strong focus on accuracy and confidentiality",
        "Prepared structured reports for management review and coordinated with cross-departmental teams"
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4 text-brand-lime mb-8">
        <div className="text-5xl font-mono">&lt;/&gt;</div>
        <h3 className="text-xl font-bold uppercase tracking-widest pt-4">Work Experience</h3>
      </div>
      <div className="border-l border-foreground/10 ml-5 space-y-12 relative">
        {experiences.map((exp, index) => (
          <div key={index} className="pl-10 relative">
            <div className="timeline-dot"></div>
            <p className="text-[10px] text-foreground/50 uppercase font-bold tracking-widest mb-1">{exp.date}</p>
            <h4 className={`text-lg font-bold ${exp.active ? 'text-brand-lime' : ''}`}>{exp.title}</h4>
            <p className="text-sm text-foreground/70 mb-2">{exp.company}</p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-foreground/60">
              {exp.description.map((bullet, bIdx) => (
                <li key={bIdx}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
