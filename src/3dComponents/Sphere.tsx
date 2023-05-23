import {useEffect, useState} from "react";
import {useFrame} from "@react-three/fiber";
import {Html, Sphere, useKeyboardControls} from "@react-three/drei";
import * as React from "react";
import {useSphere} from "@react-three/cannon";
import {checkMovement} from "../controllers/movement-controller";
import styled from "styled-components";

export const SphereGenerator = () => {
    const [refSphere, apiSphere] = useSphere <any>(() => ({mass: 5}));
    const [subscribeKeys, getKeys] = useKeyboardControls();
    const [hovered, setHovered] = useState(false);
    const [isFloating, setIsFloating] = useState(false)

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
    }, [hovered]);

    useFrame(() => {
        apiSphere.position.subscribe((pos) => {
            if (pos[1] > -6) {
                setIsFloating(true);
            }
            else setIsFloating(false);
        })
        if (checkMovement(getKeys, refSphere, isFloating, 10)) {
            apiSphere.velocity.set(...checkMovement(getKeys, refSphere, isFloating, 20))
        }
    });

    const handleClick = () => {
        apiSphere.velocity.set(0,15,0);
    }

    return (
        <Sphere
            ref={refSphere}
            position={[0,0,0]}
            radius={0.1}
            castShadow
            receiveShadow
            onClick={handleClick}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial />
                <Html>
                    <Label onClick={handleClick}>sphere</Label>
                </Html>
        </Sphere>
    )
}


const Label = styled('div')`
    background-color: white;
    border: 1px solid #888888;
    padding: 5px;
    border-radius: 3px;
    font-family: Arial, Helvetica, sans-serif;
    &:hover {
      cursor: pointer;
    }
`

