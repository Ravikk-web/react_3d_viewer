import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CanvasComponent from './CanvasComponent'
import Model from './Model'


function App() {
  return (
    <>
        <h1>React 3D Viewer</h1>

        <div className='canvas-container'>
        <CanvasComponent>
          <Model path="./earth/scene.gltf" />
        </CanvasComponent>
      </div>
    </>
  )
}

export default App
