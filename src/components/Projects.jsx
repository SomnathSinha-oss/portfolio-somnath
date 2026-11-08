import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Layers, 
  MessageSquare, 
  HeartHandshake, 
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import TelemetrySimulator from './TelemetrySimulator';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showLiveTelemetry, setShowLiveTelemetry] = useState(false);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'repopilot-ai':
        return <Sparkles className="w-5 h-5 text-neon-green" />;
      case 'chatlixy':
        return <MessageSquare className="w-5 h-5 text-neon-red" />;
      case 'proximity-dashboard':
        return <Cpu className="w-5 h-5 text-neon-green" />;
      case 'unesco-organ-donation':
        return <HeartHandshake className="w-5 h-5 text-neon-red" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-neon-green" />;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#07090E] border-t border-white/[0.05] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-neon-green uppercase tracking-widest px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 // FEATURED PROJECTS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Selected Software &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-emerald-400 to-teal-300">
                Hardware Systems
              </span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => setShowLiveTelemetry(!showLiveTelemetry)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-neon-green bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
            >
              <Cpu className="w-4 h-4 text-neon-green animate-spin-slow" />
              <span>{showLiveTelemetry ? 'Hide IoT Sandbox' : 'Toggle Live IoT Telemetry Sandbox'}</span>
            </button>
          </div>
        </div>

        {/* Optional Embedded Live IoT Sandbox */}
        {showLiveTelemetry && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-14"
          >
            <TelemetrySimulator />
          </motion.div>
        )}

        {/* Featured Projects Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const isGreen = project.accent === 'green';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-8 bg-cyber-850/85 border backdrop-blur-md flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 ${
                  isGreen
                    ? 'border-white/[0.08] hover:border-emerald-500/40 hover:shadow-neon-green-sm'
                    : 'border-white/[0.08] hover:border-neon-red/40 hover:shadow-neon-red-sm'
                }`}
              >
                {/* Top Bar with Status and Category */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isGreen ? 'bg-emerald-500/10 text-neon-green border border-emerald-500/20' : 'bg-rose-500/10 text-neon-red border border-rose-500/20'
                      }`}>
                        {getProjectIcon(project.id)}
                      </div>
                      <div>
                        <span className={`font-mono text-xs font-semibold uppercase tracking-wider block ${
                          isGreen ? 'text-neon-green' : 'text-neon-red'
                        }`}>
                          {project.badge}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Metric indicator badge */}
                    <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-900 border border-white/5 text-[11px] font-mono text-slate-400">
                      <span className={`w-1.5 h-1.5 rounded-full ${isGreen ? 'bg-neon-green' : 'bg-neon-red'} animate-pulse`} />
                      <span>{isGreen ? 'v1.4.0' : 'STABLE'}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className={`font-mono text-xs mt-0.5 ${isGreen ? 'text-neon-green' : 'text-neon-red'}`}>▸</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Stack & Action Links */}
                <div className="pt-6 border-t border-white/[0.08]">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyber-900/90 text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-200 hover:text-neon-green transition-colors"
                    >
                      <span>Deep Dive & Specs</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repo for ${project.title}`}
                        className="p-2 rounded-lg bg-cyber-800 text-slate-300 hover:text-white hover:bg-cyber-700 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => setSelectedProject(project)}
                        aria-label={`Inspect ${project.title}`}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          isGreen 
                            ? 'bg-neon-green text-black hover:bg-[#20ff79] shadow-neon-green-sm'
                            : 'bg-neon-red text-white hover:bg-[#ff1a66] shadow-neon-red-sm'
                        }`}
                      >
                        <span>Details</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global GitHub CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-cyber-850 border border-white/[0.08] backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyber-900 border border-emerald-500/30 flex items-center justify-center text-neon-green shrink-0">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-lg">
                Explore More Repositories & Experimental Circuits
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Continuous open-source commits, PlatformIO firmware sketches, and full-stack modules on GitHub.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/SomnathSinha-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-black bg-neon-green hover:bg-[#20ff79] shadow-neon-green-sm hover:-translate-y-0.5 transition-all whitespace-nowrap shrink-0"
          >
            <span>Visit @SomnathSinha-oss</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
