import * as React from "react";
import {usePlane} from "@react-three/cannon";


export const Plane = () => {
    const [ref] = usePlane<any>(() => ({rotation: [-Math.PI / 2, 0, 0],
        position: [0,-5,0]}));
    return (
        <mesh
            position={[0, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow={true}
            ref={ref}
        >
            <planeGeometry attach={"geometry"} args={[15, 15]} />
            <meshStandardMaterial
                attach={"material"}
                color={"lightblue"}
            />
        </mesh>
        )

}
