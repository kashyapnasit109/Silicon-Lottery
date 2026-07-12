import React from 'react';
import { motion } from 'framer-motion';

export const Section2Intro: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center px-[10%] py-24 overflow-hidden">
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center z-10">

                {/* Left: Giant Typography */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="relative"
                >
                    <div className="absolute -left-12 -top-12 text-[15rem] font-display font-bold text-white/[0.02] leading-none z-0 select-none">
                        01
                    </div>
                    <h2 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] relative z-10 text-white">
                        WHAT IS THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            SILICON LOTTERY?
                        </span>
                    </h2>
                </motion.div>

                {/* Right: Glass Definition Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    className="glass-panel p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Decorative scanner line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

                    <div className="ui-label mb-6 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 animate-pulse" />
                        Definition
                    </div>

                    <p className="text-xl md:text-2xl text-gray-300 font-sans font-light leading-relaxed mb-6">
                        The phenomenon where processors of the <b>exact same model</b> perform differently due to microscopic variations introduced during manufacturing.
                    </p>

                    <p className="text-base text-muted/80 leading-relaxed font-sans">
                        Every die cut from a silicon wafer is unique at the atomic level. Some are near-perfect, operating with extreme efficiency. Others contain minor crystalline flaws, requiring more voltage and generating more heat to achieve the promised speeds.
                        <br /><br />
                        You pay for a SKU, but you draw a ticket in the lottery.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};
