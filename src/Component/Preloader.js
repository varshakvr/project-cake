import React from 'react';
import './Css/Pre.module.css'; // You can create this CSS file to style the preloader

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Preloader;
