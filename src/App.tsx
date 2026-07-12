import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/layout/Navbar';
import { ProgressNav } from './components/layout/ProgressNav';
import { HeroSection } from './components/sections/HeroSection';
import { Section2Intro } from './components/sections/Section2Intro';
import { Section3Identical } from './components/sections/Section3Identical';
import { Section4Fab } from './components/sections/Section4Fab';
import { Section5Variation } from './components/sections/Section5Variation';
import { Section6Transistor } from './components/sections/Section6Transistor';
import { Section7Lab } from './components/sections/Section7Lab';
import { Section9Breakdown } from './components/sections/Section9Breakdown';
import { Section10COA } from './components/sections/Section10COA';
import { Section11RealWorld, Section12Summary } from './components/sections/Section11Summary';
import { SimulationCanvas } from './components/3d/SimulationCanvas';
import { SimulationController } from './components/SimulationController';
import { FinalResults } from './components/FinalResults';
import { useStore } from './store/useStore';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const setCurrentSection = useStore((state) => state.setCurrentSection);
  const setSimPhase = useStore((state) => state.setSimPhase);
  const simPhase = useStore((state) => state.simPhase);

  useEffect(() => {
    // 1. Intersection Observer for Logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setCurrentSection(index);
            
            if (index === 7) {
                if (simPhase === 'idle') setSimPhase('wafer');
            } else if (index < 7) {
                setSimPhase('idle');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[data-index]');
    sections.forEach((s) => observer.observe(s));

    // 2. GSAP Reveal Animations
    sections.forEach((section) => {
      gsap.fromTo(section.children, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
        observer.disconnect();
        ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [setCurrentSection, setSimPhase, simPhase]);

  return (
    <main className="relative min-h-screen w-full bg-background overflow-x-hidden">
      {/* Global Persisted UI */}
      <Navbar />
      <ProgressNav />
      <SimulationController />
      {simPhase === 'results' && <FinalResults />}

      {/* 
        3D Simulation Canvas Layer 
        Positioned fixed behind standard content.
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SimulationCanvas />
      </div>

      {/* 
        Scrollable Content Layer 
      */}
      <div className="relative z-10 w-full">
        <section data-index="0"><HeroSection /></section>
        <section data-index="1"><Section2Intro /></section>
        <section data-index="2"><Section3Identical /></section>
        <section data-index="3"><Section4Fab /></section>
        <section data-index="4"><Section5Variation /></section>
        <section data-index="5"><Section6Transistor /></section>
        <section data-index="6"><Section7Lab /></section>
        
        {/* Section 8: Simulation Engine (Phase 4 Centerpiece) */}
        <section data-index="7" className="w-full h-screen flex flex-col items-center justify-center bg-transparent">
           <div className="glass-panel p-8 max-w-lg text-center pointer-events-auto">
             <div className="ui-label text-cyan-400 mb-6">SECTION 08 // INTERACTIVE SIMULATION</div>
             <h2 className="text-4xl font-display font-bold text-white mb-4">THE WAFER REVEAL</h2>
             <p className="text-muted font-sans text-sm mb-8">
               We have generated a 300mm wafer with 400 potential dies. The heatmap shows the Gaussian yield distribution.
             </p>
             <button 
               onClick={() => setSimPhase('selection')}
               className="px-8 py-3 rounded-full bg-cyan-500 text-black font-display font-bold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(0,212,255,0.4)]"
             >
               START SELECTION
             </button>
           </div>
        </section>

        <section data-index="8"><Section9Breakdown /></section>
        <section data-index="9"><Section10COA /></section>
        <section data-index="10"><Section11RealWorld /></section>
        <section data-index="11"><Section12Summary /></section>
      </div>
    </main>
  );
}

export default App;
