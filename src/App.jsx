import './App.css'
import CanvasComponent from './CanvasComponent'
import Model from './Model'
import StarsCanvas from './Stars'

function App() {
  return (
    <>
        <h1>React 3D Viewer</h1>

        <div className='canvas-container'>
        <CanvasComponent>
          <Model path="./earth/scene.gltf" />
        </CanvasComponent>
      </div>
      
          <StarsCanvas />
    </>
  )
}

export default App
