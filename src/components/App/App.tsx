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
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [history, setHistory] = useState([new Array(9).fill(null)]);
  const [step, setStep] = useState(0);

  const winner = checkWinner(board);
  const status = !winner ? `${isXNext ? 'X' : 'O'} make your move` : `${winner} has won`;

  const handleClick = (i) => {
    if (board[i] || winner) {
      return
    }
    setStep(step + 1);

    let boardCopy = [...board];
    boardCopy[i] = isXNext ? 'X' : 'O';
    setHistory( [...history, [...boardCopy]] );
    setIsXNext(!isXNext);
    setBoard(boardCopy);
  }

  console.log(history)

  const handleHistoryClick = (i) => {
    setBoard(history[i]);
    i % 2 === 0 ? setIsXNext(false) : setIsXNext(true);
    setStep(i);
  }

  console.log(step);

  return <Board 
            board={board} 
            handleClick={handleClick} 
            status={status} 
            history={history}
            handleHistoryClick={handleHistoryClick}
        />
}

export default App
