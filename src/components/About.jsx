import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Cpu, 
  Terminal, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  ExternalLink,
  Award,
  Zap
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#07090E] border-t border-white/[0.05] overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-80 h-80 bg-neon-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-neon-green uppercase tracking-widest px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering at the Nexus of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-teal-300 to-cyan-400">
              Scalable Software
            </span>{' '}
            &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-rose-400">
              Hardware Prototyping
            </span>
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Narrative Bio & Terminal (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Bio Card */}
            <motion.div variants={itemVariants} className="p-6 sm:p-8 rounded-2xl bg-cyber-850/80 border border-white/[0.08] backdrop-blur-md relative overflow-hidden group hover:border-emerald-500/30 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/5 rounded-full blur-2xl group-hover:bg-neon-green/10 transition-colors pointer-events-none" />
              
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span>Hello! I'm Somnath Sinha.</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  I am a passionate <span className="text-neon-green font-medium">2nd-year B.Tech student in Electronics and Communication Engineering (ECE)</span> at{' '}
                  <span className="text-white font-medium underline decoration-emerald-500/50 underline-offset-4">
                    JIS College of Engineering
                  </span>.
                </p>
                <p>
                  My engineering journey thrives at the convergence of <span className="text-white font-medium">high-performance web technologies</span> and <span className="text-white font-medium">physical embedded microcontrollers</span>. Rather than isolating software from hardware, I engineer integrated ecosystems where telemetry data from sensors feeds real-time web interfaces with zero latency.
                </p>
                <p>
                  My core technical focus centers around:
                </p>
              </div>

              {/* Focus Pillars */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-cyber-900 border border-emerald-500/20 flex flex-col gap-1.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-neon-green flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="font-semibold text-white text-xs">Open-Source AI Tools</div>
                  <div className="text-[11px] text-slate-400">Repo automation & LLM workflows</div>
                </div>

                <div className="p-3 rounded-xl bg-cyber-900 border border-cyan-500/20 flex flex-col gap-1.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="font-semibold text-white text-xs">Full-Stack Web Apps</div>
                  <div className="text-[11px] text-slate-400">React, Node, Supabase real-time</div>
                </div>

                <div className="p-3 rounded-xl bg-cyber-900 border border-rose-500/20 flex flex-col gap-1.5">
                  <div className="w-7 h-7 rounded-lg bg-rose-500/10 text-neon-red flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="font-semibold text-white text-xs">Hardware Simulations</div>
                  <div className="text-[11px] text-slate-400">ESP32, Wokwi, HC-SR04 telemetry</div>
                </div>
              </div>
            </motion.div>

            {/* Interactive Terminal Window */}
            <motion.div variants={itemVariants} className="rounded-2xl bg-cyber-950 border border-white/10 overflow-hidden shadow-2xl">
              <div className="px-4 py-3 bg-cyber-900 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-slate-400">somnath@archlinux:~# cat dev_spec.json</span>
                </div>
                <div className="font-mono text-[10px] text-neon-green uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-ping" />
                  BASH v5.2
                </div>
              </div>
              <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto space-y-2">
                <p><span className="text-neon-green">$</span> <span className="text-slate-400">status</span> --current</p>
                <p className="text-emerald-400 pl-4">&#123; &quot;engineer&quot;: &quot;Somnath Sinha&quot;, &quot;academics&quot;: &quot;ECE B.Tech 2nd Year&quot;, &quot;institute&quot;: &quot;JIS College of Engg&quot; &#125;</p>
                <p><span className="text-neon-green">$</span> <span className="text-slate-400">skills</span> --primary</p>
                <p className="text-cyan-300 pl-4">[ &quot;React.js&quot;, &quot;Node.js&quot;, &quot;Supabase&quot;, &quot;ESP32&quot;, &quot;Arduino&quot;, &quot;C/C++&quot;, &quot;Wokwi&quot; ]</p>
                <p><span className="text-neon-green">$</span> <span className="text-slate-400">goal</span></p>
                <p className="text-rose-400 pl-4">&quot;Engineering intelligent physical-digital bridges through open source and rigorous IoT pipelines.&quot;</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Stats & Education Highlight (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-cyber-850/90 border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">
                    {stat.label}
                  </div>
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-white group-hover:text-neon-green transition-colors mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Academic Card: JIS College of Engineering */}
            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-cyber-850/80 border border-white/[0.08] backdrop-blur-md relative overflow-hidden group hover:border-neon-green/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-neon-green flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-neon-green uppercase mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                    Undergraduate Degree
                  </div>
                  <h4 className="font-display text-lg font-bold text-white">
                    {educationData.institution}
                  </h4>
                  <p className="text-sm text-slate-300 font-medium mt-0.5">
                    {educationData.degree}
                  </p>
                  <p className="text-xs font-mono text-neon-green/90 mt-1">
                    {educationData.major} · {educationData.status}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-2">
                {educationData.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Engineering Mission Quote */}
            <motion.div variants={itemVariants} className="p-5 rounded-2xl bg-gradient-to-br from-cyber-850 to-cyber-900 border border-rose-500/20 text-slate-300 relative">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-neon-red font-semibold uppercase">
                <Zap className="w-3.5 h-3.5" />
                <span>Hardware & Software Synergy</span>
              </div>
              <p className="text-xs sm:text-sm italic leading-relaxed text-slate-300">
                &ldquo;True full-stack engineering doesn't terminate at the server layer — it extends deep into microcontrollers, sensors, and firmware circuits.&rdquo;
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
