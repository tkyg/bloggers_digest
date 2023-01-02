import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" element={<Home />} />
      </div>
    </Router>
  );
}

export default App;
