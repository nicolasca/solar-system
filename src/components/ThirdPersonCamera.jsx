import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import * as THREE from 'three';

export function ThirdPersonCamera({ }) {
    const cameraRef = useRef();
    const [currentPosition, setCurrentPosition] = useState(new THREE.Vector3(0, 0, 0));
    const [currentLookat, setCurrentcurrentLookat] = useState(new THREE.Vector3(0, 0, 0));
  
    useFrame(({clock}) => {
      if (cameraRef.current && target.current) {

        const offset = new THREE.Vector3(-2, 10, 10);
        offset.applyQuaternion(target.current.quaternion);
        offset.add(target.current.position);
        
        const lookat = new THREE.Vector3(0, 7,  0);
        lookat.applyQuaternion(target.current.quaternion);
        lookat.add(target.current.position);
        
        // const t = 4.0 * clock.getElapsedTime();
        // currentPosition.lerp(offset, t);
        // currentLookat.lerp(lookat, t);
        // setCurrentPosition(currentPosition);
        // setCurrentcurrentLookat(currentLookat);
        
        cameraRef.current.position.copy(offset);
        cameraRef.current.lookAt(lookat);
      }
    });
  
    return (
      <>
        <PerspectiveCamera ref={cameraRef} makeDefault near={1} far={10000} fov={60} position={[0, 5, 10]} />
      </>
    );
  }