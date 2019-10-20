import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PaintingsList from './components/PaintingsList';
import Profile from './components/Profile';
import { fetchPaintings } from './services/api-helper';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      paintings: [],
    }
  }

  getPaintings = async () => {
    const paintingsList = await fetchPaintings();
    this.setState({
      paintings: paintingsList
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path='/' render={() => (<PaintingsList getPaintings={this.getPaintings} paintings={this.state.paintings} />)} />
          <Route path={'/artwork/:objectNumber'} render={(props) => (<Profile id={props.match.params.objectNumber} />)} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;