import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class Card extends React.Component {
  render() {
    return (
      <div>
        { Planets.map((planet, index) => <PlanetCard key={ index } planetName={ planet.name } planetImage={ planet.image }/> )}
      </div>
    );
  }
}

export default Card;
