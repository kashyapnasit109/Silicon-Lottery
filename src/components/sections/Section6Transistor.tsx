import React from 'react';
import { motion } from 'framer-motion';

export const Section6Transistor: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen py-32 flex flex-col items-center justify-center px-[10%] bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">

            <div className="text-center max-w-4xl mb-24 z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
                >
                    THE ELECTRICAL CONSEQUENCES
                </motion.h2>
                <motion.p className="text-muted text-xl font-sans font-light leading-relaxed">
                    Physical variation at the atomic level translates directly into how much voltage a transistor needs to switch (Vmin) and how much current it leaks when off (Leakage).
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl z-10">

                {/* Vmin Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel p-10 flex flex-col h-full border-l-4 border-l-amber-500"
                >
                    <div className="flex justify-between items-start mb-8">
                        <h3 className="text-3xl font-display font-bold text-white">THRESHOLD <br /><span className="text-amber-500">VOLTAGE (Vmin)</span></h3>
                        <div className="w-12 h-12 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-500 font-mono">V</div>
                    </div>
                    <p className="text-muted leading-relaxed font-sans mb-6">
                        If the silicon lattice is imperfect, the transistor requires more "push" (Voltage) to turn on.
                    </p>
                    <ul className="space-y-3 font-mono text-sm text-gray-300">
                        <li className="flex gap-3"><span className="text-amber-500">→</span> High Vmin = Requires More Power</li>
                        <li className="flex gap-3"><span className="text-amber-500">→</span> More Power = Generates More Heat</li>
                        <li className="flex gap-3"><span className="text-amber-500">→</span> More Heat = Lower Maximum Clock Speed</li>
                    </ul>
                </motion.div>

                {/* Leakage Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-panel p-10 flex flex-col h-full border-l-4 border-l-purple-500"
                >
                    <div className="flex justify-between items-start mb-8">
                        <h3 className="text-3xl font-display font-bold text-white">CURRENT <br /><span className="text-purple-500">LEAKAGE</span></h3>
                        <div className="w-12 h-12 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-500 font-mono">I</div>
                    </div>
                    <p className="text-muted leading-relaxed font-sans mb-6">
                        In extremely small transistors, electrons can physically "tunnel" through the gate even when it's closed.
                    </p>
                    <ul className="space-y-3 font-mono text-sm text-gray-300">
                        <li className="flex gap-3"><span className="text-purple-500">→</span> High Leakage = Wasted Energy</li>
                        <li className="flex gap-3"><span className="text-purple-500">→</span> Fast Switching but Terrible Battery Life</li>
                        <li className="flex gap-3"><span className="text-purple-500">→</span> Relegated to desktop, rejected from mobile</li>
                    </ul>
                </motion.div>

            </div>
        </section>
    );
};
