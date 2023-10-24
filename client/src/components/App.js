import React from 'react';
import Board from './Board';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import './App.css';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1>Job Hunt Log</h1>
        <Board />
      </div>
    </DndProvider>
  );
};

export default App;
