import React from 'react';

export const BinTrays: React.FC = () => {
    const bins = [
        { name: 'EXTREME', color: '#00d4ff', pos: -4 },
        { name: 'STANDARD', color: '#3a7bd5', pos: 0 },
        { name: 'ECO / SFF', color: '#7b5ea7', pos: 4 },
    ];

    return (
        <group position={[0, -2, 0]}>
            {bins.map((bin) => (
                <group key={bin.name} position={[bin.pos, 0, 0]}>
                    {/* Tray Base */}
                    <mesh receiveShadow>
                        <boxGeometry args={[3, 0.2, 3]} />
                        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
                    </mesh>

                    {/* Glowing Rim */}
                    <mesh position={[0, 0.1, 0]} rotation={[Math.PI/2, 0, Math.PI/4]}>
                        <torusGeometry args={[1.5, 0.05, 16, 4]} />
                        <meshBasicMaterial color={bin.color} transparent opacity={0.3} />
                    </mesh>

                    {/* Label (Using a simple box as a placeholder for 3D text) */}
                    <mesh position={[0, 0.2, 1.6]}>
                        <boxGeometry args={[1.5, 0.4, 0.1]} />
                        <meshBasicMaterial color={bin.color} />
                    </mesh>
                </group>
            ))}
        </group>
    );
};
