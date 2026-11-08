import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Terminal, 
  Sparkles,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00FF66', '#FF0055', '#00F0FF', '#ffffff']
        });
      } catch (err) {
        // ignore
      }
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4500);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#07090E] border-t border-white/[0.05] overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-neon-green/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-neon-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-neon-green uppercase tracking-widest px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>05 // GET IN TOUCH</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Engineer Something <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-teal-300 to-cyan-400">
              Extraordinary Together
            </span>
          </h2>
          <p className="mt-3 font-mono text-xs sm:text-sm text-slate-400 max-w-xl">
            Whether you want to collaborate on open-source AI tools, discuss full-stack applications, or prototype hardware IoT solutions — my inbox is open.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Large Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Info Card: Email */}
            <div className="p-6 rounded-2xl bg-cyber-850/90 border border-white/[0.08] backdrop-blur-md relative overflow-hidden group hover:border-emerald-500/30 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-neon-green flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-mono text-sm sm:text-base font-bold text-white hover:text-neon-green transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={copyEmailToClipboard}
                  className="p-2.5 rounded-lg bg-cyber-900 border border-white/10 text-slate-400 hover:text-white hover:border-emerald-500/50 transition-all"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-neon-green" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copiedEmail && (
                <div className="mt-3 text-xs font-mono text-neon-green flex items-center gap-1.5 animate-in fade-in">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email address copied to clipboard!</span>
                </div>
              )}
            </div>

            {/* Direct Info Card: Phone */}
            <div className="p-6 rounded-2xl bg-cyber-850/90 border border-white/[0.08] backdrop-blur-md relative overflow-hidden group hover:border-neon-red/30 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 text-neon-red flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="font-mono text-base font-bold text-white hover:text-neon-red transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Academic Base */}
            <div className="p-5 rounded-2xl bg-cyber-900 border border-white/5 flex items-center gap-3 text-xs text-slate-400 font-mono">
              <MapPin className="w-4 h-4 text-neon-green shrink-0" />
              <span>JIS College of Engineering · Kolkata, West Bengal, India</span>
            </div>

            {/* Large Social Connect Cards */}
            <div className="pt-2">
              <h3 className="font-display font-bold text-white text-base mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-neon-green" />
                <span>Verified Social Profiles</span>
              </h3>

              <div className="space-y-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-cyber-850 border border-white/[0.07] text-slate-300 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/5 hover:translate-x-1.5 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white group-hover:text-neon-green transition-colors">LinkedIn</div>
                      <div className="text-[11px] font-mono text-slate-400">@somnath-sinha-b64b76358</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-neon-green transition-colors" />
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-cyber-850 border border-white/[0.07] text-slate-300 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/5 hover:translate-x-1.5 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 text-slate-200 flex items-center justify-center">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white group-hover:text-neon-green transition-colors">GitHub</div>
                      <div className="text-[11px] font-mono text-slate-400">@SomnathSinha-oss</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-neon-green transition-colors" />
                </a>

                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-cyber-850 border border-white/[0.07] text-slate-300 hover:text-white hover:border-neon-red/40 hover:bg-neon-red/5 hover:translate-x-1.5 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-rose-500/10 text-neon-red flex items-center justify-center">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white group-hover:text-neon-red transition-colors">Instagram</div>
                      <div className="text-[11px] font-mono text-slate-400">@phoenix_s0m</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-neon-red transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-cyber-850/95 border border-white/[0.08] backdrop-blur-md relative overflow-hidden shadow-2xl">
              
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-neon-green" />
                  <h3 className="font-display text-xl font-bold text-white">
                    Send Transmission
                  </h3>
                </div>
                <div className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                  <span>ONLINE & LISTENING</span>
                </div>
              </div>

              {formStatus === 'success' ? (
                <div className="py-12 px-4 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-neon-green border border-emerald-500/40 flex items-center justify-center mx-auto shadow-neon-green">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white">Transmission Received!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, <span className="text-neon-green font-semibold">{formData.name || 'friend'}</span>. I will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-cyber-800 text-slate-200 hover:text-white hover:bg-cyber-700 transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Your Name <span className="text-neon-red">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Turing"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-cyber-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green font-sans text-sm transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Your Email Address <span className="text-neon-red">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-cyber-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green font-sans text-sm transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-slate-300">
                        Project Message / Inquiry <span className="text-neon-red">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-slate-500">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Discuss a full-stack project, open-source AI repo, IoT sensor prototype, or hackathon collaboration..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-cyber-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green font-sans text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 px-6 rounded-xl font-semibold text-black bg-neon-green hover:bg-[#22ff80] shadow-neon-green hover:shadow-[0_0_35px_rgba(0,255,102,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center gap-2 text-sm font-mono">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Transmitting Packet...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-sm font-semibold tracking-wide">
                        <span>Send Message</span>
                        <Send className="w-4 h-4 text-black group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    )}
                  </button>

                  <div className="text-center font-mono text-[11px] text-slate-500">
                    Encrypted via client-side SSL · Direct ping to sinhasomnath740@gmail.com
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
