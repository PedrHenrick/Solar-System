import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <article>
          { Planets.map(({ name, image }) => (
            <PlanetCard key={ name } planetName={ name } planetImage={ image } />
          ))}
        </article>
      </div>
    );
  }
}

export default SolarSystem;
