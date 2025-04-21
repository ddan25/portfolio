import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // React Router (optional)
import Home from './components/Home';  // Importing child components
import Portfolio from './components/Portfolio';  // Importing other pages
import Resume from './components/Resume';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route to HomePage */}
          <Route path="/home" element={<Home />} /> {/* Route to HomePage */}
          <Route path="/portfolio" element={<Portfolio />} /> {/* Route to AboutPage */}
          <Route path="/resume" element={<Resume />} /> {/* Route to AboutPage */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
