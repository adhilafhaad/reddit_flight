import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const CrashMap = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold text-primary mb-2">🌍 3D Crash Map (Placeholder)</h2>
      <div className="h-[400px]">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial color="skyblue" wireframe />
          </mesh>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default CrashMap;