import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from './Loader';

const CanvasComponent = ({ children }) => {
  return (
    <Canvas
    shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4,3,6],
    }}
    >
      <Suspense fallback={<CanvasLoader />} >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
        autoRotate={true}
        enablePan={false} 
        minDistance={2}  // Set your minimum zoom distance here
        maxDistance={10} // Set your maximum zoom distance here
        />
        {children}
      </Suspense>
    </Canvas>
  );
};

export default CanvasComponent;
