import * as React from "react";
import {Canvas} from "@react-three/fiber";
import styled from "styled-components"
import {OrbitControls, Environment, PerspectiveCamera, Stars, Sparkles, KeyboardControls} from "@react-three/drei";
import {Physics, Debug} from "@react-three/cannon";
import {Plane} from "./3dComponents/Plane";
import {SphereGenerator} from "./3dComponents/Sphere";
import {Suspense} from "react";
import {FrenchCoatHanger} from "./3dComponents/FrenchCoatHanger";
import {RotatingBox} from "./3dComponents/RotatingBox";
import {Target} from "./3dComponents/Target";

export default function App() {

    return (
        <Container>
            <KeyboardControls map={[
                { keys: ["w", "ArrowUp"], name: "moveForward" },
                { keys: ["s", "ArrowDown"], name: "moveBackward" },
                { keys: ["a", "ArrowLeft"], name: "moveLeft" },
                { keys: ["d", "ArrowRight"], name: "moveRight" },
                { keys: ["Space"], name: "jump" },
                { keys: ["z"], name: "stop" }
            ]}>
                <Canvas shadows>
                    <Environment files="./mud_road_puresky_1k.hdr" background blur={0} />
                    <PerspectiveCamera makeDefault position={[0, 5, 25]} fov={60} rotation={[0, 0.4, 0]} />
                    <ambientLight />
                    <pointLight
                        castShadow
                        position={[10, 10, 0]}
                        intensity={2}
                        color="white"
                    />
                    {/*<Sparkles scale={5} count={100} size={3} noise={2} speed={2}/>*/}
                    {/*<Stars />*/}
                    <Suspense fallback={null}>
                        <Physics gravity={[0, -50, 0]} friction={1e-3}>
                            {/*<RotatingBox data={{castShadow: true}}/>*/}
                            {/*<Debug color={"black"} scale={1}>*/}
                            <SphereGenerator />

                            <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, -7.5, 0]} />
                                <Plane rotation={[0, 0, 0]} position={[0, 0, -7.5]} gradient />
                                <Plane rotation={[0, Math.PI / 2, 0]} position={[-7.5, 0, 0]} gradient />
                                <Plane rotation={[0, -Math.PI / 2, 0]} position={[7.5, 0, 0]} gradient />
                                {/*<Plane rotation={[0, 0, 0]} position={[0, 0, 7.5]} transparent />*/}
                            {/*</Debug>*/}
                            {/*<Target />*/}
                            {/*<FrenchCoatHanger scale={0.1}/>*/}
                            {/*</Debug>*/}
                        </Physics>
                    </Suspense>
                    <OrbitControls enableDamping={false} />
                </Canvas>
            </KeyboardControls>
        </Container>
    );
}

const Container = styled('div')`
  margin: auto;
  display: flex;
  width: 50%;
  min-width: 600px;
  height: 90vh;
  background-color: black;
  border: 4px solid red;
  border-radius: 20px;
  overflow: hidden;
`