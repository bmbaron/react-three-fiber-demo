import {usePlane} from "@react-three/cannon";
import {GradientTexture} from "@react-three/drei";


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
            <meshBasicMaterial
                attach={"material"}
            >
                <GradientTexture
                    stops={[0, 1]} // As many stops as you want
                    colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
                    size={1024} // Size is optional, default = 1024
                />
            </meshBasicMaterial>
        </mesh>
        )

}
