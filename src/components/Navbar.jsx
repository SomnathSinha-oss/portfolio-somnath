import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#05070B]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2 font-display text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-neon-green transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-cyber-800 border border-emerald-500/30 flex items-center justify-center text-neon-green group-hover:border-neon-green group-hover:shadow-neon-green-sm transition-all">
              <Terminal className="w-4 h-4 text-neon-green" />
            </div>
            <span>
              SS<span className="text-neon-green">.</span>
              <span className="text-xs font-mono font-normal text-slate-400 ml-1 hidden sm:inline-block">
                dev[iot]
              </span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-cyber-850/80 px-3 py-1.5 rounded-full border border-white/[0.07] backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-neon-green bg-emerald-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-neon-green rounded-full shadow-[0_0_8px_#00FF66]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-black bg-neon-green rounded-full shadow-[0_0_20px_rgba(0,255,102,0.4)] hover:bg-[#20ff79] hover:shadow-[0_0_25px_rgba(0,255,102,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                Let's Talk
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white bg-cyber-800 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-green"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-neon-red" /> : <Menu className="w-6 h-6 text-neon-green" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#05070B]/95 backdrop-blur-xl md:hidden flex flex-col justify-between pt-24 pb-8 px-6 border-b border-emerald-500/20 animate-in fade-in duration-200">
          <div className="flex flex-col gap-3">
            <div className="text-xs font-mono text-neon-green tracking-wider uppercase mb-2">
              Navigation // Somnath.portfolio
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-lg font-medium text-slate-200 hover:text-neon-green p-3 rounded-lg hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20 transition-all"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-slate-500">→</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-black font-semibold bg-gradient-to-r from-neon-green to-emerald-400 shadow-[0_0_20px_rgba(0,255,102,0.4)]"
            >
              <Sparkles className="w-4 h-4 text-black" />
              Contact Me
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Somnath Sinha · ECE</span>
            <span className="text-neon-green flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-ping" />
              SYSTEM ACTIVE
            </span>
          </div>
        </div>
      )}
    </>
  );
}
