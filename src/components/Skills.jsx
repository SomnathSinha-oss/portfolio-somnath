import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Cpu, 
  Wrench, 
  Terminal, 
  Sparkles, 
  Radio, 
  Server, 
  Database, 
  Layout, 
  Monitor, 
  Box, 
  GitBranch,
  Layers
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stacks', icon: Layers },
    { id: 'web', label: 'Web Development', icon: Code, color: 'text-neon-green' },
    { id: 'hardware', label: 'Hardware & IoT', icon: Cpu, color: 'text-neon-red' },
    { id: 'tools', label: 'Tools & Environments', icon: Wrench, color: 'text-cyan-400' },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'web') return skillsData.web.map(s => ({ ...s, group: 'Web Development', tagColor: 'green' }));
    if (activeTab === 'hardware') return skillsData.hardware.map(s => ({ ...s, group: 'Hardware & IoT', tagColor: 'red' }));
    if (activeTab === 'tools') return skillsData.tools.map(s => ({ ...s, group: 'Tools & Environments', tagColor: 'cyan' }));
    
    return [
      ...skillsData.web.map(s => ({ ...s, group: 'Web Development', tagColor: 'green' })),
      ...skillsData.hardware.map(s => ({ ...s, group: 'Hardware & IoT', tagColor: 'red' })),
      ...skillsData.tools.map(s => ({ ...s, group: 'Tools & Environments', tagColor: 'cyan' })),
    ];
  };

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'react':
      case 'code':
        return <Code className="w-5 h-5" />;
      case 'node':
      case 'server':
        return <Server className="w-5 h-5" />;
      case 'database':
        return <Database className="w-5 h-5" />;
      case 'layout':
        return <Layout className="w-5 h-5" />;
      case 'cpu':
        return <Cpu className="w-5 h-5" />;
      case 'radio':
        return <Radio className="w-5 h-5" />;
      case 'monitor':
        return <Monitor className="w-5 h-5" />;
      case 'git':
        return <GitBranch className="w-5 h-5" />;
      case 'box':
        return <Box className="w-5 h-5" />;
      default:
        return <Terminal className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#05070B] overflow-hidden cyber-grid">
      {/* Background radial accent glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-neon-green/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-neon-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-neon-green uppercase tracking-widest px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>02 // SKILLS GRID</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Technical Arsenal &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">
                Hardware Stacks
              </span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs sm:text-sm text-slate-400 max-w-md">
            Proficiencies spanning frontend responsive UIs, backend API orchestrations, microcontroller firmware, and sensor integration.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-white/[0.08]">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? 'text-black bg-neon-green font-semibold shadow-neon-green-sm'
                    : 'text-slate-300 bg-cyber-850/80 hover:bg-cyber-800 border border-white/5 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-black' : cat.color || 'text-slate-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {getFilteredSkills().map((skill) => {
              const isGreen = skill.tagColor === 'green';
              const isRed = skill.tagColor === 'red';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={skill.name}
                  className={`p-5 rounded-2xl bg-cyber-850/80 border transition-all duration-300 group hover:-translate-y-1 ${
                    isGreen 
                      ? 'border-white/[0.07] hover:border-emerald-500/50 hover:shadow-neon-green-sm' 
                      : isRed 
                      ? 'border-white/[0.07] hover:border-neon-red/50 hover:shadow-neon-red-sm'
                      : 'border-white/[0.07] hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isGreen 
                          ? 'bg-emerald-500/10 text-neon-green border border-emerald-500/20 group-hover:bg-neon-green group-hover:text-black' 
                          : isRed 
                          ? 'bg-rose-500/10 text-neon-red border border-rose-500/20 group-hover:bg-neon-red group-hover:text-white'
                          : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-400 group-hover:text-black'
                      }`}>
                        {getSkillIcon(skill.icon)}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-white text-base group-hover:text-white transition-colors">
                          {skill.name}
                        </h3>
                        <span className="font-mono text-[11px] text-slate-400">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <span className="font-mono text-xs font-semibold text-slate-400 px-2 py-0.5 rounded bg-cyber-900 border border-white/5">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                    {skill.desc}
                  </p>

                  {/* Meter Progress Bar */}
                  <div className="w-full h-1.5 rounded-full bg-cyber-950 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        isGreen 
                          ? 'bg-gradient-to-r from-emerald-500 to-neon-green' 
                          : isRed 
                          ? 'bg-gradient-to-r from-rose-500 to-neon-red'
                          : 'bg-gradient-to-r from-cyan-600 to-cyan-400'
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Quick Stacks Summary Pills */}
        <div className="mt-12 p-6 rounded-2xl bg-cyber-900/60 border border-white/[0.06] backdrop-blur-md">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-neon-green" />
            <span>Curated Skill Matrix Overview:</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-xl bg-cyber-850 border border-emerald-500/20">
              <span className="text-xs font-mono text-neon-green font-bold block mb-1">01. Web Development</span>
              <p className="text-xs text-slate-300">React.js, Node.js, Supabase, HTML, CSS, JavaScript</p>
            </div>
            <div className="p-3.5 rounded-xl bg-cyber-850 border border-rose-500/20">
              <span className="text-xs font-mono text-neon-red font-bold block mb-1">02. Hardware & IoT</span>
              <p className="text-xs text-slate-300">ESP32, Arduino, C/C++, PlatformIO, Wokwi, HC-SR04 sensors</p>
            </div>
            <div className="p-3.5 rounded-xl bg-cyber-850 border border-cyan-500/20">
              <span className="text-xs font-mono text-cyan-400 font-bold block mb-1">03. Tools & Environments</span>
              <p className="text-xs text-slate-300">Git, Linux, VirtualBox, VS Code</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
