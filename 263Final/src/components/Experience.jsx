//import from libraries
import { OrbitControls, Stage } from "@react-three/drei";
//import from Drawer.jsx
import Cabinet from "./Drawer";

const Experience = () => {
    return (
        <>
            <OrbitControls />
            <Stage environment={"dawn"}>
                <group position={[0, 0, 0]}>
                    < Cabinet scale={2} />
                </group>
            </Stage>
        </>
    );
};

export default Experience;