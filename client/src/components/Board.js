import React from 'react';
import List from './List';

import './styles/Board.css';

const Board = () => {
  const listNames = [
    'Applied',
    'Rejected / No Response',
    'Phone Interview',
    'Technical Interview',
    'Final Interview',
    'Offer',
  ];

  return (
    <div className="board">
      <div className="list-container">
        {listNames.map((listName, index) => (
          <List key={index} list={listName} />
        ))}
      </div>
    </div>
  );
};

export default Board;