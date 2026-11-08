import { motion } from 'framer-motion';
import { Trophy, Award, Sparkles, Terminal, Calendar, MapPin, CheckCircle2, Flame } from 'lucide-react';
import { hackathonsData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 relative bg-[#05070B] overflow-hidden cyber-grid">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-neon-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-neon-green uppercase tracking-widest px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>04 // HACKATHONS & RECOGNITION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Competitive Sprints &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-teal-300 to-cyan-400">
              Open-Source Laurels
            </span>
          </h2>
          <p className="mt-3 font-mono text-xs sm:text-sm text-slate-400 max-w-xl">
            Proving engineering agility, architectural discipline, and open-source contributions in competitive and community hackathons.
          </p>
        </div>

        {/* Timeline / Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathonsData.map((item, index) => {
            const isGreen = item.accent === 'green';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`p-7 sm:p-8 rounded-3xl bg-cyber-850/85 border backdrop-blur-md relative overflow-hidden transition-all duration-300 group hover:-translate-y-1.5 ${
                  isGreen
                    ? 'border-white/[0.08] hover:border-emerald-500/40 hover:shadow-neon-green-sm'
                    : 'border-white/[0.08] hover:border-neon-red/40 hover:shadow-neon-red-sm'
                }`}
              >
                {/* Glow ambient inside card */}
                <div className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl pointer-events-none ${
                  isGreen ? 'bg-neon-green/5 group-hover:bg-neon-green/10' : 'bg-neon-red/5 group-hover:bg-neon-red/10'
                } transition-colors`} />

                {/* Header with Trophy Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold ${
                    isGreen
                      ? 'bg-emerald-500/15 text-neon-green border border-emerald-500/40 shadow-neon-green-sm'
                      : 'bg-rose-500/15 text-neon-red border border-rose-500/40 shadow-neon-red-sm'
                  }`}>
                    {isGreen ? <Trophy className="w-3.5 h-3.5 text-yellow-400" /> : <Flame className="w-3.5 h-3.5 text-neon-red" />}
                    <span>{item.badge}</span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Title & Role */}
                <h3 className="font-display text-2xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                
                <div className="font-mono text-xs text-neon-green mb-3">
                  {item.role}
                </div>

                <div className="text-xs font-mono text-slate-400 mb-4 pb-4 border-b border-white/[0.07] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{item.organization}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isGreen ? 'text-neon-green' : 'text-neon-red'}`} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hackathon Mindset Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-cyber-900 border border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-neon-green shrink-0" />
            <p className="text-xs sm:text-sm text-slate-300">
              <strong className="text-white">Interested in teaming up for upcoming hackathons or dev sprints?</strong> I specialize in rapid prototype architecture, backend pipelines, and sensor IoT integration.
            </p>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-semibold font-mono text-black bg-neon-green hover:bg-[#20ff79] shadow-neon-green-sm transition-all whitespace-nowrap"
          >
            Let's Collaborate →
          </a>
        </div>

      </div>
    </section>
  );
}
