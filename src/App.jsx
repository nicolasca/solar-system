import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import './App.css'
import { SolarSystem } from './SolarSystem'

function App() {

  return (
    <Suspense fallback={null}>
      <Canvas camera={{ position: [0, 20, 25], far: 1000 }} >
        <SolarSystem />
      </Canvas>
    </Suspense>

  )
}

export default App
