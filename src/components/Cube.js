import { useBox } from "@react-three/cannon";
import { useStore } from "../hooks/useStore";
import * as textures from '../images/textures'

export const Cube = ({ key, position, texture }) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }));
    const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube])
    const activeTexture = textures[texture + 'Texture'];
    return (
        <mesh ref={ref} onClick={(e) => {
            e.stopPropagation();
            // each face of a cube is formed by 2 triangles instead than 1 square, so each cube has 12 faces in reallity and we need to fix that to make it have 6
            const clickedFace = Math.floor(e.faceIndex / 2);
            console.log('Face: ', clickedFace);
            const { x, y, z } = ref.current.position;
            if (e.altKey) {
                removeCube(x, y, z)
                return
            }
            else if (clickedFace === 0) {
                addCube(x + 1, y, z)
                return
            }
            else if (clickedFace === 1) {
                addCube(x - 1, y, z)
                return
            }
            else if (clickedFace === 2) {
                addCube(x, y + 1, z)
                return
            }
            else if (clickedFace === 3) {
                addCube(x, y - 1, z)
                return
            }
            else if (clickedFace === 4) {
                addCube(x, y, z + 1)
                return
            }
            else if (clickedFace === 5) {
                addCube(x, y, z - 1)
                return
            }
            // const [x, y, z] = Object.values(e.point).map(val => Math.ceil(val));
            // addCube(x, y, z);
        }}>
            <boxBufferGeometry attach='geometry' />
            <meshStandardMaterial map={activeTexture} attach='material' />
        </mesh>
    )
}
