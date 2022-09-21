import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground'

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[80, 40, 500]} />
        <ambientLight intensity={0.5} />
        <Physics>
          <Ground />
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
