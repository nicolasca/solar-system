import { GizmoHelper, GizmoViewport, PivotControls, Stars, OrbitControls, TransformControls, PerspectiveCamera, Loader } from '@react-three/drei'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { forwardRef, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import { Ship } from './components/Ship'
import { SolarSystem } from './SolarSystem'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { ThirdPersonCamera } from './components/ThirdPersonCamera'
import * as THREE from 'three'
import { a, useSpring } from '@react-spring/three'
import { AxesHelper, Quaternion } from "three";
import { Model } from './components/TieShip'
import { EffectComposer, HueSaturation } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { MotionBlur } from './components/MotionBlur'
import StarWarsSystem from './StarWarsSystem'


function App() {

  // const fov = 60;
  // const aspect = 1920 / 1080;
  // const near = 1.0;
  // const far = 1000.0;
  // const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  // camera.position.set(25, 10, 25);

  // return (
  //   <Canvas camera={camera}>
  //     <Perf position="top-left" />
  //     <GizmoHelper
  //       alignment="bottom-right" // widget alignment within scene
  //       margin={[80, 80]} // widget margins (X, Y)
  //     >
  //       <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
  //     </GizmoHelper>
  //     <Suspense fallback={null}>
  //       <SolarSystem />
  //       <perspectiveCamera {...camera} />
  //       <Ship camera={camera} />
  //       {/* <ThirdPersonCamera /> */}
  //     </Suspense>

  //   </Canvas>

  // )

  // const Cone = forwardRef((props, ref) => {
  //   const [velocity, setVelocity] = useState(new THREE.Vector3(0, 0, 0));
  //   const [rotation, setRotation] = useState({ x: 0, y: 0 });
  //   const [acceleration, setAcceleration] = useState(0);

  //   useFrame(({ clock }) => {
  //     const elapsedTime = clock.getElapsedTime();
  //     const delta = clock.getDelta();

  //     if (ref.current) {
  //       ref.current.setRotationFromQuaternion(ref.current.quaternion);

  //       const direction = new THREE.Vector3();
  //       ref.current.getWorldDirection(direction);

  //       velocity.addScaledVector(direction, acceleration * elapsedTime);
  //       ref.current.position.addScaledVector(velocity, delta);

  //       if (acceleration === 0) {
  //         velocity.multiplyScalar(0.95); // Apply inertia (dampening)
  //       }
  //     }
  //   });

  //   const handleKeyDown = useCallback((event) => {
  //     if (event.key === "ArrowUp") {
  //       setRotation((prev) => ({ ...prev, x: prev.x - 0.1 }));
  //     } else if (event.key === "ArrowDown") {
  //       setRotation((prev) => ({ ...prev, x: prev.x + 0.1 }));
  //     } else if (event.key === "ArrowLeft") {
  //       ref.current.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.1));
  //     } else if (event.key === "ArrowRight") {
  //       ref.current.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -0.1));

  //     } else if (event.key === " ") {
  //       setAcceleration(5);
  //     }
  //   }, []);

  //   const handleKeyUp = useCallback((event) => {
  //     if (event.key === " ") {
  //       setAcceleration(0);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     window.addEventListener("keydown", handleKeyDown);
  //     window.addEventListener("keyup", handleKeyUp);

  //     return () => {
  //       window.removeEventListener("keydown", handleKeyDown);
  //       window.removeEventListener("keyup", handleKeyUp);
  //     };
  //   }, [handleKeyDown, handleKeyUp]);

  //   return (
  //     <mesh ref={ref} position={[0, 0, 0]}>
  //       <coneGeometry args={[1, 2, 32]} />
  //       <meshStandardMaterial color="blue" />
  //     </mesh>
  //   );
  // });



  // const ThirdPersonCamera = ({ target }) => {
  //   const ref = useRef();
  //   const { set } = useThree();

  //   const [{ position }, setSpring] = useSpring(() => ({
  //     position: [0, 5, 10],
  //     config: { tension: 170, friction: 26 },
  //   }));

  //   useEffect(() => {
  //     set(() => ({ camera: ref.current }));
  //   }, [set]);

  //   useFrame(() => {
  //     if (target.current) {
  //       const targetPosition = new THREE.Vector3(target.current.position.x, target.current.position.y + 5, target.current.position.z + 10);
  //       setSpring({ position: targetPosition });

  //       if (ref.current) {
  //         ref.current.position.lerp(position.get(), 0.1);
  //         ref.current.lookAt(target.current.position);
  //       }
  //     }
  //   });

  //   return (
  //     <a.perspectiveCamera
  //       ref={ref}
  //       position={position}
  //       fov={50}
  //       near={0.1}
  //       far={1000}
  //     />
  //   );
  // };

  // const coneRef = useRef();

  return (
    <>
      <Canvas >
        <Suspense fallback={null}>
          <Perf position="top-left" />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} />
          <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          <OrbitControls />
          {/* <Cone position={[0, 0, 0]} color={"hotpink"} ref={coneRef} /> */}
          {/* <ThirdPersonCamera target={coneRef} /> */}
          {/* <gridHelper args={[20, 20]} /> */}
          {/* <axesHelper args={[5]} /> */}
          <Model />
          <StarWarsSystem />
          {/* <EffectComposer>
        <MotionBlur />
        <HueSaturation
        blendFunction={BlendFunction.NORMAL}
        hue={-0.15}
        saturation={0.1} />
      </EffectComposer> */}
          {/* <Stars /> */}
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );

}

export default App
