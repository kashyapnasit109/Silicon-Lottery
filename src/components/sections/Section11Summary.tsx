import React from 'react';
import { motion } from 'framer-motion';

export const Section11RealWorld: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen py-32 flex flex-col items-center justify-center px-[10%]">
      <div className="max-w-7xl w-full z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="ui-label text-cyan-400 mb-4">APPLICATIONS // 11</div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">WHY IT MATTERS</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1: Overclocking */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="w-24 h-24 rounded-full bg-cyan-900/30 border border-cyan-400/30 flex items-center justify-center text-3xl">🎮</div>
            <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">ENTHUSIAST GAMING</h3>
            <p className="text-muted font-sans font-light">"Golden samples" allow for higher frame rates and lower noise by running extreme speeds at minimum voltage.</p>
          </motion.div>

          {/* Card 2: Servers */}
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             viewport={{ once: true }}
             className="flex flex-col items-center text-center space-y-6"
          >
            <div className="w-24 h-24 rounded-full bg-blue-900/30 border border-blue-400/30 flex items-center justify-center text-3xl">☁️</div>
            <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">DATACENTER EFFICIENCY</h3>
            <p className="text-muted font-sans font-light">Thousands of binned CPUs save millions in energy bills by operating at the peak efficiency curves.</p>
          </motion.div>

          {/* Card 3: Mobile */}
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             viewport={{ once: true }}
             className="flex flex-col items-center text-center space-y-6"
          >
            <div className="w-24 h-24 rounded-full bg-purple-900/30 border border-purple-400/30 flex items-center justify-center text-3xl">📱</div>
            <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">MOBILE BATTERY LIFE</h3>
            <p className="text-muted font-sans font-light">Leakage-binned dies ensure your smartphone doesn't overheat or drain battery while performing simple tasks.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Section12Summary: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center px-[10%] text-center overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] pointer-events-none rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="z-10"
      >
        <div className="ui-label text-cyan-400 mb-8 tracking-[0.5em]">FINAL SUMMARY // 12</div>
        <h2 className="text-5xl md:text-8xl font-display font-bold text-white mb-12 uppercase">NOT ALL CHIPS <br/> ARE CREATED EQUAL.</h2>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
           {[
             'Variation is Physical',
             'Binning is Optimization',
             'Efficiency is King'
           ].map(text => (
             <div key={text} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 font-mono text-xs tracking-widest text-white/50 uppercase">
               {text}
             </div>
           ))}
        </div>

        <p className="mt-16 text-muted font-sans font-extralight text-lg max-w-2xl mx-auto italic">
          "The Silicon Lottery is the bridge between the digital certainty of our software and the physical chaos of our manufacturing."
        </p>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 1 }}
           className="mt-24 font-display font-bold text-white/20 tracking-tighter text-2xl uppercase"
        >
          Silicon Lottery Experience // COMP-ARCH 2026
        </motion.div>
      </motion.div>
    </section>
  );
};
