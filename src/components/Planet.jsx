import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Billboard, Line, Text, Trail } from '@react-three/drei';
import *  as THREE from "three"
import { normalizeDiameter } from '../planets';

export function Planet({ planet, onDoubleClick }) {
    const planetRef = React.useRef();
  
    const { distance, diameter } = planet
    const xRadius = (distance + 2.5) * 4
    const zRadius = (distance + 2.5) * 2

    useFrame(({ clock }) => {
      const t = clock.getElapsedTime() * planet.speed / 10 ;
      const x = xRadius * Math.sin(t);
      const z = zRadius * Math.cos(t);
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
    });
  
    if (!planetRef && !planetRef.current) return null
  
    const textureUrl = new THREE.TextureLoader().load(planet.textureUrl)
  
    return (
      <>
        <group ref={planetRef}>
        
          <mesh onDoubleClick={() => onDoubleClick(planetRef.current)}>
            <sphereGeometry args={[normalizeDiameter(diameter), 32, 32]} />
            <meshPhongMaterial map={textureUrl} />
          </mesh>
          <Billboard follow={true} position={[0, -normalizeDiameter(diameter)-0.05, 0]}>
            <Text fontSize={1} outlineWidth={'5%'} outlineColor="#000000" outlineOpacity={1} anchorY="top">
              {planet.name}
            </Text>
          </Billboard>
        </group>
        <Ecliptic xRadius={xRadius} zRadius={zRadius} planet={planetRef.current} />
      </>
  
    );
  }

  function Ecliptic({ xRadius = 1, zRadius = 1 }) {
    const points = [];
    for (let index = 0; index < 64; index++) {
      const angle = (index / 64) * 2 * Math.PI;
      const x = xRadius * Math.cos(angle);
      const z = zRadius * Math.sin(angle);
      points.push(new THREE.Vector3(x, 0, z));
    }
    points.push(points[0]);
  
    return (
      <Line points={points} color="white" lineWidth={1}/>
    );
  }

  // For comets
    // <Trail
    //       width={3}
    //       length={100}
    //       color={'#F8D628'}
    //       decay={2}
    //         target={planetRef}
        //   attenuation={(t) => {
        //     return t * t
        //   }}
        // />