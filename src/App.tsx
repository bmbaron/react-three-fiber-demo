import * as React from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {useEffect, useRef} from "react";
import styled from "styled-components"
import {OrbitControls, RoundedBox, Environment, PerspectiveCamera, useGLTF} from "@react-three/drei";
import {Mesh} from "three";
import {FrenchCoatHanger} from "./3dComponents/FrenchCoatHanger";

export default function App() {
    const size = 2;

    const RotatingBox = () => {
        const boxRef = useRef();

        useFrame(() => {
            if (boxRef.current) {
                boxRef.current.rotation.y += 0.01;
            }
        });

        return (
            <RoundedBox position={[-2,4,-0.5]} ref={boxRef} args={[size, size, size]} radius={0.1} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
                <meshLambertMaterial attach="material" color={"red"} />
            </RoundedBox>
        )
    }


    return (
        <Container>
        <Canvas>
            <Environment files="./public/mud_road_puresky_1k.hdr" background blur={0} />
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} rotation={[0, 0.4, 0]} />
            <ambientLight />
            <pointLight position={[10, 10, 10]} intensity={2} color="#fff"/>
            <pointLight position={[10, 5, 5]} intensity={2} color="#fff"/>
            <FrenchCoatHanger color="#fff" scale={0.1}/>
            <RotatingBox />
            <OrbitControls enableDamping={false} />
        </Canvas>
        </Container>
    );
}

const Container = styled('div')`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
`