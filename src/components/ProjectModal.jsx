import { X, ExternalLink, CheckCircle, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import TelemetrySimulator from './TelemetrySimulator';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const isGreen = project.accent === 'green';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-cyber-900 border border-white/10 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-cyber-800 text-slate-400 hover:text-white hover:bg-cyber-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1 rounded-md mb-2 bg-white/5 border border-white/10">
            <span className={`w-2 h-2 rounded-full ${isGreen ? 'bg-neon-green' : 'bg-neon-red'}`} />
            <span className={isGreen ? 'text-neon-green' : 'text-neon-red'}>{project.badge}</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">{project.status}</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-emerald-400 mt-1">
            {project.metrics}
          </p>
        </div>

        {/* Extended Description */}
        <div className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 space-y-3">
          <p>{project.description}</p>
          <p>{project.extendedDesc}</p>
        </div>

        {/* Interactive Sensor Simulator for Proximity Dashboard */}
        {project.interactive && (
          <div className="mb-6">
            <div className="text-xs font-mono uppercase text-neon-green tracking-wider mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              <span>Interactive Hardware Sandbox</span>
            </div>
            <TelemetrySimulator />
          </div>
        )}

        {/* Key Architectural Features */}
        <div className="mb-6">
          <h4 className="font-display font-semibold text-white text-base mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-neon-green" />
            <span>Architecture & Core Features</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, i) => (
              <div key={i} className="p-3 rounded-xl bg-cyber-950 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isGreen ? 'text-neon-green' : 'text-neon-red'}`} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-8">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies Used:</div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-cyber-800 text-slate-200 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black bg-neon-green hover:bg-[#20ff79] shadow-neon-green-sm transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source on GitHub</span>
          </a>
          <button
            onClick={onClose}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 bg-cyber-800 hover:bg-cyber-750 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
