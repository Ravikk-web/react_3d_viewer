import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const Earth = () => {
    const earthModel = useGLTF('./earth/scene.gltf')

  return (
    <primitive 
      object={earthModel.scene}
    />
  )
}

const EarthCanvas = () =>{
    return (
      <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [1,3,6],
      }}
      >
      <Suspense fallback={null}>
          <OrbitControls

           />
           <Earth />

      </Suspense>
  
      </Canvas>
    )
  }
  

export default Earth