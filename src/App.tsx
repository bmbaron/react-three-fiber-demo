import * as React from "react";
import {Canvas} from "@react-three/fiber";
import styled from "styled-components"
import {OrbitControls, Environment, PerspectiveCamera, Stars, Sparkles} from "@react-three/drei";
import {FrenchCoatHanger} from "./3dComponents/FrenchCoatHanger";
import {RotatingBox} from "./3dComponents/RotatingBox";
import {Physics, usePlane} from "@react-three/cannon";
import {Plane} from "./3dComponents/Plane";

export default function App() {

    const size = 2;


    return (
        <Container>
        <Canvas shadows>
            <Environment files="./public/mud_road_puresky_1k.hdr" background blur={0} />
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} rotation={[0, 0.4, 0]} />
            {/*<ambientLight />*/}
            <pointLight
                castShadow
                shadowCameraVisible
                position={[0, 10, 0]}
                intensity={2}
                color="white"
            />
            {/*<Sparkles scale={5} count={100} size={3} noise={2} speed={2}/>*/}
            {/*<Stars />*/}
            {/*<FrenchCoatHanger color="#fff" scale={0.1}/>*/}
            <Physics>
                <RotatingBox data={{size: 1, castShadow: true}}/>
                <Plane />
            </Physics>
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