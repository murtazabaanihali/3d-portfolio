import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useIsMobile } from "../../lib/utils/hooks";

const Computers = ({ isMobile }: { isMobile: boolean; }) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

    return (
        <mesh>
            <hemisphereLight intensity={2} groundColor='black' />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                shadow-mapSize={1024}
            />
            <pointLight intensity={2} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.6 : 0.75}
                position={isMobile ? [0, -2.3, -1.8] : [0, -3.5, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const ComputersCanvas = ({ isWebglEnabled }: { isWebglEnabled: boolean; }) => {
    const isMobile = useIsMobile();

    return (
        isWebglEnabled ? <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
            : <img
                src={"./computer.png"}
                alt="computer"
                className="size-full object-cover"
            />
    );
};

export default ComputersCanvas;
