import {useEffect, useRef, useState} from "react";
import {useFrame} from "@react-three/fiber";
import {RoundedBox, useKeyboardControls, useTexture} from "@react-three/drei";
import * as React from "react";
import {useBox} from "@react-three/cannon";
import {checkMovement} from "../controllers/movement-controller";

type RotatingBoxProps = {
    data: {
        size?: number;
        castShadow?: boolean;
    }
}

export const RotatingBox = ({data}: RotatingBoxProps) => {
    const {size, castShadow} = data;
    const [refBox, apiBox] = useBox <any>(() => ({mass: 0.0005}));
    const [subscribeKeys, getKeys] = useKeyboardControls();
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
    }, [hovered])

    // const props = useTexture({
    //     map: 'carpet.png',
    //     // displacementMap: 'carpet.png',
    //     normalMap: 'carpet.png',
    //     roughnessMap: 'carpet.png',
    //     aoMap: 'carpet.png',
    // })

    useFrame(() => {
        if (checkMovement(getKeys, refBox)) {
            apiBox.velocity.set(...checkMovement(getKeys, refBox))
        }
    });

    const handleClick = () => {
        apiBox.velocity.set(0,15,0);
    }

    return (
        <RoundedBox
            position={[100,100,100]}
            ref={refBox}
            args={[size || 1, size || 1, size || 1]}
            scale={3}
            radius={0.1}
            // rotation-x={Math.PI * 0.25}
            // rotation-y={Math.PI * 0.25}
            castShadow
            receiveShadow
            onClick={handleClick}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <meshPhongMaterial
                attach="material"
                color={"green"}
                // map={carpetMap}
                //{...props}
            />
        </RoundedBox>
    )
}
