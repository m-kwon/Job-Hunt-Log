import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';

const List = ({ listName }) => {
  const cards = useSelector((state) => state.jobApplications.applications.filter((app) => app.list === listName));

  return (
    <div className="list">
      <h2>{listName}</h2>
      <div className="card-list">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default List;