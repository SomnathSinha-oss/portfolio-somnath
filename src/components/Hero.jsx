import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Code, 
  Sparkles, 
  Mail, 
  ChevronDown,
  Layers,
  Radio
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden cyber-grid-green"
    >
      {/* Background Neon Light Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-green/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-red/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Futuristic Scanline Overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Text & CTAs (7 cols) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-800/90 border border-emerald-500/30 backdrop-blur-md mb-6 shadow-neon-green-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
            </span>
            <span className="font-mono text-xs font-semibold text-emerald-400 tracking-wider uppercase">
              Available for Open-Source & IoT Innovation
            </span>
            <span className="text-slate-600 font-mono text-xs">|</span>
            <span className="font-mono text-xs text-slate-400">ECE Undergrad</span>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={itemVariants} className="font-mono text-sm sm:text-base text-neon-green tracking-wide mb-2 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-neon-green inline" />
            <span>sys.init(&quot;somnath_sinha&quot;)</span>
          </motion.p>

          {/* Name & Headline */}
          <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-4">
            Somnath <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-emerald-400 to-teal-300">Sinha</span>
          </motion.h1>

          {/* Headline as requested */}
          <motion.div variants={itemVariants} className="mb-4">
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>Full-Stack Web Developer</span>
              <span className="text-neon-red font-mono">&</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red via-rose-400 to-red-400">
                IoT Engineer
              </span>
            </h2>
          </motion.div>

          {/* Sub-headline as requested */}
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
            {personalInfo.tagline}
          </motion.p>

          {/* Actions (CTAs) */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-black bg-neon-green shadow-neon-green hover:bg-[#25ff7f] hover:shadow-[0_0_35px_rgba(0,255,102,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group w-full sm:w-auto"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-cyber-800/80 border border-neon-red/50 hover:border-neon-red hover:text-white hover:bg-neon-red/10 hover:shadow-neon-red-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 w-full sm:w-auto group"
            >
              <Mail className="w-4 h-4 text-neon-red group-hover:rotate-12 transition-transform" />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Social Icons with Tooltips */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 pt-6 border-t border-white/[0.08] w-full max-w-lg">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Connect:</span>
            
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-cyber-800 border border-white/10 text-slate-400 hover:text-neon-green hover:border-emerald-500/50 hover:shadow-neon-green-sm hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <LinkedinIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-cyber-800 border border-white/10 text-slate-400 hover:text-neon-green hover:border-emerald-500/50 hover:shadow-neon-green-sm hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <GithubIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>

            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              aria-label="Instagram Profile"
              className="p-2.5 rounded-lg bg-cyber-800 border border-white/10 text-slate-400 hover:text-neon-red hover:border-rose-500/50 hover:shadow-neon-red-sm hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <InstagramIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>

            <div className="ml-auto hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-green"></span>
              <span>Kolkata, IN · UTC+5:30</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual Profile Container (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Orbital Neon Rings */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-neon-green/20 via-transparent to-neon-red/20 blur-xl opacity-70 animate-pulse-slow pointer-events-none" />
          
          <div className="relative w-72 sm:w-84 md:w-96 aspect-square">
            {/* Cyber HUD Corner Brackets */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-neon-green z-20" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-neon-red z-20" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-neon-green z-20" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-neon-red z-20" />

            {/* Main Profile Image Frame */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-cyber-900 border border-emerald-500/30 p-2 shadow-2xl group">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-cyber-950">
                <img
                  src={personalInfo.headshot}
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}WhatsApp Image 2026-11-08 at 1.53.45 PM.jpeg`;
                  }}
                  alt="Somnath Sinha - Full-Stack Web Developer & IoT Engineer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 grayscale-[15%] contrast-[105%]"
                />
                
                {/* Tech scanline overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-950 via-transparent to-transparent opacity-60" />
                
                {/* Bottom Card Label */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-cyber-900/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neon-green animate-ping" />
                    <span className="font-mono text-xs font-semibold text-white">Somnath Sinha</span>
                  </div>
                  <span className="font-mono text-[10px] text-neon-green bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    JIS ECE '28
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Cyber Badge 1: Developer */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 sm:-right-8 p-3 rounded-xl bg-cyber-850/95 border border-emerald-500/40 shadow-neon-green-sm backdrop-blur-md flex items-center gap-2.5 z-20"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-neon-green flex items-center justify-center">
                <Code className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Developer</span>
            </motion.div>

            {/* Floating Cyber Badge 2: Explorer */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-6 sm:-left-8 p-3 rounded-xl bg-cyber-850/95 border border-neon-red/40 shadow-neon-red-sm backdrop-blur-md flex items-center gap-2.5 z-20"
            >
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-neon-red flex items-center justify-center">
                <Radio className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Explorer</span>
            </motion.div>

            {/* Floating Cyber Badge 3: Designer */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 2 }}
              className="hidden sm:flex absolute top-1/2 -left-12 -translate-y-1/2 p-2.5 rounded-xl bg-cyber-850/95 border border-white/10 shadow-lg backdrop-blur-md items-center gap-2 z-20"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-xs sm:text-sm font-bold text-slate-200 tracking-wide">Designer</span>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 hover:text-neon-green transition-colors pointer-events-auto">
        <a href="#about" aria-label="Scroll down to About" className="flex flex-col items-center">
          <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-neon-green" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
