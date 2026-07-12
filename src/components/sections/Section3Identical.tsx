import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const chips = [
    { id: 1, title: 'CPU A', desc: 'Golden Sample', volt: '1.15V', temp: '65°C', color: 'bg-cyan-400', shadow: 'shadow-[0_0_30px_rgba(0,212,255,0.4)]' },
    { id: 2, title: 'CPU B', desc: 'Average Yield', volt: '1.25V', temp: '78°C', color: 'bg-blue-500', shadow: 'shadow-[0_0_20px_rgba(58,123,213,0.3)]' },
    { id: 3, title: 'CPU C', desc: 'High Leakage', volt: '1.38V', temp: '92°C', color: 'bg-amber-500', shadow: 'shadow-[0_0_30px_rgba(255,107,53,0.4)]' },
];

export const Section3Identical: React.FC = () => {
    const [revealed, setRevealed] = useState(false);

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-[10%] py-24">

            <div className="text-center max-w-3xl mb-20 z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display font-bold mb-6"
                >
                    IDENTICAL BOXES.<br />DIFFERENT SILICON.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-muted font-sans"
                >
                    Hover over the chips below or toggle the X-Ray vision to reveal the hidden electrical reality beneath the heatspreader.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    onClick={() => setRevealed(!revealed)}
                    className="mt-8 px-8 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-mono text-sm tracking-widest hover:bg-cyan-500/10 transition-colors"
                >
                    {revealed ? '[ DEACTIVATE X-RAY ]' : '[ ACTIVATE X-RAY ]'}
                </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl z-10">
                {chips.map((chip, i) => (
                    <motion.div
                        key={chip.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        className="group relative h-96 rounded-2xl border border-white/10 bg-surface flex flex-col items-center justify-center overflow-hidden cursor-crosshair"
                    >
                        {/* Base "Identical" State */}
                        <div className={cn(
                            "absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700",
                            revealed ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                        )}>
                            <div className="w-40 h-40 bg-gray-800 rounded-lg border-2 border-gray-600 flex items-center justify-center shadow-2xl">
                                <span className="font-mono text-gray-400">CORE i9</span>
                            </div>
                            <div className="mt-8 font-mono text-white/50 tracking-widest">STANDARD SKU</div>
                        </div>

                        {/* Revealed State */}
                        <div className={cn(
                            "absolute inset-0 flex flex-col items-center justify-center bg-panel transition-all duration-700 p-8 text-center",
                            revealed ? "opacity-100 scale-100" : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                        )}>
                            <div className={cn("w-32 h-32 mb-6 rounded-lg rotate-45 border-2 transition-all duration-1000 flex flex-col items-center justify-center", chip.color.replace('bg-', 'border-'), chip.shadow)}>
                                <div className={cn("w-16 h-16 rounded rotate-0", chip.color, "opacity-20")} />
                            </div>
                            <h3 className="font-display text-2xl font-bold mb-2 text-white">{chip.title}</h3>
                            <p className={cn("font-mono text-sm uppercase tracking-widest mb-6", chip.color.replace('bg-', 'text-'))}>{chip.desc}</p>

                            <div className="flex gap-4 font-mono text-sm">
                                <div className="flex flex-col items-center">
                                    <span className="text-muted text-[10px]">VMIN</span>
                                    <span className="text-white">{chip.volt}</span>
                                </div>
                                <div className="w-px h-8 bg-white/10" />
                                <div className="flex flex-col items-center">
                                    <span className="text-muted text-[10px]">TEMP</span>
                                    <span className="text-white">{chip.temp}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
