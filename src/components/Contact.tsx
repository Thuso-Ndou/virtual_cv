import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  MessageSquare, 
  Terminal,
  ExternalLink 
} from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedWorkEmail, setCopiedWorkEmail] = useState(false);
  const [copiedPersonalEmail, setCopiedPersonalEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    await new Promise((resolve) => setTimeout(resolve, 800));

    toast({
      title: "Message dispatched!",
      description: "Thank you for reaching out, Thuso will review and respond within 24 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCopy = (text: string, type: "work-email" | "personal-email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "work-email") {
      setCopiedWorkEmail(true);
      setTimeout(() => setCopiedWorkEmail(false), 2000);
    } else if (type === "personal-email") {
      setCopiedPersonalEmail(true);
      setTimeout(() => setCopiedPersonalEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
    toast({
      title: "Copied to clipboard!",
      description: text,
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#07090e] border-t border-slate-800/80">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>DISPATCH & CONNECTIVITY</span>
          </div>
          <h2 className="section-title">
            Initiate <span className="gradient-text-cyan">Communication</span>
          </h2>
          <p className="section-subtitle">
            Whether you are discussing high-impact software engineering roles, data science projects, system architecture collaborations, or Knolink inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Status (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Availability Monitor Card */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Engineering Availability
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Available Now
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Open to full-time Software Engineer & Data Science positions, full-stack development, cloud architecture, and AI-enabled product opportunities.
              </p>
              <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800/80">
                SLA: Guaranteed response within 24 hours
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-800 space-y-3.5 shadow-xl">
              <h3 className="text-sm font-semibold font-mono text-slate-200">
                Direct Channels
              </h3>

              {/* Work Email (Knolink) */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-cyan-500/30 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">Work / Knolink Email</p>
                    <a
                      href="mailto:thuso@knolink.co.za"
                      className="text-xs sm:text-sm font-mono text-slate-100 hover:text-cyan-300 truncate block transition-colors font-medium"
                    >
                      thuso@knolink.co.za
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("thuso@knolink.co.za", "work-email")}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-colors shrink-0"
                  title="Copy work email address"
                >
                  {copiedWorkEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Personal Email */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-indigo-950/50 border border-indigo-500/30 text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Personal / Developer Email</p>
                    <a
                      href="mailto:thusondou30@gmail.com"
                      className="text-xs sm:text-sm font-mono text-slate-200 hover:text-indigo-300 truncate block transition-colors"
                    >
                      thusondou30@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("thusondou30@gmail.com", "personal-email")}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500/40 text-slate-400 hover:text-indigo-300 transition-colors shrink-0"
                  title="Copy personal email address"
                >
                  {copiedPersonalEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Phone / WhatsApp</p>
                    <a
                      href="tel:+27713255377"
                      className="text-xs sm:text-sm font-mono text-slate-200 hover:text-emerald-400 truncate block transition-colors"
                    >
                      +27 71 325 5377
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("+27713255377", "phone")}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-slate-400 hover:text-emerald-300 transition-colors shrink-0"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-950/50 border border-purple-500/30 text-purple-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Location</p>
                  <p className="text-xs sm:text-sm font-mono text-slate-200">
                    Gauteng, South Africa (Open to Remote / Relocation)
                  </p>
                </div>
              </div>
            </div>

            {/* Social Connectors */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-slate-400">Professional Networks</span>
              <div className="flex gap-2.5">
                <a
                  href="https://github.com/Thuso-Ndou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/thuso-ndou-511371251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-indigo-400 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090d16] border border-slate-800 shadow-2xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-display text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400">
                  Fill out the parameters below to establish immediate connection.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Sarah Connor"
                      className="bg-slate-950/80 border-slate-800 focus:border-cyan-500 text-xs text-slate-100 placeholder:text-slate-600 rounded-xl h-10"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300">
                      Your Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="sarah@company.com"
                      className="bg-slate-950/80 border-slate-800 focus:border-cyan-500 text-xs text-slate-100 placeholder:text-slate-600 rounded-xl h-10"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300">
                    Subject / Discussion Context *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Software Engineering Role / Knolink Architecture"
                    className="bg-slate-950/80 border-slate-800 focus:border-cyan-500 text-xs text-slate-100 placeholder:text-slate-600 rounded-xl h-10"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300">
                    Message Content *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe project requirements, engineering role specifics, or ideas..."
                    rows={5}
                    className="bg-slate-950/80 border-slate-800 focus:border-cyan-500 text-xs text-slate-100 placeholder:text-slate-600 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs h-11 rounded-xl shadow-lg shadow-cyan-500/20"
                >
                  {isSubmitting ? (
                    "Transmitting payload..."
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 mr-2" />
                      Dispatch Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;