import React from 'react';
import Navigation from './Navigation';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>

      <Router>
        <Navigation />
        <h1>Hello and welcome to Day 23: Task 1</h1>
        <Routes>
          <Route path="/dash" element={<Dashboard />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
