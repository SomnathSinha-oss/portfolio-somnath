import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="education" className="py-24 sm:py-32 relative bg-[#07090E] border-t border-white/[0.05] overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-rose-500/[0.035] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. SECTION HEADER */}
        <div className="text-center mb-14 sm:mb-16">
          {/* Sub-badge: Pill-shaped badge reading "ACADEMIC JOURNEY" with dark red background and neon red/pink text */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#261016] border border-rose-500/25 shadow-sm mb-4">
            <span className="font-mono text-xs font-semibold tracking-[0.22em] text-[#ff5c77] uppercase">
              ACADEMIC JOURNEY
            </span>
          </div>

          {/* Main Title: "My Education" with a bold, sans-serif font */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-[#ff7582]">Education</span>
          </h2>
        </div>

        {/* 2. EDUCATION CARDS (Vertical Stack) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-6 sm:gap-7"
        >
          {/* Card 1: College */}
          <motion.div
            variants={cardVariants}
            className="relative overflow-hidden rounded-[24px] bg-[#11131e]/90 backdrop-blur-md p-6 sm:p-8 border border-white/[0.06] hover:border-rose-500/40 hover:shadow-[0_0_30px_rgba(255,0,85,0.12)] transition-all duration-300 group"
          >
            {/* Faded Watermark Icon on the right */}
            <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.12] group-hover:opacity-[0.22] group-hover:scale-105 transition-all duration-500 text-slate-300">
              <GraduationCap className="w-24 h-24 sm:w-28 sm:h-28 stroke-[1.2]" />
            </div>

            <div className="relative z-10 flex flex-col items-start">
              {/* Timeline Badge */}
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-[#261016] border border-rose-500/30 text-[#ff5c77]">
                2025 — Present
              </div>

              {/* Institution */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-4 sm:mt-5 tracking-tight group-hover:text-white transition-colors">
                JIS College of Engineering
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-400 mt-2 font-normal leading-relaxed">
                B.Tech in Electronics and Communication Engineering (ECE)
              </p>

              {/* Status Badge: Green pill-shaped badge at bottom left reading "Currently Pursuing" */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 mt-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Currently Pursuing</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: School */}
          <motion.div
            variants={cardVariants}
            className="relative overflow-hidden rounded-[24px] bg-[#11131e]/90 backdrop-blur-md p-6 sm:p-8 border border-white/[0.06] hover:border-rose-500/40 hover:shadow-[0_0_30px_rgba(255,0,85,0.12)] transition-all duration-300 group"
          >
            {/* Faded Watermark Icon on the right */}
            <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.12] group-hover:opacity-[0.22] group-hover:scale-105 transition-all duration-500 text-slate-300">
              <School className="w-24 h-24 sm:w-28 sm:h-28 stroke-[1.2]" />
            </div>

            <div className="relative z-10 flex flex-col items-start">
              {/* Timeline Badge */}
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-[#261016] border border-rose-500/30 text-[#ff5c77]">
                2012 — 2023
              </div>

              {/* Institution */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-4 sm:mt-5 tracking-tight group-hover:text-white transition-colors">
                P. B. Academic School
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-400 mt-2 font-normal leading-relaxed">
                ICSE (Class 10) — 2021 | ISC (Class 12) — 2023
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
