import React from 'react';
import { useGLTF } from '@react-three/drei';

const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
};

export default Model;
