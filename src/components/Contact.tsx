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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black border-t border-neutral-800">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5 text-white" />
            <span>DISPATCH & CONNECTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Initiate Communication
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Whether you are discussing high-impact software engineering roles, data science projects, system architecture collaborations, or Knolink inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Status (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Availability Monitor Card */}
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-neutral-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Engineering Availability
                </span>
                <span className="flex items-center gap-1.5 text-xs text-neutral-300 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Available Now
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Open to full-time Software Engineer & Data Science positions, full-stack development, cloud architecture, and AI-enabled product opportunities.
              </p>
              <div className="text-[11px] font-mono text-neutral-500 pt-2 border-t border-neutral-800">
                SLA: Guaranteed response within 24 hours
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-neutral-800 space-y-3.5 shadow-xl">
              <h3 className="text-sm font-semibold font-mono text-neutral-200">
                Direct Channels
              </h3>

              {/* Work Email (Knolink) */}
              <div className="p-3.5 rounded-xl bg-black border border-neutral-800 hover:border-neutral-600 flex items-center justify-between gap-3 group transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-semibold">Work / Knolink Email</p>
                    <a
                      href="mailto:thuso@knolink.co.za"
                      className="text-xs sm:text-sm font-mono text-white hover:underline truncate block transition-colors font-medium"
                    >
                      thuso@knolink.co.za
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("thuso@knolink.co.za", "work-email")}
                  className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-colors shrink-0"
                  title="Copy work email address"
                >
                  {copiedWorkEmail ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Personal Email */}
              <div className="p-3.5 rounded-xl bg-black border border-neutral-800 hover:border-neutral-600 flex items-center justify-between gap-3 group transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Personal / Developer Email</p>
                    <a
                      href="mailto:thusondou30@gmail.com"
                      className="text-xs sm:text-sm font-mono text-neutral-300 hover:text-white truncate block transition-colors"
                    >
                      thusondou30@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("thusondou30@gmail.com", "personal-email")}
                  className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-colors shrink-0"
                  title="Copy personal email address"
                >
                  {copiedPersonalEmail ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-black border border-neutral-800 hover:border-neutral-600 flex items-center justify-between gap-3 group transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Phone / WhatsApp</p>
                    <a
                      href="tel:+27713255377"
                      className="text-xs sm:text-sm font-mono text-neutral-300 hover:text-white truncate block transition-colors"
                    >
                      +27 71 325 5377
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("+27713255377", "phone")}
                  className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-colors shrink-0"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-black border border-neutral-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Location</p>
                  <p className="text-xs sm:text-sm font-mono text-neutral-300">
                    Gauteng, South Africa (Open to Remote / Relocation)
                  </p>
                </div>
              </div>
            </div>

            {/* Social Connectors */}
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-neutral-800 space-y-3 shadow-xl">
              <span className="text-xs font-mono text-neutral-400">Professional Networks</span>
              <div className="flex gap-2.5">
                <a
                  href="https://github.com/Thuso-Ndou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/thuso-ndou-511371251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-neutral-800 shadow-2xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-display text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-neutral-400" />
                  Send a Direct Message
                </h3>
                <p className="text-xs text-neutral-400">
                  Fill out the parameters below to establish immediate connection.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono text-neutral-300">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Sarah Connor"
                      className="bg-black border-neutral-800 focus:border-white focus:ring-1 focus:ring-white text-xs text-white placeholder:text-neutral-600 rounded-xl h-10"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono text-neutral-300">
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
                      className="bg-black border-neutral-800 focus:border-white focus:ring-1 focus:ring-white text-xs text-white placeholder:text-neutral-600 rounded-xl h-10"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono text-neutral-300">
                    Subject / Discussion Context *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Software Engineering Role / Knolink Architecture"
                    className="bg-black border-neutral-800 focus:border-white focus:ring-1 focus:ring-white text-xs text-white placeholder:text-neutral-600 rounded-xl h-10"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono text-neutral-300">
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
                    className="bg-black border-neutral-800 focus:border-white focus:ring-1 focus:ring-white text-xs text-white placeholder:text-neutral-600 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white hover:bg-neutral-200 text-black font-bold text-xs h-11 rounded-xl shadow-md transition-colors"
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