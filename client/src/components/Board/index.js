import React from 'react';
import List from '../List';

const Board = () => {
  return (
    <div className="board">
      <List listName="Applied" />
      <List listName="Interview" />
    </div>
  );
};

export default Board;