export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center space-y-6">
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-500 hover:text-brand-lime transition-colors">LinkedIn</a>
          <a href="#" className="text-gray-500 hover:text-brand-lime transition-colors">GitHub</a>
          <a href="#" className="text-gray-500 hover:text-brand-lime transition-colors">Twitter</a>
        </div>
        <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em] text-center">
          © {new Date().getFullYear()} SALMA KHANDOKER - CRAFTING DIGITAL EXCELLENCE
        </p>
      </div>
    </footer>
  );
}
