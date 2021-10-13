import React, { useState } from 'react';
import Board from '../Board/board';

const checkWinner = (board) => {

    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    let winner = null;

    winningCombinations.forEach(element => {
      const [a, b, c] = element;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        winner = board[a];
      }
    });

    return winner
}

const App = () => {
  const [isXNext, setIsXNext] = useState(true);
  const [history, setHistory] = useState([new Array(9).fill(null)]);
  const [step, setStep] = useState(0);

  const winner = checkWinner(history[history.length-1]);
  const status = !winner ? `${isXNext ? 'X' : 'O'} make your move` : `${winner} has won`;

  // console.log(history);

  const handleClick = (i) => {
    console.log(history)
    const historyCopy = history.slice(0, step + 1);
    console.log(history.slice(0, step + 1))
    let currentBoard = historyCopy[historyCopy.length - 1];

    if (history[history.length - 1][i] || winner) {
      return
    }

    currentBoard[i] = isXNext ? 'X' : 'O';
    setHistory([...historyCopy, [...currentBoard]]);
    setIsXNext(!isXNext);
    setStep(history.length);
  }

  const handleHistoryClick = (i) => {
    i % 2 === 0 ? setIsXNext(false) : setIsXNext(true);
    setStep(i);
  }

  return <Board 
            handleClick={handleClick} 
            status={status} 
            history={history}
            handleHistoryClick={handleHistoryClick}
            step={step}
        />
}

export default App
