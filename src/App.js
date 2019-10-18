import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PlantList from './components/PlantList';
import { fetchPlants } from './services/api-helper';

// import { Route } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  getPlants = async () => {
    const plantList = await fetchPlants();
    console.log(plantList);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PlantList getPlants={this.getPlants} />
        <Footer />
      </div>
    );
  }
}

export default App;