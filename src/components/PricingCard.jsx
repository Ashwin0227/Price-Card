// PricingCard.js
import React from 'react';
import './PricingCard.css'; // Make sure to create a corresponding CSS file

const PricingCard = ({ title, price, features, buttonText, isHighlighted }) => {
  return (
    <div className={`card ${isHighlighted ? 'card-highlighted' : ''}`}>
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        <p className="card-price">{price}/month</p>
      </div>
      <div className="card-body">
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index} className="feature">
              <span className="checkmark">✔</span> {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <button className="card-button">button</button>
      </div>
    </div>
  );
};

export default PricingCard;