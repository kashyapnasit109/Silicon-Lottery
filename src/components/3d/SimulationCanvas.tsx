import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, Stars } from '@react-three/drei';
import { Wafer3D } from './Wafer3D';
import { Chip3D } from './Chip3D';
import { BinTrays } from './BinTrays';
import { useStore } from '../../store/useStore';

export const SimulationCanvas: React.FC = () => {
    const { simPhase, selectedChips, waferData } = useStore();

    return (
        <div className="w-full h-full">
            <Canvas shadows gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={40} />
                
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#00d4ff" />
                <pointLight position={[-10, -5, 5]} intensity={0.8} color="#7b5ea7" />
                <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={2} castShadow />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <Suspense fallback={null}>
                    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                        {(simPhase === 'wafer' || simPhase === 'selection') ? (
                            <Wafer3D />
                        ) : (simPhase === 'stress' || simPhase === 'binning') ? (
                            <group>
                                {selectedChips.map((id, i) => {
                                    const data = waferData[id];
                                    const quality = data?.yield || 0;
                                    
                                    // Sorting logic: High quality -> extreme bin (left), Mid -> standard (center), Low -> eco (right)
                                    const targetX = quality > 0.85 ? -4 : quality > 0.65 ? 0 : 4;
                                    const currentPos: [number, number, number] = simPhase === 'binning' 
                                        ? [targetX, -1.8, 0] // Move down into tray
                                        : [(i - 1) * 4, 0, 0];

                                    return (
                                        <Chip3D 
                                            key={id} 
                                            position={currentPos} 
                                            quality={quality}
                                            isActive={true}
                                            isStressed={simPhase === 'stress'}
                                        />
                                    );
                                })}
                                {simPhase === 'binning' && <BinTrays />}
                            </group>
                        ) : null}
                    </Float>
                    <Environment preset="city" />
                </Suspense>

                <OrbitControls 
                    enableZoom={false} 
                    enablePan={false} 
                    minPolarAngle={Math.PI / 4} 
                    maxPolarAngle={Math.PI / 1.5} 
                />
            </Canvas>
        </div>
    );
};
