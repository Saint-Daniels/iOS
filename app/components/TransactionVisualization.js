'use client';

import { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line, Html } from '@react-three/drei';
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
      <Html
        position={[0, size + 0.5, 0]}
        center
        style={{
          color: 'white',
          fontSize: '14px',
          fontWeight: 'bold',
          textShadow: '0 0 10px rgba(0,0,0,0.8)',
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        {label}
      </Html>
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
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ 
        width: '100%', 
        height: '500px', 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#00ff88'
      }}>
        Loading visualization...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        width: '100%', 
        height: '500px', 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ff0088',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div>Error loading visualization</div>
        <div style={{ fontSize: '0.9rem', color: '#ccc' }}>{error.message}</div>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '500px', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)' }}>
      <Suspense fallback={
        <div style={{ 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: '#00ff88' 
        }}>
          Loading...
        </div>
      }>
        <Canvas 
          camera={{ position: [0, 5, 10], fov: 50 }}
          onCreated={() => setError(null)}
          onError={(e) => setError(e)}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ff88" />
          
          {/* Transaction Flow Visualization */}
          <Suspense fallback={null}>
            <TransactionNode position={[-4, 2, 0]} label="Advertiser" color="#00ff88" size={0.8} />
            <TransactionNode position={[0, 0, 0]} label="Escrow" color="#0088ff" size={1} />
            <TransactionNode position={[4, -2, 0]} label="Wallet" color="#ff8800" size={0.9} />
            <TransactionNode position={[0, -4, 0]} label="Pharmacy" color="#ff0088" size={0.8} />
          </Suspense>
          
          {/* Flow Lines */}
          <TransactionFlow start={[-4, 2, 0]} end={[0, 0, 0]} color="#00ff88" />
          <TransactionFlow start={[0, 0, 0]} end={[4, -2, 0]} color="#0088ff" />
          <TransactionFlow start={[4, -2, 0]} end={[0, -4, 0]} color="#ff8800" />
          
          <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </Suspense>
    </div>
  );
}

