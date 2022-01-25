import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Card from './components/CreatorCard';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
        <Card />
      </main>
    );
  }
}

export default App;
