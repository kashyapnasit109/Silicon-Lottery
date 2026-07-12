import { create } from 'zustand';

interface ChipData {
    id: number;
    yield: number; // 0 to 1 (0.9 = high quality, 0.1 = low)
    leakage: number;
    vmin: number;
    temp: number;
}

interface AppState {
    currentSection: number;
    setCurrentSection: (section: number) => void;
    // Simulation Engine State
    simPhase: 'idle' | 'wafer' | 'selection' | 'stress' | 'binning' | 'results';
    setSimPhase: (phase: AppState['simPhase']) => void;
    selectedChips: number[];
    selectChip: (id: number) => void;
    clearChips: () => void;
    // Dynamic Data
    waferData: ChipData[];
    generateWafer: () => void;
}

export const useStore = create<AppState>()((set) => ({
    currentSection: 0,
    setCurrentSection: (section) => set({ currentSection: section }),

    simPhase: 'idle',
    setSimPhase: (phase) => set({ simPhase: phase }),

    selectedChips: [],
    selectChip: (id) => set((state) => ({
        selectedChips: state.selectedChips.length < 3 && !state.selectedChips.includes(id)
            ? [...state.selectedChips, id]
            : state.selectedChips
    })),
    clearChips: () => set({ selectedChips: [] }),

    waferData: [],
    generateWafer: () => {
        const data: ChipData[] = [];
        for (let i = 0; i < 400; i++) {
            const x = (i % 20) - 10;
            const y = Math.floor(i / 20) - 10;
            const dist = Math.sqrt(x * x + y * y);
            // Gaussianish yield: Center is better (around 1.0), edges worse (around 0.2)
            const yieldVal = Math.max(0.2, 1.0 - (dist / 12) + (Math.random() * 0.15));
            data.push({
                id: i,
                yield: yieldVal,
                leakage: 1.0 - yieldVal + (Math.random() * 0.1),
                vmin: 1.0 + (1.0 - yieldVal) * 0.4 + (Math.random() * 0.05),
                temp: 40 + (1.0 - yieldVal) * 50
            });
        }
        set({ waferData: data });
    }
}));
