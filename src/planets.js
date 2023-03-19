
import mercuryTexture from './assets/textures/mercury.jpg';
import venusTexture from './assets/textures/venus.jpg';
import earthTexture from './assets/textures/earth.jpg';
import marsTexture from './assets/textures/mars.jpg';
import jupiterTexture from './assets/textures/jupiter.jpg';
import saturnTexture from './assets/textures/saturn.jpg';
import uranusTexture from './assets/textures/uranus.jpg';
import neptuneTexture from './assets/textures/neptune.jpg';


const maxDiameter = 495282
const minDiameter = 4879
export function normalizeDiameter(diameter) {
    return (diameter - minDiameter) / (maxDiameter - minDiameter) + 0.5
  }

export const planets= [
  {
      name: 'Mercury',
      distance: 0.39,
      diameter: 4879,
      textureUrl: mercuryTexture,
      speed: Math.random(0.1, 0.6),
  },
  {
      name: 'Venus',
      distance: 0.72,
      diameter: 12104,
      textureUrl: venusTexture,
      speed: Math.random(0.1, 0.6),
  },
  {
      name: 'Earth',
      distance: 1,
      diameter: 12742,
      textureUrl: earthTexture,
      speed: Math.random(0.1, 0.6),
  },
  {
      name: 'Mars',
      distance: 1.52,
      diameter: 67922,
      textureUrl: marsTexture,
      speed: 1,
  },
  {
      name: 'Jupiter',
      distance: 5.20,
      diameter: 1429842,
      textureUrl: jupiterTexture,
      speed: Math.random(0.1, 0.6),
  },
  {
      name: 'Saturn',
      distance: 9.58,
      diameter: 1205362,
      textureUrl: saturnTexture,
      speed: Math.random(0.1, 0.6),
  },
  {
      name: 'Uranus',
      distance: 19.18,
      diameter: 511182,
      textureUrl: uranusTexture,
      speed: Math.random(0.1, 0.6),
  },
  {
      name: 'Neptune',
      distance: 30.07,
      diameter: 495282,
      textureUrl: neptuneTexture
  }
];