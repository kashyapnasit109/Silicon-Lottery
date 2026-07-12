import React from 'react';
import { motion } from 'framer-motion';

export const Section5Variation: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen py-32 flex flex-col items-center justify-center px-[10%]">
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">

                {/* Left: Animated Lattice Metaphor */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative w-full aspect-square max-w-lg mx-auto"
                >
                    <div className="absolute inset-0 bg-cyan-900/10 rounded-full blur-[100px]" />
                    <div className="glass-panel p-8 w-full h-full relative overflow-hidden flex flex-col">
                        <div className="ui-label text-cyan-400 mb-6 flex justify-between">
                            <span>IDEAL SILICON LATTICE</span>
                            <span className="text-amber-500">REALITY (IMPERFECT DOPING)</span>
                        </div>

                        {/* The Lattice Grid Representation */}
                        <div className="flex-1 grid grid-cols-8 grid-rows-8 gap-2 relative">
                            {Array.from({ length: 64 }).map((_, i) => {
                                // Introduce "flaws" algorithmically
                                const isFlaw = i % 13 === 0 || i === 22 || i === 47;
                                const isDoping = i % 7 === 0;
                                let colorClass = 'bg-cyan-500/20';
                                if (isFlaw) colorClass = 'bg-red-500/80 shadow-[0_0_10px_#ff3355] animate-pulse';
                                else if (isDoping) colorClass = 'bg-purple-500/80 shadow-[0_0_10px_#7b5ea7]';

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.01 }}
                                        className={`w-full h-full rounded-sm ${colorClass} transition-colors duration-1000`}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Right: Explanation Text */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                        MICROSCOPIC <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-600">
                            IMPERFECTIONS
                        </span>
                    </h2>

                    <div className="space-y-6 text-lg text-muted font-sans font-light leading-relaxed">
                        <p>
                            When drawing circuits only 50 atoms wide, perfection breaks down.
                            The extreme ultraviolet (EUV) light used to etch transistors scatters slightly at the edges of the wafer.
                        </p>
                        <p>
                            Furthermore, the introduction of foreign atoms (<span className="text-purple-400 font-medium">doping</span>) to create N-type and P-type silicon is a statistical process.
                            One region of the die might receive a perfect distribution of boron atoms. Another region might receive slightly more or less, altering the electrical resistance of the resulting transistors.
                        </p>
                        <p>
                            These atomic <span className="text-red-400 font-medium">imperfections</span> and structural inconsistencies are the root cause of the Silicon Lottery. They are unavoidable laws of physics.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
