import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PillTag } from '../ui/PillTag';
import { cn } from '../../utils/cn';

export const Section7Lab: React.FC = () => {
  const [voltage, setVoltage] = useState(1.2);
  const [freq, setFreq] = useState(4.5);
  const [temp, setTemp] = useState(60);
  const [isStable, setIsStable] = useState(true);

  useEffect(() => {
    // Basic relationship: Temp increases with V^2 and F
    // Stability decreases as F increases relative to V
    const newTemp = Math.round(30 + (voltage * voltage * 15) + (freq * 3));
    setTemp(newTemp);

    // Heuristic: Stable if Volts > (Freq/5) + 0.25 (oversimplified for education)
    const threshold = (freq / 5) + 0.25;
    setIsStable(voltage >= threshold && newTemp < 95);
  }, [voltage, freq]);

  return (
    <section className="relative w-full min-h-screen py-32 flex flex-col items-center justify-center px-[10%]">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left: Lab Control Console */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-10 relative"
        >
          <div className="ui-label text-cyan-400 mb-8">LAB-07 // PERFORMANCE TUNER</div>
          <h2 className="text-4xl font-display font-bold text-white mb-8">PUSH THE SILICON</h2>
          
          <div className="space-y-12">
            {/* Voltage Slider */}
            <div className="space-y-4">
              <div className="flex justify-between font-mono text-sm">
                <span className="text-muted">CORE VOLTAGE (VCORE)</span>
                <span className={cn("text-xl", voltage > 1.35 ? "text-amber-500" : "text-white")}>{voltage.toFixed(3)}V</span>
              </div>
              <input 
                type="range" min="0.8" max="1.5" step="0.01" 
                value={voltage} 
                onChange={(e) => setVoltage(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Frequency Slider */}
            <div className="space-y-4">
              <div className="flex justify-between font-mono text-sm">
                <span className="text-muted">CORE CLOCK FREQUENCY</span>
                <span className="text-xl text-white">{freq.toFixed(2)} GHz</span>
              </div>
              <input 
                type="range" min="3.0" max="6.0" step="0.05" 
                value={freq} 
                onChange={(e) => setFreq(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>
          </div>

          <div className="mt-12 flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="text-xl">💡</div>
            <p className="text-sm text-muted font-sans leading-relaxed">
              Every chip has a different <b>V/F Curve</b>. A "Golden Sample" can hit 5.0GHz at lower voltage than an "Average" chip, keeping it cooler and more stable.
            </p>
          </div>
        </motion.div>

        {/* Right: Real-time Analysis Readout */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {/* Thermal Gauge */}
          <div className="glass-panel p-8 relative overflow-hidden">
             <div className="ui-label mb-4">THERMAL SENSOR</div>
             <div className="flex items-end gap-2 mb-2">
                <span className={cn("text-5xl font-display font-bold", temp > 85 ? "text-red-500" : "text-white")}>{temp}</span>
                <span className="text-xl text-muted font-display mb-1">°C</span>
             </div>
             {/* Progress Bar Visualization */}
             <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mt-4">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(temp, 100)}%` }}
                  className={cn("h-full", temp > 85 ? "bg-red-500" : temp > 75 ? "bg-amber-500" : "bg-cyan-400")}
                  transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
                />
             </div>
          </div>

          {/* Stability Indicator */}
          <div className={cn(
            "glass-panel p-8 border-l-4 transition-all duration-500",
            isStable ? "border-l-cyan-400" : "border-l-red-500 bg-red-900/10"
          )}>
             <div className="ui-label mb-4">SYSTEM STABILITY</div>
             <div className="flex items-center gap-4">
                <div className={cn(
                  "w-4 h-4 rounded-full",
                  isStable ? "bg-cyan-400 shadow-[0_0_10px_#00d4ff]" : "bg-red-500 shadow-[0_0_10px_#ff3355] animate-pulse"
                )} />
                <span className={cn("text-2xl font-display font-bold uppercase tracking-widest", isStable ? "text-white" : "text-red-500")}>
                  {isStable ? "OPERATIONAL" : "CRITICAL FAILURE"}
                </span>
             </div>
             <p className="mt-4 text-sm text-muted font-sans">
                {isStable 
                  ? "Voltage is sufficient for the current frequency. Thermal headroom is adequate." 
                  : temp >= 95 
                    ? "THERMAL THROTTLING: Heat dissipation exceeded. Junction temperature critical." 
                    : "STABILITY CRASH: Insufficient voltage to maintain transistor switching at this frequency."
                }
             </p>
          </div>

          <div className="flex gap-4">
             <PillTag label="Golden Sample Link" dotColor="cyan" className="flex-1 opacity-50" />
             <PillTag label="Voltage Scaling" dotColor="amber" className="flex-1 opacity-50" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
