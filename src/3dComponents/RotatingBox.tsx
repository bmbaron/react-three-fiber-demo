import {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {RoundedBox} from "@react-three/drei";
import * as React from "react";
import {useBox} from "@react-three/cannon";

type RotatingBoxProps = {
    data: {
        size: number;
        castShadow: boolean;
    }
}

export const RotatingBox = ({data}: RotatingBoxProps) => {
    const {size, castShadow} = data;
    const boxRef = useRef <any>();
    const [ref, api] = useBox <any>(() => ({mass: 0.0001}))

    useFrame(() => {
        if (boxRef.current) {
            boxRef.current.rotation.y += 0.01;
        }
    });

    return (
        <RoundedBox
            position={[0,0,0]}
            ref={ref}
            args={[size, size, size]}
            radius={0.1}
            // rotation-x={Math.PI * 0.25}
            // rotation-y={Math.PI * 0.25}
            castShadow={castShadow}
            onClick={() => {
                console.log('lcicked')
                api.velocity.set(0,0,10)
            }}
        >
            <meshLambertMaterial
                attach="material"
                color={"red"}
            />
        </RoundedBox>
    )
}