import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { Vector3 } from "three";
import { useEffect, useRef, useState } from "react";
import { useKeyboard } from "../hooks/useKeyboard";


const JUMP_FORCE = 5;

export const Player = () => {
    const actions = useKeyboard();
    console.log('actions', Object.entries(actions).filter(([k, v]) => v));

    const { camera } = useThree();
    const [ref, api] = useSphere(() => ({
        mass: 10,
        type: 'Dynamic',
        position: [0, 0.5, 0],
    }));

    const vel = useRef([0, 0, 0]);
    useEffect(() => {
        api.velocity.subscribe((v) => vel.current = v);
        console.log(api.velocity)
    }, [api.velocity]);

    const pos = useRef([0, 0, 0]);
    useEffect(() => {
        api.position.subscribe((p) => pos.current = p);
    }, [api.position]);

    useFrame(() => {
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]));

        if (actions.jump && Math.abs(vel.current[1]) < 0.01) {
            api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2]);
        }
    })


    return (
        <mesh ref={ref}></mesh>
    )

}