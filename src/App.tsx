import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './Home';
import Links from './Links';

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <div className="App-links">
          <Link to="/home">Home</Link>
          <Link to="/links">Links</Link>
        </div>
        <div></div>
        <div></div>
        <img src={logo} className="App-logo" width="100%" height="100%" alt="logo" />
        <div></div>
        <div></div>
        <div className="App-links">
          <Route exact path="/home" component={Home} />
          <Route path="/links" component={Links} />
        </div>
        <div></div>
      </header>
    </div>
  );
}

export default App;
