import React from 'react';
import './App.css';
import {Square, Board, calculateWinner} from './Game';
function App() {
  return (
  <>
    <div className="App">
     <h1>Hi! Let’s Play Tic Tac Toe!</h1>
     <Board />
    </div>
  </>
  );
};
export default App;