import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Content from './components/Content';

import './assets/css/App.css';

const App = () => {
  return (
    <div id="Main">
      <Router>
        <Header />
        <Content />
      </Router>
    </div>
  );
}

export default App;
