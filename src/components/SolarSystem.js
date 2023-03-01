import { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const mapPlanets = Planets.map((planet) => (<PlanetCard
      key={ planet.name }
      planetName={ planet.name }
      planetImage={ planet.image }
    />));

    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { mapPlanets }
      </div>
    );
  }
}

export default SolarSystem;
