import React from 'react';
import { motion } from 'framer-motion';

const coaPoints = [
  { title: 'Clock Skew & Jitter', desc: 'At nanometer scales, physical variations create inconsistent signal timing (skew) across the large die, limiting the global clock frequency.' },
  { title: 'Dynamic Voltage Scaling', desc: 'Modern CPUs use DVFS to compensate for high-Vmin chips, but this adds complexity to the power delivery network (PDN).' },
  { title: 'Dark Silicon Problem', desc: 'Manufacturing variation exacerbates power density limits; we can build billons of transistors, but variability means we can\'t turn them all on at once.' },
  { title: 'Fault Tolerance', desc: 'Architecting processors that can disable "bad" cores (laser cutting) allows a low-yield die to still function as a lower-tier SKU.' }
];

export const Section10COA: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen py-32 flex flex-col items-center justify-center px-[10%] bg-surface">
      <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <div className="ui-label text-purple-400 mb-6 tracking-[0.3em]">ACADEMIC CONTEXT // 10</div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-8">
            ARCHITECTURAL <br/>
            <span className="text-purple-400 italic">IMPLICATIONS</span>
          </h2>
          <p className="text-muted text-xl font-sans font-light leading-relaxed mb-10">
             The Silicon Lottery isn't just a hobbyist term—it defines the physical constraints of Computer Organization and Architecture. Hardware designers must build systems that assume variation is a constant.
          </p>
          
          <div className="glass-panel p-8 border-l-4 border-l-purple-500">
             <div className="font-mono text-white text-sm mb-4">COA RESEARCH TIP</div>
             <p className="text-gray-400 text-sm leading-relaxed">
                "Guard-banding" is the practice of setting default voltage/clocks to a conservative level so that even the "worst" binned chips are stable. Enthusiasts "win" the lottery when their chip has a smaller required guard-band.
             </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
           {coaPoints.map((point, i) => (
             <motion.div
               key={point.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-6 rounded-lg bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all group"
             >
                <div className="text-white font-display text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors uppercase tracking-wider">{point.title}</div>
                <div className="text-muted text-sm font-sans leading-relaxed">{point.desc}</div>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};
