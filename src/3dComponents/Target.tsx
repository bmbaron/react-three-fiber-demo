/*Auto-generated by: https://github.com/pmndrs/gltfjsx*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import {useBox, useCylinder} from "@react-three/cannon";
import {useFrame} from "@react-three/fiber";

export function Target(props) {
    const { nodes, materials } = useGLTF("/target.gltf");
    const [refTarget, apiTarget] = useBox<any>(() => ({mass: 0.05}));

    return (
        <group {...props} dispose={null} scale={1} >
            <group ref={refTarget}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder015.geometry}
                    material={materials["Red.024"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder015_1.geometry}
                    material={materials["White.024"]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/target.gltf");
