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
        <div className="space-y-1.5 text-neutral-300">
          <p className="text-white font-semibold text-xs sm:text-sm">
            Knolink Engineering Console [v2.4.0-prod]
          </p>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Active Node: <span className="text-neutral-200 font-mono">thuso@knolink.co.za</span> • Runtimes: <span className="text-neutral-300 font-mono">Apolemia / Entropy</span>
          </p>
          <p className="text-[11px] text-neutral-500">
            Type <span className="text-white font-mono font-medium">help</span> or click the command pills above to explore.
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
            <p className="text-white font-medium mb-1">Available System Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 font-mono text-neutral-300">
              <div><span className="text-white font-semibold">whoami</span> - Developer profile & philosophy</div>
              <div><span className="text-white font-semibold">knolink</span> - Knolink AI workspace architecture</div>
              <div><span className="text-white font-semibold">stack</span> - Core technical stack & tools</div>
              <div><span className="text-white font-semibold">projects</span> - Shipped systems & live demos</div>
              <div><span className="text-white font-semibold">education</span> - BSc Honours & IT degrees, credentials</div>
              <div><span className="text-white font-semibold">contact</span> - Direct channels (Work & Personal)</div>
              <div><span className="text-white font-semibold">hire</span> - Why collaborate with Thuso</div>
              <div><span className="text-white font-semibold">clear</span> - Clear terminal session</div>
            </div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-2 text-xs sm:text-sm text-neutral-300">
            <p className="text-white font-semibold">Thuso Ndou — Full-Stack Software Engineer & Data Scientist</p>
            <p>
              Architect and developer of <span className="text-white font-medium">Knolink</span> (an AI-powered workspace for deep research). Currently studying <strong className="text-white">BSc (Honours) in Data Science at Eduvos</strong>, and holds a <strong className="text-white">BSc in Information Technology from North-West University</strong>. Skilled in TypeScript, React, Node.js/Express, Python data pipelines, Pinecone vector search, and Azure Cloud.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded font-mono">30+ Shipped Projects</span>
              <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded font-mono">BSc Hons Data Science (Eduvos)</span>
              <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded font-mono">North-West Univ BSc IT</span>
            </div>
          </div>
        );
        break;

      case "knolink":
        output = (
          <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
            <div className="flex items-center gap-2 text-white font-semibold">
              <KnolinkIcon size={18} className="w-4 h-auto" />
              <span>Knolink — Systems for Machine Intelligence (knolink.co.za)</span>
            </div>
            <p className="text-neutral-300 text-xs leading-relaxed">
              Knolink is an independent research and engineering company building systems for machine intelligence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
              <div className="p-2 bg-[#0a0a0a] rounded border border-neutral-800">
                <span className="text-white font-semibold">APOLEMIA:</span> High-throughput inference runtime (activation sparsity, dynamic KV-cache).
              </div>
              <div className="p-2 bg-[#0a0a0a] rounded border border-neutral-800">
                <span className="text-white font-semibold">ENTROPY IDE:</span> Context-aware AST compiler & browser-native workspace.
              </div>
              <div className="p-2 bg-[#0a0a0a] rounded border border-neutral-800">
                <span className="text-white font-semibold">PRAXIS RL:</span> Strategic reinforcement learning via self-play & deep MCTS.
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-neutral-400 pt-1">
              <span>Domain: <a href="https://knolink.co.za" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-neutral-300">knolink.co.za</a></span>
              <span>•</span>
              <span className="text-neutral-300 font-mono">Status: Active Research & Production</span>
            </div>
          </div>
        );
        break;

      case "stack":
        output = (
          <div className="space-y-2 text-xs sm:text-sm text-neutral-300 font-mono">
            <p className="text-white font-medium font-sans">Engineering Arsenal:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-[#0a0a0a] border border-neutral-800 rounded">
                <span className="text-white font-semibold">Languages:</span> TypeScript, JavaScript, Python, Rust, C#, Java, SQL
              </div>
              <div className="p-2 bg-[#0a0a0a] border border-neutral-800 rounded">
                <span className="text-white font-semibold">Frontend:</span> React, Next.js, Tailwind CSS, Responsive Web, Wasm
              </div>
              <div className="p-2 bg-[#0a0a0a] border border-neutral-800 rounded">
                <span className="text-white font-semibold">Backend & Data:</span> Node.js, Express, REST APIs, MongoDB, Firebase
              </div>
              <div className="p-2 bg-[#0a0a0a] border border-neutral-800 rounded">
                <span className="text-white font-semibold">AI & Cloud:</span> OpenAI API, Pinecone, Microsoft Azure, Docker, Git
              </div>
            </div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-xs sm:text-sm text-neutral-300">
            <p className="text-white font-semibold">Key Shipped & Active Systems:</p>
            <ul className="space-y-1.5 list-disc list-inside text-xs">
              <li>
                <span className="text-white font-medium">Knolink</span> — Ecosystem for Machine Intelligence (<a href="https://knolink.co.za" target="_blank" rel="noopener noreferrer" className="text-white underline">Live</a>)
              </li>
              <li>
                <span className="text-white font-medium">Apolemia</span> — High-Throughput Inference Runtime & KV-Cache Sparsity Engine (<a href="https://apolemia.knolink.co.za" target="_blank" rel="noopener noreferrer" className="text-white underline">Live</a>)
              </li>
              <li>
                <span className="text-white font-medium">Entropy</span> — Intelligent Developer IDE & AST Compiler (<a href="https://entropy.knolink.co.za" target="_blank" rel="noopener noreferrer" className="text-white underline">Live Alpha</a>)
              </li>
              <li>
                <span className="text-white font-medium">Roots Online Butchery</span> — Full-Stack E-Commerce with Stripe payments & admin inventory (<a href="https://github.com/Thuso-Ndou/rootsonlinebutchery" target="_blank" rel="noopener noreferrer" className="text-white underline">GitHub</a>)
              </li>
              <li>
                <span className="text-white font-medium">Decimal to Binary Converter</span> — Clean mathematical algorithmic conversion tool (<a href="https://dec2bin-eight.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white underline">Live</a>)
              </li>
            </ul>
          </div>
        );
        break;

      case "education":
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm text-neutral-300">
            <p className="text-white font-semibold">Academic & Professional Credentials:</p>
            <div className="space-y-1 text-xs">
              <div className="text-neutral-200">🎓 <strong className="text-white">BSc (Honours) in Data Science</strong> (In Progress) — Eduvos</div>
              <div className="text-neutral-200">🎓 <strong className="text-white">BSc in Information Technology</strong> — North-West University (NWU)</div>
              <div className="text-neutral-300">📜 <strong className="text-white">IBM Data Science Professional</strong> Certificate</div>
              <div className="text-neutral-300">☁️ <strong className="text-white">Microsoft Azure Cloud</strong> (Compute, Storage, Identity)</div>
              <div className="text-neutral-300">🛡️ <strong className="text-white">Cisco Cybersecurity Essentials</strong></div>
            </div>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm text-neutral-300">
            <p className="text-white font-semibold">Connect Directly:</p>
            <div className="font-mono text-xs space-y-1 text-neutral-300">
              <div>Work Email: <a href="mailto:thuso@knolink.co.za" className="text-white underline">thuso@knolink.co.za</a></div>
              <div>Personal Email: <a href="mailto:thusondou30@gmail.com" className="text-white underline">thusondou30@gmail.com</a></div>
              <div>Phone: <a href="tel:+27713255377" className="text-white underline">+27 71 325 5377</a></div>
              <div>Location: Gauteng, South Africa</div>
              <div>GitHub: <a href="https://github.com/Thuso-Ndou" target="_blank" rel="noopener noreferrer" className="text-white underline">github.com/Thuso-Ndou</a></div>
              <div>LinkedIn: <a href="https://www.linkedin.com/in/thuso-ndou-511371251" target="_blank" rel="noopener noreferrer" className="text-white underline">linkedin.com/in/thuso-ndou-511371251</a></div>
            </div>
          </div>
        );
        break;

      case "hire":
        output = (
          <div className="space-y-1 text-xs sm:text-sm text-neutral-200 bg-[#0a0a0a] p-3 rounded-lg border border-neutral-800">
            <p className="font-semibold text-white">Ready to Deliver Immediate Value</p>
            <p className="text-xs text-neutral-400">
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
        output = <p className="text-neutral-400 font-mono text-xs">Permission denied: Knolink systems are protected with multi-layered fail-safes.</p>;
        break;

      default:
        output = (
          <p className="text-neutral-400 text-xs font-mono">
            Command not recognized: &quot;{rawCmd}&quot;. Type <span className="text-white underline cursor-pointer" onClick={() => executeCommand("help")}>help</span> to view supported commands.
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
    <div className="w-full max-w-3xl mx-auto rounded-2xl bg-black border border-neutral-800 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-left">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a] border-b border-neutral-800 select-none">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-neutral-700" />
          <div className="w-3 h-3 rounded-full bg-neutral-700" />
          <div className="w-3 h-3 rounded-full bg-neutral-700" />
          <span className="ml-2 text-xs font-mono text-neutral-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-white inline" />
            <span>thuso@knolink: ~</span>
          </span>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Node Ready
          </span>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors text-[11px] bg-neutral-900 hover:bg-neutral-800 px-2 py-0.5 rounded border border-neutral-800"
            title="Copy email to clipboard"
          >
            {copied ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? "Copied!" : "Copy Email"}</span>
          </button>
        </div>
      </div>

      {/* Quick Command Toolbar */}
      <div className="px-4 py-2 bg-black border-b border-neutral-800 flex items-center gap-1.5 overflow-x-auto text-[11px] scrollbar-none">
        <span className="text-neutral-500 text-[10px] uppercase tracking-wider mr-1 hidden sm:inline">Run:</span>
        {quickPills.map((pill) => (
          <button
            key={pill.cmd}
            onClick={() => executeCommand(pill.cmd)}
            className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all font-mono whitespace-nowrap active:scale-95"
          >
            ${pill.label}
          </button>
        ))}
        <button
          onClick={() => executeCommand("clear")}
          className="px-2 py-1 rounded bg-neutral-900/60 border border-neutral-800 text-neutral-500 hover:text-white transition-all font-mono text-[10px] ml-auto"
        >
          clear
        </button>
      </div>

      {/* Terminal Body */}
      <div
        className="p-4 sm:p-5 max-h-[250px] sm:max-h-[280px] overflow-y-auto space-y-4 text-xs sm:text-sm font-mono scrollbar-thin scrollbar-thumb-neutral-800 bg-black"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5 animate-fadeIn">
            <div className="flex items-center gap-2 text-neutral-400">
              <span className="text-emerald-400 font-bold">➜</span>
              <span className="text-white font-semibold">thuso@knolink:~$</span>
              <span className="text-neutral-200 font-medium">{item.command}</span>
              <span className="text-[10px] text-neutral-600 ml-auto">{item.timestamp}</span>
            </div>
            <div className="pl-4 border-l-2 border-neutral-800 py-0.5">{item.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Input Line */}
      <div className="px-4 py-3 bg-[#0a0a0a] border-t border-neutral-800 flex items-center gap-2">
        <span className="text-emerald-400 font-bold text-sm">➜</span>
        <span className="text-white font-semibold text-xs sm:text-sm hidden sm:inline">thuso@knolink:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type command ('help', 'knolink', 'whoami', 'stack')..."
          className="flex-1 bg-transparent border-none outline-none text-xs sm:text-sm text-white placeholder:text-neutral-600 font-mono caret-white"
        />
        <button
          onClick={() => executeCommand(input)}
          className="p-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 transition-colors"
          title="Execute Command"
        >
          {input.trim() ? <Send className="w-3.5 h-3.5" /> : <CornerDownLeft className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};
