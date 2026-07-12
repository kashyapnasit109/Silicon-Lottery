import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useStore } from '../../store/useStore';

const tempObject = new THREE.Object3D();
const tempColor = new THREE.Color();

export const Wafer3D: React.FC = () => {
    const { waferData, generateWafer, simPhase } = useStore();
    const meshRef = useRef<THREE.InstancedMesh>(null!);

    useEffect(() => {
        if (waferData.length === 0) generateWafer();
    }, [waferData.length, generateWafer]);

    // Compute instanced attributes (position and local color)
    useEffect(() => {
        if (!meshRef.current || waferData.length === 0) return;

        waferData.forEach((data: any, i: number) => {
            const x = (i % 20) - 10;
            const y = Math.floor(i / 20) - 10;
            
            // Layout in a grid, but mask to a circle (wafer shape)
            const dist = Math.sqrt(x*x + y*y);
            const isInside = dist < 10.5;

            tempObject.position.set(x * 0.52, y * 0.52, 0);
            tempObject.scale.setScalar(isInside ? 0.5 : 0); // Hide chips outside the circle
            tempObject.updateMatrix();
            meshRef.current.setMatrixAt(i, tempObject.matrix);

            // Color based on yield: cyan (good) to gray/dark (bad)
            // If in "Heatmap" mode, use the full spectrum
            const colorFactor = data.yield; 
            tempColor.setHSL(0.55, 0.8, colorFactor * 0.6); // Cyan-ish range
            meshRef.current.setColorAt(i, tempColor);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
        if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
    }, [waferData, simPhase]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Subtle ambient tilt
        meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.05;
        meshRef.current.rotation.y = Math.cos(time * 0.3) * 0.05;
    });

    return (
        <group scale={1.5}>
            {/* Wafer Base Plate */}
            <mesh position={[0, 0, -0.05]}>
                <cylinderGeometry args={[5.5, 5.5, 0.02, 64]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Instanced Die Grid */}
            <instancedMesh ref={meshRef} args={[undefined, undefined, 400]}>
                <boxGeometry args={[1, 1, 0.05]}>
                    <instancedBufferAttribute attach="attributes-color" args={[new Float32Array(400 * 3), 3]} />
                </boxGeometry>
                <meshStandardMaterial vertexColors metalness={0.9} roughness={0.1} />
            </instancedMesh>
        </group>
    );
};
