import React from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 pointer-events-none"
        >
            {/* Background blur layer */}
            <div className="absolute inset-0 bg-background/50 backdrop-blur-md -z-10" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

            {/* Left branding */}
            <div className="flex items-center gap-3">
                <div className="w-2 relative flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <div className="absolute w-3 h-3 bg-cyan-400/40 rounded-full animate-glow-pulse" />
                </div>
                <h1 className="font-display font-bold text-xl tracking-widest text-white m-0 leading-none">
                    SILICON<span className="text-cyan-400 ml-1">LOTTERY</span>
                </h1>
            </div>

            {/* Right meta text */}
            <div className="font-mono text-xs tracking-widest text-muted uppercase">
                COA Academic Presentation
            </div>
        </motion.header>
    );
};
