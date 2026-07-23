export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center space-y-6">
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/salma-khandoker" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-brand-lime transition-colors">LinkedIn</a>
          <a href="https://github.com/Salmakhandoker" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-brand-lime transition-colors">GitHub</a>
        </div>
        <p className="text-[10px] text-foreground/50 font-bold uppercase tracking-[0.2em] text-center">
          © {new Date().getFullYear()} SALMA KHANDOKER - CRAFTING DIGITAL EXCELLENCE
        </p>
      </div>
    </footer>
  );
}
