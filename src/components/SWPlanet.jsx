import { Billboard, Text, useTexture } from "@react-three/drei"
import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react";
import * as THREE from 'three'


const SWPlanet = ({ planetName, hasElevation, hasRoughness, index }) => {

  const planetRef = useRef()

  const planetProps = {
    map: useLoader(THREE.TextureLoader, `textures/${planetName}/diffuse.png`),
    bumpMap: useLoader(THREE.TextureLoader, `textures/${planetName}/bump.png`),
    bumpScale: 0.01,
  }

  if (hasElevation) {
    planetProps.displacementMap = useLoader(THREE.TextureLoader, `textures/${planetName}/elevation.png`)
    planetProps.displacementScale = 0.01
  }

  if (hasRoughness) {
    planetProps.roughnessMap = useLoader(THREE.TextureLoader, `textures/${planetName}/roughness.png`)
  }

  useFrame(({ clock }) => {
    planetRef.current.rotation.y += 0.001
  })

  return (
    <group >
      <Text position={[index * 5, 3, 0]}
        font="Starjedi.ttf"
        fontSize={0.5}
        color={'black'}
        outlineWidth={'5%'}
        outlineColor="white"
        outlineOpacity={1} >
        {planetName}
      </Text>
      <mesh ref={planetRef} position={[index * 5, 0, 0]}>
        <sphereGeometry args={[4, 64, 64]} />
        <meshStandardMaterial
          {...planetProps}
        />
      </mesh>
    </group>
  )

}

export default SWPlanet;
