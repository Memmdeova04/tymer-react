import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
import Timer from './Timer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        
        <nav>
          <NavLink to="/clock" activeClassName="active">Clock</NavLink>
          <NavLink to="/stopwatch" activeClassName="active">Stopwatch</NavLink>
          <NavLink to="/timer" activeClassName="active">Timer</NavLink>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/clock" element={<Clock />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
