import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import Beers from './components/beers';
import Home from './components/home';
import RandomBeers from './components/random-beers';
import NewBeers from './components/new-beers';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Home}/>
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/randomBeers" component={RandomBeers} />
        <Route exact path="/newbeers" component={NewBeers} />
        {/* < Route exact path= "/Nav.js" component ={Nav}/> */}
      </Switch>
    </div>
  );
}

export default App;
