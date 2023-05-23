import {usePlane} from "@react-three/cannon";
import {GradientTexture} from "@react-three/drei";

export const Plane = ({rotation, position, gradient}) => {
    const [ref] = usePlane<any>(() => ({
        rotation: rotation,
        position: position,
    }));
    return (
        <mesh
            position={position}
            rotation={rotation}
            receiveShadow={true}
            ref={ref}
        >
            <boxGeometry attach={"geometry"} args={[15, 15, 0.1]} />
            <meshPhongMaterial
                attach={"material"}
                color={!gradient ? 'maroon' : 'none'}
                // opacity={transparent ? 0.1 : 1}
            >
                {gradient &&
                    <GradientTexture
                        stops={[0, 1]} // As many stops as you want
                        colors={['black', 'maroon']} // Colors need to match the number of stops
                        size={1024} // Size is optional, default = 1024
                    />
                }
            </meshPhongMaterial>
        </mesh>
        )

}
