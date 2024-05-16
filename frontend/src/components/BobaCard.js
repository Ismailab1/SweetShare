import React from 'react';
import './BobaCard.css';

const BobaCard = ({ name, price, description, imageUrl }) => (
  <div className="card">
    <img className="card-image" src={imageUrl} alt={name} />
    <div className="card-info">
      <h2 className="card-name">{name}</h2>
      <p className="card-price">${price}</p>
      <p className="card-description">{description}</p>
    </div>
  </div>
);

export default BobaCard;
