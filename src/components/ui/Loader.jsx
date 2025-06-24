import React from 'react';
import './Loader.css';

const Loader = ({ size = 'medium', color = 'primary', text = 'Loading...' }) => {
  return (
    <div className={`loader-container loader-${size}`}>
      <div className={`loader-spinner loader-${color}`}></div>
      {text && <p className="loader-text">{text}</p>}
    </div>
  );
};

export default Loader; 