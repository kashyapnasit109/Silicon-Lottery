import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { step: '01', title: 'SILICON INGOT', desc: 'A 99.9999999% pure monocrystalline silicon cylinder is grown. Even here, microscopic impurities exist.' },
    { step: '02', title: 'WAFER SLICING', desc: 'The ingot is sliced into 300mm wafers. The edges of the wafer naturally suffer from more crystalline stress than the center.' },
    { step: '03', title: 'LITHOGRAPHY', desc: 'Billions of transistors are etched via EUV light. At nanometer scales, exact alignment across the whole wafer is impossible.' },
    { step: '04', title: 'THE LOTTERY', desc: 'These stacking tolerances mean no two dies on the same wafer are truly identical in their electrical properties.' }
];

export const Section4Fab: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen py-32 flex flex-col items-center">

            <div className="text-center mb-24 z-10 px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
                >
                    INSIDE THE FABRICATION WORLD
                </motion.h2>
                <motion.p className="text-muted text-lg font-sans max-w-2xl mx-auto">
                    Variation isn't a mistake; it's physics. Semiconductors are built atom by atom. At a scale of 3 nanometers, perfection is a statistical impossibility.
                </motion.p>
            </div>

            <div className="relative w-full max-w-5xl px-8 z-10">
                {/* Central glowing timeline line */}
                <div className="absolute left-[50px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent -translate-x-1/2" />

                <div className="flex flex-col gap-16 md:gap-24">
                    {steps.map((item, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8 }}
                                className={`relative flex items-center md:justify-between w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >

                                {/* Node Dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-cyan-400 shadow-[0_0_15px_#00d4ff] -translate-x-1/2 z-10" />
                                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-cyan-400/20 -translate-x-1/2 z-0 animate-ping" style={{ animationDuration: '3s', animationDelay: `${i * 0.5}s` }} />

                                {/* Content Card */}
                                <div className="ml-16 md:ml-0 md:w-[45%]">
                                    <div className="glass-panel p-8 hover:border-cyan-400/30 transition-colors duration-500 relative overflow-hidden group">
                                        <div className="text-6xl font-display font-bold text-white/5 absolute -right-4 -bottom-4 group-hover:text-cyan-400/10 transition-colors duration-700">
                                            {item.step}
                                        </div>
                                        <div className="ui-label text-cyan-400 mb-2">PHASE {item.step}</div>
                                        <h3 className="text-2xl font-display font-semibold text-white mb-4">{item.title}</h3>
                                        <p className="text-muted font-sans font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>

                                {/* Empty spacer for grid alignment */}
                                <div className="hidden md:block md:w-[45%]" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
