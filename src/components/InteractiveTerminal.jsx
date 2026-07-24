"use client";

import { useState, useRef, useEffect } from "react";
import { projects } from "@/data/projects";

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { type: "system", text: "Welcome to Salma's Interactive Terminal." },
    { type: "system", text: "Type 'help' to see list of available commands." }
  ]);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    const args = trimmed.split(" ");
    const command = args[0];
    const newHistory = [...history, { type: "input", text: `salma-os:~$ ${cmdStr}` }];

    if (!trimmed) {
      setHistory(newHistory);
      return;
    }

    switch (command) {
      case "help":
        newHistory.push({
          type: "output",
          text: "Available commands:\n  help      - Show this message\n  neofetch  - Display system & profile info\n  about     - Learn more about me\n  skills    - View my technical skillset\n  projects  - List my featured projects\n  contact   - Get my contact channels\n  clear     - Clear the terminal screen"
        });
        break;
      case "neofetch":
        newHistory.push({
          type: "output",
          text: `   /\\        salma@salma-os\n  /  \\       --------------\n /    \\      OS: SalmaOS v2.6.0\n/  /\\  \\     Kernel: Next.js (Turbopack)\n\\  \\/  /     Uptime: 100% Focused & Productive\n \\    /      Shell: React Component\n  \\  /       Theme: Cyberlime Dark Mode\n   \\/        Primary Tech: MERN Stack & Next.js`
        });
        break;
      case "about":
        newHistory.push({
          type: "output",
          text: "Hi! I am Salma Khandoker, a passionate Full Stack Web Developer based in Bangladesh. Transitioning from corporate operations and data analysis to building digital products, I focus on crafting scalable, highly responsive, and user-centric web applications using modern web ecosystems."
        });
        break;
      case "skills":
        newHistory.push({
          type: "output",
          text: "TECHNICAL TOOLBOX:\n\nFrontend:\n  JavaScript (ES6+) [██████████░] 92%\n  React.js          [██████████░] 90%\n  Next.js           [█████████░░] 85%\n  Tailwind CSS      [███████████] 95%\n\nBackend & Database:\n  Node.js / Express [█████████░░] 87%\n  MongoDB           [████████░░░] 82%\n  Firebase          [█████████░░] 85%\n  Better-Auth       [████████░░░] 80%\n  Stripe Payments   [████████░░░] 82%"
        });
        break;
      case "projects":
        const projectList = projects.map(p => `  • ${p.name} - ${p.tagline}\n    Link: ${p.liveLink}`).join("\n\n");
        newHistory.push({
          type: "output",
          text: `FEATURED PROJECTS:\n\n${projectList}`
        });
        break;
      case "contact":
        newHistory.push({
          type: "output",
          text: "LET'S COLLABORATE:\n\n  Email:    khandokersalma5@gmail.com\n  WhatsApp: +880 1998-243701\n  GitHub:   github.com/Salmakhandoker\n  LinkedIn: linkedin.com/in/salma-khandoker"
        });
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        newHistory.push({
          type: "output",
          text: `Command not found: '${command}'. Type 'help' for available commands.`
        });
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <div 
      className="w-full h-[350px] md:h-[400px] bg-black/95 border border-brand-lime/30 rounded-xl font-mono text-[11px] md:text-xs text-brand-lime p-4 flex flex-col justify-between overflow-hidden shadow-2xl relative"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Top Header bar resembling a real terminal window */}
      <div className="flex items-center justify-between border-b border-brand-lime/10 pb-2 mb-2 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
        </div>
        <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">salma-os - terminal</span>
        <div className="w-10"></div>
      </div>

      {/* Screen Output Area */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar scroll-smooth">
        {history.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap leading-relaxed">
            {line.type === "input" ? (
              <span className="text-foreground">{line.text}</span>
            ) : (
              <span className="text-brand-lime/90">{line.text}</span>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Screen Input Area */}
      <div className="flex items-center gap-1 border-t border-brand-lime/10 pt-2 mt-2">
        <span className="text-foreground shrink-0">salma-os:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow bg-transparent text-foreground focus:outline-none caret-brand-lime"
          autoFocus
          placeholder="type a command..."
          aria-label="Terminal input"
        />
      </div>
    </div>
  );
}
