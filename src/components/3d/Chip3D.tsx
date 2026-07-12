import React from 'react';
import { Float, MeshDistortMaterial } from '@react-three/drei';

interface Chip3DProps {
    position: [number, number, number];
    quality: number; // 0 to 1
    isActive?: boolean;
    isStressed?: boolean;
}

export const Chip3D: React.FC<Chip3DProps> = ({ position, quality, isActive, isStressed }) => {
    // Thermal glow color based on stress and quality
    const glowColor = isStressed ? (quality > 0.8 ? '#00d4ff' : '#ff3355') : '#00d4ff';

    return (
        <group position={position}>
            <Float speed={isActive ? 4 : 1} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Heatspreader / Package */}
                <mesh castShadow receiveShadow>
                    <boxGeometry args={[2, 2, 0.2]} />
                    <meshStandardMaterial 
                        color="#2a2a2a" 
                        metalness={0.9} 
                        roughness={0.1} 
                        envMapIntensity={1}
                    />
                </mesh>

                {/* Internal Die (The Silicon) */}
                <mesh position={[0, 0, 0.11]}>
                    <boxGeometry args={[1, 1, 0.05]} />
                    {isStressed ? (
                        <MeshDistortMaterial 
                            color={glowColor}
                            speed={5} 
                            distort={0.4} 
                            opacity={0.8}
                            transparent
                        />
                    ) : (
                        <meshStandardMaterial 
                            color={glowColor} 
                            emissive={glowColor}
                            emissiveIntensity={0.5}
                            metalness={1}
                            roughness={0}
                        />
                    )}
                </mesh>

                {/* Substrate Traces (glow) */}
                <mesh position={[0, 0, -0.11]}>
                    <planeGeometry args={[2, 2]} />
                    <meshBasicMaterial color="#00d4ff" opacity={0.1} transparent />
                </mesh>
            </Float>
        </group>
    );
};
