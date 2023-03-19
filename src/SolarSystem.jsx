import React, { Suspense, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Billboard, CameraControls, OrbitControls, OrthographicCamera, PerspectiveCamera, Stars, Text } from '@react-three/drei';
import *  as THREE from "three"
import sunTexture from './assets/textures/sun.jpg';
import { normalizeDiameter, planets } from './planets';
import { Planet } from './assets/components/Planet';

const sunSize = 1392000

export const SolarSystem = () => {
  const [focusedPlanet, setFocusedPlanet] = useState(null)
  const sunRef = React.useRef();
  const state = useThree()

  //On double click, make the camera look at this planet
  const handleDoubleClickPlanet = (planet) => {
    setFocusedPlanet(planet)
    state.camera.position.set(planet.position.x, planet.position.y, planet.position.z + 10)
    state.camera.lookAt(planet.position.x, planet.position.y, planet.position.z)
  }

  useFrame(() => {
    if (focusedPlanet) {
      state.camera.lookAt(focusedPlanet.position.x, focusedPlanet.position.y, focusedPlanet.position.z)
    }
  })

  return (
    <>
      <ambientLight />
      <mesh ref={sunRef} position={[0, 0, 0]} onDoubleClick={() => handleDoubleClickPlanet(sunRef.current)}>
        <sphereGeometry args={[normalizeDiameter(sunSize), 32, 32]} />
        <meshBasicMaterial map={new THREE.TextureLoader().load(sunTexture)} />
      </mesh>
      {
        planets.map((planet) => {
          return <Planet key={planet.name} planet={planet} onDoubleClick={handleDoubleClickPlanet} />
        })
      }
      <OrbitControls />

      <Stars radius={10} depth={50} count={5000} factor={1} saturation={0} fade speed={0.2} />
    </>
  );
}

export default SolarSystem;
