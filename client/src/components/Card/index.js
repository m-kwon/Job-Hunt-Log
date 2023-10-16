import React from 'react';

import './styles.css';

const Card = ({ card }) => {
  return (
    <div className="card">
      <h3>{card.title}</h3>
      <p>{card.company}</p>
      <a href={card.job_url} target="_blank" rel="noopener noreferrer">
        Job Link
      </a>
    </div>
  );
};

export default Card;