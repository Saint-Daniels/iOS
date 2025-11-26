'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Line } from '@react-three/drei';
import * as THREE from 'three';

function TransactionNode({ position, label, color, size = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
      </mesh>
      <Text
        position={[0, size + 0.5, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

function TransactionFlow({ start, end, color }) {
  const points = useMemo(() => [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ], [start, end]);

  return (
    <Line
      points={points}
      color={color}
      lineWidth={2}
      dashed={false}
    />
  );
}

export default function TransactionVisualization() {
  return (
    <div style={{ width: '100%', height: '500px', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)' }}>
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ff88" />
        
        {/* Transaction Flow Visualization */}
        <TransactionNode position={[-4, 2, 0]} label="Advertiser" color="#00ff88" size={0.8} />
        <TransactionNode position={[0, 0, 0]} label="Escrow" color="#0088ff" size={1} />
        <TransactionNode position={[4, -2, 0]} label="Wallet" color="#ff8800" size={0.9} />
        <TransactionNode position={[0, -4, 0]} label="Pharmacy" color="#ff0088" size={0.8} />
        
        {/* Flow Lines */}
        <TransactionFlow start={[-4, 2, 0]} end={[0, 0, 0]} color="#00ff88" />
        <TransactionFlow start={[0, 0, 0]} end={[4, -2, 0]} color="#0088ff" />
        <TransactionFlow start={[4, -2, 0]} end={[0, -4, 0]} color="#ff8800" />
        
        <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}

