import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { cn } from '../../utils/cn';

const SECTIONS = [
    'Hero',
    'Introduction',
    'Process Variation',
    'Fabrication Reality',
    'Microscopic Scale',
    'Electrical Behavior',
    'Performance Lab',
    'Binning Sim',
    'Concept Breakdown',
    'COA Context',
    'Real World',
    'Takeaways'
];

export const ProgressNav: React.FC = () => {
    const currentSection = useStore((state) => state.currentSection);

    return (
        <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4 pointer-events-auto"
        >
            {SECTIONS.map((label, index) => {
                const isActive = currentSection === index;
                return (
                    <div key={label} className="relative group flex items-center justify-end">
                        {/* Label (shows on hover or active) */}
                        <span
                            className={cn(
                                "absolute right-6 font-mono text-[10px] uppercase tracking-widest whitespace-nowrap transition-all duration-300 pointer-events-none",
                                isActive ? "text-cyan-400 opacity-100" : "text-muted opacity-0 group-hover:opacity-100"
                            )}
                        >
                            {label}
                        </span>

                        {/* Dot */}
                        <button
                            onClick={() => {
                                // Implement smooth scroll to section later
                                window.scrollTo({ top: window.innerHeight * index, behavior: 'smooth' });
                            }}
                            className={cn(
                                "w-2 h-2 rounded-full border transition-all duration-300",
                                isActive
                                    ? "bg-cyan-400 border-cyan-400 shadow-[0_0_10px_#00d4ff] scale-110"
                                    : "bg-transparent border-muted/30 hover:border-cyan-400/50"
                            )}
                            aria-label={`Scroll to ${label}`}
                        />
                    </div>
                );
            })}
        </motion.nav>
    );
};
