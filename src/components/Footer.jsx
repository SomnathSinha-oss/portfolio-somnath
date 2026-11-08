import { Terminal, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#040508] border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Logo & Headline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyber-800 border border-emerald-500/30 flex items-center justify-center text-neon-green shadow-neon-green-sm">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="font-display text-lg font-bold text-white flex items-center gap-1.5">
                <span>Somnath Sinha</span>
                <span className="text-neon-green">.</span>
              </div>
              <p className="text-xs font-mono text-slate-400">
                Full-Stack Web Developer & IoT Engineer · JIS College of Engineering
              </p>
            </div>
          </div>

          {/* Social Icons Reiterated */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-cyber-850 text-slate-400 hover:text-neon-green hover:border-emerald-500/40 border border-white/5 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-cyber-850 text-slate-400 hover:text-neon-green hover:border-emerald-500/40 border border-white/5 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              aria-label="Instagram Profile"
              className="p-2.5 rounded-xl bg-cyber-850 text-slate-400 hover:text-neon-red hover:border-rose-500/40 border border-white/5 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="ml-2 p-2.5 rounded-xl bg-cyber-800 text-neon-green hover:bg-emerald-500/20 border border-emerald-500/30 transition-all flex items-center gap-1 text-xs font-mono"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Somnath Sinha. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with React, Tailwind CSS &amp; Framer Motion</span>
            <span className="text-neon-green">⚡</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
