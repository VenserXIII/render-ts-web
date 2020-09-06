import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './Home';

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="App-links">
          <Link to="/home">
            <img src={logo} className="App-logo" width="100%" height="100%" alt="logo" />
          </Link>
        </div>
        <div></div>
        <div></div>
        <div className="App-links">
          <Route exact path="/home" component={Home} />
        </div>
        <div></div>
      </header>
    </div>
  );
}

export default App;
