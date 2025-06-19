import React from 'react';
import { Canvas } from '@react-three/fiber';

const Crash3DView = ({ crash }) => {
  if (!crash) {
    return (
      <div className="bg-gray-900 border border-neon rounded-lg p-6 text-neon flex items-center justify-center h-64 shadow-lg">
        <p>Select a crash incident to view 3D visualization</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 border border-neon rounded-lg p-2 shadow-lg h-64">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} />
        <mesh rotation={[0.4, 0.8, 0]}>
          <boxGeometry args={[1.5, 0.5, 3]} />
          <meshStandardMaterial color="#00FF00" metalness={0.7} roughness={0.2} />
        </mesh>
        <mesh position={[0, -1, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#007f00" />
        </mesh>
      </Canvas>
      <div className="text-neon mt-3 px-2">
        <h3 className="text-lg font-bold">{crash.aircraft_type}</h3>
        <p>{crash.location} — {crash.date}</p>
        <p className="text-sm mt-1 truncate">{crash.description}</p>
      </div>
    </div>
  );
};

export default Crash3DView;
