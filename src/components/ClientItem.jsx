import React from 'react';
import '../assets/css/Client.css';

const ClientItem = ({ imgSrc, altText, text }) => {
  return (
    <div className="client-item">
      <img src={imgSrc} alt={altText} className="client-logo" />
      <p className="client-text">{text}</p>
    </div>
  );
};

export default ClientItem;