import React from 'react';
import List from '../List';

import './styles.css';

const Board = () => {
  return (
    <div className="board">
      <div className="list-container">
        <List listName="Applied" />
      </div>
      <div className="list-container">
        <List listName="Phone Interview" />
      </div>
      <div className="list-container">
        <List listName="Technical Interview" />
      </div>
      <div className="list-container">
        <List listName="Final Interview" />
      </div>
      <div className="list-container">
        <List listName="Offer" />
      </div>
      <div className="list-container">
        <List listName="Rejected / No Response" />
      </div>
    </div>
  );
};

export default Board;
