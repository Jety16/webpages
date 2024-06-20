import React from 'react';
import './Description.css';

const Description = ({ isOpen, toggleComponent }) => {
  return (
    
    <div className={`description ${isOpen ? 'open' : ''}`}>
      <h2>New Component</h2>
      <p>This is the new component that opens when the arrow button is clicked.</p>

      <button className="closeButton" onClick={toggleComponent}>
        &times;
      </button>
    </div>
  );
};

export default Description;