import React, { useState, useEffect } from 'react';
import BobaCard from './BobaCard';
import './BobaList.css';

const BobaList = ({ refresh }) => {
  const [bobas, setBobas] = useState([]);

  useEffect(() => {
    const fetchBobas = async () => {
      try {
        const response = await fetch('http://localhost:5555/api/bobas');
        const data = await response.json();
        setBobas(data);
      } catch (error) {
        console.error('Error fetching bobas:', error);
      }
    };

    fetchBobas();
  }, [refresh]);

  return (
    <div className="boba-list">
      {bobas.map(boba => (
        <BobaCard
          key={boba._id}
          name={boba.name}
          price={boba.price}
          description={boba.description}
          imageUrl={boba.imageUrl}
        />
      ))}
    </div>
  );
};

export default BobaList;
