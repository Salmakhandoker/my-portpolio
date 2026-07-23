export default function Services() {
  const services = [
    { id: "01", title: "Full Stack Web Development", desc: "Creating Stunning and Functional Web Applications" },
    { id: "02", title: "Website Design", desc: "Creating Stunning and Functional Web Designs" },
    { id: "03", title: "UI/UX Design", desc: "Designing Intuitive and Engaging Experiences" },
    { id: "04", title: "SEO & Digital Marketing", desc: "Optimizing Visibility and Driving Growth" },
  ];

  return (
    <div className="space-y-10">
      <div className="text-center lg:text-left">
        <p className="text-brand-lime text-[10px] font-bold uppercase tracking-widest mb-2">POPULAR SERVICES</p>
        <h2 className="text-3xl font-bold">My <span className="text-brand-lime italic font-black">Special Service</span> For your <br /> Business Development</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service) => (
          <div key={service.id} className="glass-card p-6 space-y-4 hover:border-brand-lime/30 transition-all cursor-default">
            <p className="text-xs text-foreground/50 font-bold">{service.id}</p>
            <h4 className="font-bold text-md leading-snug">{service.title}</h4>
            <p className="text-[10px] text-foreground/60 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
