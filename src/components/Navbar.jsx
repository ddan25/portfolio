import { useState } from 'react';
import { useNavigate } from "react-router-dom";


// Object to hold styles
const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
  },
  heading: {
    fontSize: '20px',
    fontWeight: 'bold',
    flexGrow: '1',
  },
  buttonContainer: {
    display: 'flex',
  },
  button: (isHovered) => ({
    padding: '10px 15px',
    backgroundColor: isHovered ? '#555' : '#444',  // Change color on hover
    border: 'none',
    color: 'white',
    marginRight: '15px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  }),
};

function Navbar() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const navigate = useNavigate();

  const handleClick = (buttonName) => {
    navigate(`/${buttonName}`);
    console.log(`${buttonName} clicked!`);
  };

  // Handle mouse hover events
  const handleMouseEnter = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div style={styles.card}>
      <div style={styles.heading}>Peter Ortiz</div>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button(hoveredButton === 'Home')}
          onClick={() => handleClick('Home')}
          onMouseEnter={() => handleMouseEnter('Home')}
          onMouseLeave={handleMouseLeave}
        >
          Home
        </button>
        <button
          style={styles.button(hoveredButton === 'Portfolio')}
          onClick={() => handleClick('Portfolio')}
          onMouseEnter={() => handleMouseEnter('Portfolio')}
          onMouseLeave={handleMouseLeave}
        >
          Portfolio
        </button>
        <button
          style={styles.button(hoveredButton === 'Resume')}
          onClick={() => handleClick('Resume')}
          onMouseEnter={() => handleMouseEnter('Resume')}
          onMouseLeave={handleMouseLeave}
        >
          Resume
        </button>
      </div>
    </div>
  );
}

export default Navbar;
