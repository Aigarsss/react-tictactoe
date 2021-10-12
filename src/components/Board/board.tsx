import React from 'react';
import Square from '../Square/square';
import './board.scss';

const Board = ({board, handleClick, status, history, handleHistoryClick}) => {
    return (
        <div className="container">
            <div>
                {status}    
            </div>
            <div className="board">
                <div className="row">
                    <Square value={board[0]} handleClick={() => handleClick(0)} />
                    <Square value={board[1]} handleClick={() => handleClick(1)} />
                    <Square value={board[2]} handleClick={() => handleClick(2)} />
                </div>
                <div className="row">
                    <Square value={board[3]} handleClick={() => handleClick(3)} />
                    <Square value={board[4]} handleClick={() => handleClick(4)}/>
                    <Square value={board[5]} handleClick={() => handleClick(5)} />
                </div>
                <div className="row">
                    <Square value={board[6]} handleClick={() => handleClick(6)} />
                    <Square value={board[7]} handleClick={() => handleClick(7)} />
                    <Square value={board[8]} handleClick={() => handleClick(8)} />
                </div>
            </div>
            <div className="history">
                History:
                <ul>
                    {history.length > 0 && history.map((item, key) => {
                        return <li key={key}>
                            <button onClick={() => handleHistoryClick(key)}>
                                {key ? `Go back to move ${key}` : `restart`}
                            </button>
                        </li>
                    })}
                </ul>
            </div>
        </div>

    )
}

export default Board;