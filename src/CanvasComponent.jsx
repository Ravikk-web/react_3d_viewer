import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const CanvasComponent = ({ children }) => {
  return (
    <Canvas
    
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls
      enablePan={false} />
      {children}
    </Canvas>
  );
};

export default CanvasComponent;
