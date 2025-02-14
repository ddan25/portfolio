import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // React Router (optional)
import Home from './components/Home';  // Importing child components
import Portfolio from './components/Portfolio';  // Importing other pages
import Resume from './components/Resume';
import Header from './components/Header';  // A Header component (optional)

function App() {
  const [theme, setTheme] = useState('light');  // Example of state management

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />  {/* Rendering a header component */}
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} /> {/* Route to HomePage */}
          <Route path="/portfolio" element={<Portfolio />} /> {/* Route to AboutPage */}
          <Route path="/resume" element={<Resume />} /> {/* Route to AboutPage */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
