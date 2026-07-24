"use client";

import { useState, useEffect } from "react";

const colors = {
  lime: { dark: '#10B981', light: '#059669', name: 'Emerald' },
  indigo: { dark: '#6366F1', light: '#4F46E5', name: 'Indigo' },
  violet: { dark: '#8B5CF6', light: '#7C3AED', name: 'Violet' },
  amber: { dark: '#F59E0B', light: '#D97706', name: 'Amber' },
  crimson: { dark: '#F43F5E', light: '#E11D48', name: 'Crimson' }
};

export default function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccent, setActiveAccent] = useState("lime");

  useEffect(() => {
    const savedAccent = localStorage.getItem("accent") || "lime";
    if (colors[savedAccent]) {
      setActiveAccent(savedAccent);
    }
  }, []);

  useEffect(() => {
    const updateAccentColor = () => {
      const isLight = document.documentElement.classList.contains("light");
      const mode = isLight ? "light" : "dark";
      const hexValue = colors[activeAccent][mode];
      document.documentElement.style.setProperty("--brand-lime", hexValue);
    };

    updateAccentColor();
    localStorage.setItem("accent", activeAccent);

    // Watch for class changes on root (light/dark toggle in navbar)
    const observer = new MutationObserver(updateAccentColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, [activeAccent]);

  return (
    <div className="fixed right-6 bottom-24 z-50 font-sans select-none">
      {/* Settings Gear Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-brand-card border border-brand-lime/20 flex items-center justify-center text-brand-lime shadow-2xl hover:scale-110 transition-transform cursor-pointer relative"
        aria-label="Theme Customizer"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-700 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      {/* Slide-out Customizer Panel */}
      <div
        className={`absolute bottom-16 right-0 w-64 glass-card p-6 shadow-2xl transition-all duration-300 transform origin-bottom-right ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-75 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="space-y-4">
          <div className="border-b border-foreground/10 pb-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">Theme Settings</h4>
            <p className="text-[9px] text-foreground/50 mt-1">Personalize your browsing experience</p>
          </div>

          {/* Accent Color Section */}
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">Accent Color</span>
            <div className="flex items-center justify-between gap-2 pt-1">
              {Object.keys(colors).map((key) => {
                const colorConfig = colors[key];
                return (
                  <button
                    key={key}
                    onClick={() => setActiveAccent(key)}
                    style={{ backgroundColor: colorConfig.dark }}
                    className={`w-7 h-7 rounded-full transition-all duration-300 relative cursor-pointer border-2 hover:scale-110 ${
                      activeAccent === key 
                        ? "border-foreground scale-115 shadow-lg" 
                        : "border-transparent"
                    }`}
                    title={colorConfig.name}
                  >
                    {activeAccent === key && (
                      <span className="absolute inset-0 m-auto w-1.5 h-1.5 rounded-full bg-black"></span>
                    )}
                  </button>
                );
              })}
            </div>
            <div className="text-[9px] text-foreground/40 text-right uppercase tracking-wider font-semibold">
              Active: {colors[activeAccent].name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
