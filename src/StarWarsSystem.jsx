import SWPlanet from "./components/SWPlanet"


const StarWarsSystem = () => {

  const planets = [
    {
      name: 'korriban',
      hasElevation: true,
    },
    {
      name: 'felucia',
      hasElevation: false,
    },
    {
      name: 'coruscant',
      hasElevation: false,
    }
  ]

  return (
    <>
      {planets.map((planet, i) => <SWPlanet key={planet.name} planetName={planet.name} hasElevation={planet.hasElevation} index={i} />)}
    </>
  )
}

export default StarWarsSystem;
