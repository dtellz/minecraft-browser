import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground'
import { Player } from './components/Player'
import { FirstPersonView } from './components/FirstPersonView'

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[80, 40, 500]} />
        <ambientLight intensity={0.5} />
        <FirstPersonView />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
    </>
  );
}

export default App;
