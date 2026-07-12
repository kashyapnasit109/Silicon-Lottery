import React from 'react';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

export const FinalResults: React.FC = () => {
    const { selectedChips, waferData, setSimPhase } = useStore();

    return (
        <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-2xl flex items-center justify-center p-8 pointer-events-auto"
        >
            <div className="max-w-6xl w-full">
                <div className="text-center mb-16">
                    <div className="ui-label text-cyan-400 mb-4 tracking-[0.5em]">SIMULATION COMPLETE</div>
                    <h2 className="text-5xl font-display font-bold text-white uppercase">BINNING ALLOCATION RESULTS</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {selectedChips.map((id) => {
                        const data = waferData[id];
                        const tier = data.yield > 0.85 ? 'EXTREME' : data.yield > 0.65 ? 'STANDARD' : 'ECO / SFF';

                        return (
                            <div key={id} className="glass-panel p-8 border-t-4 border-t-current flex flex-col items-center" style={{ color: data.yield > 0.85 ? '#00d4ff' : data.yield > 0.65 ? '#3a7bd5' : '#7b5ea7' }}>
                                <div className="text-[10px] font-mono opacity-50 mb-8 tracking-widest uppercase">CHIP ID #{id}</div>
                                <div className="text-4xl font-display font-bold mb-2">{tier}</div>
                                <div className="text-xs font-mono opacity-80 mb-10 tracking-[0.2em] uppercase">Target Product SKU</div>
                                
                                <div className="w-full space-y-6 text-sm">
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-muted">Max Frequency</span>
                                        <span className="text-white font-mono">{((data.yield * 1.5) + 4).toFixed(2)} GHz</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-muted">Leakage Class</span>
                                        <span className="text-white font-mono uppercase">{data.leakage < 0.3 ? 'Excellent' : 'Nominal'}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-muted">Market Price</span>
                                        <span className="text-white font-mono">${(data.yield * 600 + 100).toFixed(0)} USD</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-center mt-20 gap-8">
                    <button 
                        onClick={() => {
                            useStore.getState().clearChips();
                            setSimPhase('wafer');
                        }}
                        className="px-8 py-3 rounded-full border border-white/20 text-white font-mono font-bold uppercase tracking-widest hover:bg-white/5 transition-colors"
                    >
                        RUN NEW BATCH
                    </button>
                    <button 
                        onClick={() => setSimPhase('idle')}
                        className="px-8 py-3 rounded-full bg-cyan-500 text-black font-mono font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors shadow-2xl"
                    >
                        CLOSE SIMULATION
                    </button>
                </div>
            </div>
        </motion.div>
    );
};
