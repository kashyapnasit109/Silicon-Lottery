import React from 'react';
import { motion } from 'framer-motion';

const tiers = [
  { name: 'EXTREME BIN', chip: '14900KS / 7950X3D', traits: 'Low Leakage, High Frequency, Low Vmin', target: 'Gaming Enthusiasts, Overclockers' },
  { name: 'STANDARD BIN', chip: '14900K / 7950X', traits: 'Nominal Efficiency, Reliable Clocks', target: 'Workstations, Professionals' },
  { name: 'EFFICIENCY BIN', chip: '14900T / Laptop CPUs', traits: 'Best Watt/Performance, Limited Volts', target: 'Laptops, SFF Builds' }
];

export const Section9Breakdown: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen py-32 flex flex-col items-center justify-center px-[10%]">
      
      <div className="max-w-6xl w-full z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="ui-label text-cyan-400 mb-4">ANALYSIS REPORT // 09</div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">THE BINNING TRIANGLE</h2>
          <p className="text-muted text-xl max-w-2xl font-sans font-light">
            How manufacturers translate microscopic variation into distinct product tiers. One architecture, three destinies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 group relative"
            >
              <div className="absolute top-0 right-8 w-px h-12 bg-cyan-400/20" />
              <div className="text-xs font-mono text-cyan-400 mb-6 tracking-[0.3em]">{tier.name}</div>
              <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{tier.chip}</h3>
              
              <div className="space-y-4 mb-8">
                <div className="py-3 border-b border-white/5">
                  <span className="ui-label block mb-1">KEY ATTRIBUTES</span>
                  <span className="text-gray-300 text-sm">{tier.traits}</span>
                </div>
                <div className="py-3">
                  <span className="ui-label block mb-1">TARGET MARKET</span>
                  <span className="text-gray-300 text-sm">{tier.target}</span>
                </div>
              </div>

              <div className="p-4 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-muted uppercase tracking-widest text-center">
                QUALIFIED FOR SHIPMENT
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table for deeper COA context */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 overflow-x-auto rounded-xl border border-white/10"
        >
          <table className="w-full text-left font-sans text-sm">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="p-4 font-mono text-xs text-muted uppercase">Factor</th>
                <th className="p-4 font-mono text-xs text-cyan-400 uppercase">High Bin</th>
                <th className="p-4 font-mono text-xs text-white uppercase">Average Bin</th>
                <th className="p-4 font-mono text-xs text-amber-500 uppercase">Low/Budget Bin</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-medium">Clock Ceiling</td>
                <td className="p-4 text-cyan-400">Extreme (5.5GHz+)</td>
                <td className="p-4">Standard (5.1GHz)</td>
                <td className="p-4 text-amber-500">Limited (4.8GHz)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-medium">Power Leakage</td>
                <td className="p-4">Very Low</td>
                <td className="p-4">Moderate</td>
                <td className="p-4">High (but within spec)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-medium">Overclock Headroom</td>
                <td className="p-4 font-bold text-white">★ ★ ★ ★ ★</td>
                <td className="p-4">★ ★ ★</td>
                <td className="p-4">★</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};
