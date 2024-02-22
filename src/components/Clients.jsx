import React, { useEffect, useState } from 'react';
import ClientItem from './ClientItem';
import '../assets/css/Client.css';


const Clients = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setFadeIn(true);
      } else {
        setFadeIn(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const clientsData = [
    { imgSrc: 'assets/images/IMS/savethechildren', altText: '', text: 'Save the Children.' },
    { imgSrc: 'path/to/your/logo2.png', altText: 'Client Logo 2', text: '' },
    { imgSrc: 'path/to/your/logo3.png', altText: 'Client Logo 3', text: 'Home Appliances' },
    { imgSrc: 'path/to/your/logo4.png', altText: 'Client Logo 4', text: '' },
    
  ];

  return (
    <div className={`clients-container ${fadeIn ? 'fade-in' : ''}`}>
      <h2 className="clients-title">Our Clients</h2>
      <div className="clients-list">
        {clientsData.map((client, index) => (
          <ClientItem key={index} {...client} />
        ))}
      </div>
    </div>
  );
};

export default Clients;