import React from 'react';
import { useStore } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';

export const SimulationController: React.FC = () => {
    const { simPhase, setSimPhase, selectedChips, waferData } = useStore();

    if (simPhase === 'idle') return null;

    return (
        <div className="fixed inset-0 z-20 pointer-events-none flex flex-col items-center justify-between p-12">
            
            {/* Top HUD */}
            <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full max-w-5xl flex justify-between items-start"
            >
                <div className="glass-panel p-6 pointer-events-auto border-l-4 border-l-cyan-400">
                    <div className="ui-label mb-1">SYSTEM PHASE</div>
                    <div className="text-2xl font-display font-bold text-white uppercase tracking-widest">
                        {simPhase === 'wafer' ? 'Wafer Inspection' : 
                         simPhase === 'selection' ? 'Chip Selection' : 
                         simPhase === 'stress' ? 'Stress Testing' : 'Binning Analysis'}
                    </div>
                </div>

                <div className="flex gap-4">
                    {selectedChips.map((id, i) => (
                        <motion.div 
                            key={id}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-12 h-12 glass-panel flex items-center justify-center font-mono text-cyan-400"
                        >
                            {i + 1}
                        </motion.div>
                    ))}
                    {Array.from({ length: 3 - selectedChips.length }).map((_, i) => (
                        <div key={i} className="w-12 h-12 border border-white/5 bg-white/5 rounded-xl border-dashed" />
                    ))}
                </div>
            </motion.div>

            {/* Content Overlays based on Phase */}
            <AnimatePresence mode="wait">
                {simPhase === 'selection' && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="glass-panel p-8 max-w-md text-center pointer-events-auto"
                    >
                        <h3 className="text-2xl font-display font-bold mb-4">CHIP SELECTION MODE</h3>
                        <p className="text-muted text-sm mb-6">
                            Interact with the 3D wafer (coming soon) to pick three specific dies. 
                            <br/><br/>
                            <i>[Note: Testing selection via manual button for now]</i>
                        </p>
                        <div className="flex gap-4">
                            <button 
                                onClick={() => useStore.getState().selectChip(Math.floor(Math.random()*400))}
                                className="flex-1 py-2 rounded bg-white/5 border border-white/10 hover:bg-white/10"
                            >
                                PICK RANDOM
                            </button>
                            {selectedChips.length === 3 && (
                                <button 
                                    onClick={() => setSimPhase('stress')}
                                    className="flex-1 py-2 rounded bg-cyan-500 text-black font-bold"
                                >
                                    START STRESS TEST
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}

                {simPhase === 'stress' && (
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-5xl grid grid-cols-3 gap-8 pointer-events-auto"
                    >
                        {selectedChips.map((id) => {
                            const data = waferData[id];
                            return (
                                <div key={id} className="glass-panel p-6 border-t-2 border-t-cyan-400">
                                    <div className="ui-label mb-4">TESTING DIE #{id}</div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span className="text-muted text-xs">V/F CURVE</span>
                                            <span className="text-white font-mono">{data.vmin.toFixed(2)}V @ 5GHz</span>
                                        </div>
                                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `${data.yield * 100}%` }}
                                                className="h-full bg-cyan-400 shadow-[0_0_8px_#00d4ff]" 
                                            />
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted text-xs">THERMALS</span>
                                            <span className={data.yield < 0.6 ? 'text-red-400' : 'text-cyan-400'}>{data.temp.toFixed(1)}°C</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Actions */}
            <div className="w-full flex justify-center pb-8">
                {simPhase === 'stress' && (
                    <button 
                        onClick={() => setSimPhase('binning')}
                        className="px-12 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-display font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl pointer-events-auto"
                    >
                        FINALIZE BINNING
                    </button>
                )}
            </div>

        </div>
    );
};
