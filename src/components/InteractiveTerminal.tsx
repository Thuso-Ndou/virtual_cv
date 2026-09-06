import { useState, useRef, useEffect } from "react";
import { Terminal, Send, CornerDownLeft, Copy, Check } from "lucide-react";
import { KnolinkIcon } from "./icons/TechIcons";

interface CommandHistory {
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const InteractiveTerminal = () => {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "welcome",
      timestamp: "12:00:01",
      output: (
        <div className="space-y-1.5 text-slate-300">
          <p className="text-cyan-400 font-semibold text-xs sm:text-sm">
            Knolink Engineering Console [v2.4.0-prod]
          </p>
          <p className="text-slate-400 text-xs leading-relaxed">
            Active Node: <span className="text-emerald-400 font-mono">thuso@knolink.co.za</span> • Runtimes: <span className="text-cyan-300 font-mono">Apolemia / Entropy</span>
          </p>
          <p className="text-[11px] text-slate-500">
            Type <span className="text-cyan-300 font-mono">help</span> or click the command pills above to explore.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    const time = new Date().toLocaleTimeString();

    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm">
            <p className="text-cyan-400 font-medium mb-1">Available System Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 font-mono text-slate-300">
              <div><span className="text-emerald-400">whoami</span> - Developer profile & philosophy</div>
              <div><span className="text-emerald-400">knolink</span> - Knolink AI workspace architecture</div>
              <div><span className="text-emerald-400">stack</span> - Core technical stack & tools</div>
              <div><span className="text-emerald-400">projects</span> - Shipped systems & live demos</div>
              <div><span className="text-emerald-400">education</span> - BSc Honours & IT degrees, certifications</div>
              <div><span className="text-emerald-400">contact</span> - Direct channels (Work & Personal)</div>
              <div><span className="text-emerald-400">hire</span> - Why collaborate with Thuso</div>
              <div><span className="text-emerald-400">clear</span> - Clear terminal session</div>
            </div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-2 text-xs sm:text-sm text-slate-300">
            <p className="text-cyan-300 font-semibold">Thuso Ndou — Full-Stack Software Engineer & Data Scientist</p>
            <p>
              Architect and developer of <span className="text-cyan-400">Knolink</span> (an AI-powered quiet workspace for deep research). Currently studying <strong className="text-white">BSc (Honours) in Data Science at Eduvos</strong>, and holds a <strong className="text-white">BSc in Information Technology from North-West University</strong>. Skilled in TypeScript, React, Node.js/Express, Python data pipelines, Pinecone vector search, and Azure Cloud.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="px-2 py-0.5 bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 rounded">30+ Shipped Projects</span>
              <span className="px-2 py-0.5 bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 rounded">BSc Hons Data Science (Eduvos)</span>
              <span className="px-2 py-0.5 bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 rounded">North-West Univ BSc IT</span>
            </div>
          </div>
        );
        break;

      case "knolink":
        output = (
          <div className="space-y-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2 text-cyan-300 font-semibold">
              <KnolinkIcon size={18} className="w-4 h-auto" />
              <span>Knolink — Systems for Machine Intelligence (knolink.co.za)</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Knolink is an independent research and engineering company building systems for machine intelligence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2 bg-slate-950/80 rounded border border-slate-800">
                <span className="text-amber-400 font-semibold">APOLEMIA:</span> High-throughput inference runtime (activation sparsity, dynamic KV-cache reuse, hardware enclaves).
              </div>
              <div className="p-2 bg-slate-950/80 rounded border border-slate-800">
                <span className="text-cyan-400 font-semibold">ENTROPY IDE:</span> Context-aware AST compiler & browser-native developer workspace.
              </div>
              <div className="p-2 bg-slate-950/80 rounded border border-slate-800">
                <span className="text-rose-400 font-semibold">PRAXIS RL:</span> Strategic reinforcement learning via self-play & deep Monte Carlo Tree Search.
              </div>
              <div className="p-2 bg-slate-950/80 rounded border border-slate-800">
                <span className="text-indigo-400 font-semibold">KNOLINK CLOUD:</span> Heterogeneous GPU & edge inference deployment APIs.
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <span>Domain: <a href="https://knolink.co.za" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">knolink.co.za</a></span>
              <span>•</span>
              <span className="text-emerald-400 font-mono">Status: Active Research & Production</span>
            </div>
          </div>
        );
        break;

      case "stack":
        output = (
          <div className="space-y-2 text-xs sm:text-sm text-slate-300 font-mono">
            <p className="text-cyan-400 font-medium font-sans">Engineering Arsenal:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-slate-950/60 border border-slate-800/80 rounded">
                <span className="text-cyan-300 font-semibold">Languages:</span> TypeScript, JavaScript, Python, C#, Java, SQL, HTML5/CSS3
              </div>
              <div className="p-2 bg-slate-950/60 border border-slate-800/80 rounded">
                <span className="text-indigo-300 font-semibold">Frontend:</span> React, Next.js, Tailwind CSS, Shadcn UI, Responsive Web
              </div>
              <div className="p-2 bg-slate-950/60 border border-slate-800/80 rounded">
                <span className="text-emerald-300 font-semibold">Backend & Data:</span> Node.js, Express, REST APIs, MongoDB, CosmosDB, Firebase
              </div>
              <div className="p-2 bg-slate-950/60 border border-slate-800/80 rounded">
                <span className="text-purple-300 font-semibold">AI & Cloud:</span> OpenAI API, Pinecone, Microsoft Azure, Docker, Git, CI/CD
              </div>
            </div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-xs sm:text-sm text-slate-300">
            <p className="text-cyan-400 font-semibold">Key Shipped & Active Systems:</p>
            <ul className="space-y-1.5 list-disc list-inside text-xs">
              <li>
                <span className="text-cyan-300 font-medium">Knolink</span> — Ecosystem for Machine Intelligence (<a href="https://knolink.co.za" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Live</a>)
              </li>
              <li>
                <span className="text-cyan-300 font-medium">Apolemia</span> — High-Throughput Inference Runtime & KV-Cache Sparsity Engine (<a href="https://apolemia.knolink.co.za" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Live</a>)
              </li>
              <li>
                <span className="text-cyan-300 font-medium">Entropy</span> — Intelligent Developer IDE & AST Compiler (<a href="https://entropy.knolink.co.za" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Live Alpha</a>)
              </li>
              <li>
                <span className="text-cyan-300 font-medium">Roots Online Butchery</span> — Full-Stack E-Commerce with Stripe payments & admin inventory (<a href="https://github.com/Thuso-Ndou/rootsonlinebutchery" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">GitHub</a>)
              </li>
              <li>
                <span className="text-cyan-300 font-medium">Decimal to Binary Converter</span> — Clean mathematical algorithmic conversion tool (<a href="https://dec2bin-eight.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Live</a>)
              </li>
            </ul>
          </div>
        );
        break;

      case "education":
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
            <p className="text-cyan-300 font-semibold">Academic & Professional Credentials:</p>
            <div className="space-y-1 text-xs">
              <div className="text-slate-200">🎓 <strong className="text-cyan-300">BSc (Honours) in Data Science</strong> (In Progress) — Eduvos</div>
              <div className="text-slate-200">🎓 <strong className="text-white">BSc in Information Technology</strong> — North-West University (NWU)</div>
              <div className="text-slate-300">📜 <strong className="text-emerald-400">IBM Data Science Professional</strong> Certificate</div>
              <div className="text-slate-300">☁️ <strong className="text-blue-400">Microsoft Azure Cloud</strong> (Compute, Storage, Identity)</div>
              <div className="text-slate-300">🛡️ <strong className="text-purple-400">Cisco Cybersecurity Essentials</strong></div>
            </div>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
            <p className="text-cyan-400 font-semibold">Connect Directly:</p>
            <div className="font-mono text-xs space-y-1 text-slate-300">
              <div>Work Email: <a href="mailto:thuso@knolink.co.za" className="text-cyan-300 underline">thuso@knolink.co.za</a></div>
              <div>Personal Email: <a href="mailto:thusondou30@gmail.com" className="text-cyan-300 underline">thusondou30@gmail.com</a></div>
              <div>Phone: <a href="tel:+27713255377" className="text-emerald-300 underline">+27 71 325 5377</a></div>
              <div>Location: Gauteng, South Africa</div>
              <div>GitHub: <a href="https://github.com/Thuso-Ndou" target="_blank" rel="noopener noreferrer" className="text-indigo-300 underline">github.com/Thuso-Ndou</a></div>
              <div>LinkedIn: <a href="https://www.linkedin.com/in/thuso-ndou-511371251" target="_blank" rel="noopener noreferrer" className="text-indigo-300 underline">linkedin.com/in/thuso-ndou-511371251</a></div>
            </div>
          </div>
        );
        break;

      case "hire":
        output = (
          <div className="space-y-1 text-xs sm:text-sm text-emerald-300 bg-emerald-950/40 p-3 rounded-lg border border-emerald-500/30">
            <p className="font-semibold text-emerald-200">Ready to Deliver Immediate Value</p>
            <p className="text-xs text-slate-300">
              Proven ability to ship end-to-end products from scratch (e.g. Knolink, e-commerce platforms), write maintainable TypeScript/Python/C#, integrate vector databases and LLMs, and collaborate with high engineering rigor.
            </p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "sudo":
      case "sudo rm -rf /":
        output = <p className="text-rose-400 font-mono text-xs">Permission denied: Knolink systems are protected with multi-layered fail-safes.</p>;
        break;

      default:
        output = (
          <p className="text-rose-400 text-xs font-mono">
            Command not recognized: &quot;{rawCmd}&quot;. Type <span className="text-emerald-400 underline cursor-pointer" onClick={() => executeCommand("help")}>help</span> to view supported commands.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        command: rawCmd,
        timestamp: time,
        output,
      },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("thuso@knolink.co.za");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickPills = [
    { label: "whoami", cmd: "whoami" },
    { label: "knolink", cmd: "knolink" },
    { label: "stack", cmd: "stack" },
    { label: "projects", cmd: "projects" },
    { label: "education", cmd: "education" },
    { label: "contact", cmd: "contact" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl bg-[#090d16]/95 border border-slate-800 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl overflow-hidden font-mono text-left">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d1322] border-b border-slate-800 select-none">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-400/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/50" />
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400 inline" />
            <span>thuso@knolink: ~</span>
          </span>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Interactive Node Ready
          </span>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors text-[11px] bg-slate-800/80 hover:bg-slate-800 px-2 py-0.5 rounded border border-slate-700"
            title="Copy email to clipboard"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? "Copied!" : "Copy Email"}</span>
          </button>
        </div>
      </div>

      {/* Quick Command Toolbar */}
      <div className="px-4 py-2 bg-[#0b0f1a] border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-[11px] scrollbar-none">
        <span className="text-slate-500 text-[10px] uppercase tracking-wider mr-1 hidden sm:inline">Run:</span>
        {quickPills.map((pill) => (
          <button
            key={pill.cmd}
            onClick={() => executeCommand(pill.cmd)}
            className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-cyan-950/30 transition-all font-mono whitespace-nowrap active:scale-95"
          >
            ${pill.label}
          </button>
        ))}
        <button
          onClick={() => executeCommand("clear")}
          className="px-2 py-1 rounded bg-slate-900/60 border border-slate-800 text-slate-500 hover:text-slate-300 transition-all font-mono text-[10px] ml-auto"
        >
          clear
        </button>
      </div>

      {/* Terminal Body */}
      <div
        className="p-4 sm:p-5 max-h-[250px] sm:max-h-[280px] overflow-y-auto space-y-4 text-xs sm:text-sm font-mono scrollbar-thin scrollbar-thumb-slate-800"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5 animate-fadeIn">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-emerald-400 font-bold">➜</span>
              <span className="text-cyan-400 font-semibold">guest@knolink:~$</span>
              <span className="text-white font-medium">{item.command}</span>
              <span className="text-[10px] text-slate-600 ml-auto">{item.timestamp}</span>
            </div>
            <div className="pl-4 border-l-2 border-slate-800/80 py-0.5">{item.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Input Line */}
      <div className="px-4 py-3 bg-[#0c101d] border-t border-slate-800 flex items-center gap-2">
        <span className="text-emerald-400 font-bold text-sm">➜</span>
        <span className="text-cyan-400 font-semibold text-xs sm:text-sm hidden sm:inline">guest@knolink:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type command ('help', 'knolink', 'whoami', 'stack')..."
          className="flex-1 bg-transparent border-none outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 font-mono caret-cyan-400"
        />
        <button
          onClick={() => executeCommand(input)}
          className="p-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 transition-colors"
          title="Execute Command"
        >
          {input.trim() ? <Send className="w-3.5 h-3.5" /> : <CornerDownLeft className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};
