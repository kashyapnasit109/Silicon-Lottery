import React from 'react';
import { motion } from 'framer-motion';
import { PillTag } from '../ui/PillTag';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative w-full h-screen flex flex-col justify-center px-[10%]">
            {/* 
        This div wraps the text content, keeping it constrained and 
        leaving space for the 3D CPU model that will render in the canvas behind/beside it.
      */}
            <div className="z-10 max-w-4xl pt-20">

                {/* Subtle upper label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="ui-label mb-6 text-cyan-400 flex items-center gap-3"
                >
                    <span className="w-8 h-px bg-cyan-400/50" />
                    Manufacturing Variability
                </motion.div>

                {/* Massive, dramatic typography */}
                <motion.h1
                    className="text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] font-bold mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.15, delayChildren: 0.4 }
                        }
                    }}
                >
                    <motion.span
                        className="block text-white filter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } } }}
                    >
                        IDENTICAL <span className="text-white/30 italic font-mono text-5xl md:text-7xl">ON THE</span>
                    </motion.span>
                    <motion.span
                        className="block text-cyan-400 filter drop-shadow-[0_0_40px_rgba(0,212,255,0.3)]"
                        variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } } }}
                    >
                        OUTSIDE.
                    </motion.span>
                </motion.h1>

                {/* Supporting description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="text-xl md:text-2xl text-muted max-w-2xl font-sans font-light leading-relaxed mb-12"
                >
                    The hidden world of semiconductor manufacturing, processor binning,
                    and the physical realities of the <b className="text-white">Silicon Lottery</b>.
                </motion.p>

                {/* Feature Tags (Parameters affected by variation) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="flex flex-wrap gap-4"
                >
                    <PillTag label="Clock Speed" dotColor="cyan" />
                    <PillTag label="Voltage (Vmin)" dotColor="amber" />
                    <PillTag label="Thermals" dotColor="red" />
                    <PillTag label="Yield" dotColor="purple" />
                    <PillTag label="Binning" dotColor="cyan" />
                </motion.div>
            </div>

            {/* Decorative ambient gradient to ground the text */}
            <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-cyan-900/20 blur-[150px] -z-10 pointer-events-none rounded-full" />
        </section>
    );
};
