import React from 'react';
import Square from '../Square/square';
import './board.scss';

const Board = ({handleClick, status, history, handleHistoryClick, step}) => {

    const current = history[step];
    // console.log(step);
    // console.log(current)
    // console.log(history)

    return (
        <div className="container">
            <div>
                {status}    
            </div>
            <div className="board">
                <div className="row">
                    <Square value={current[0]} handleClick={() => handleClick(0)} />
                    <Square value={current[1]} handleClick={() => handleClick(1)} />
                    <Square value={current[2]} handleClick={() => handleClick(2)} />
                </div>
                <div className="row">
                    <Square value={current[3]} handleClick={() => handleClick(3)} />
                    <Square value={current[4]} handleClick={() => handleClick(4)}/>
                    <Square value={current[5]} handleClick={() => handleClick(5)} />
                </div>
                <div className="row">
                    <Square value={current[6]} handleClick={() => handleClick(6)} />
                    <Square value={current[7]} handleClick={() => handleClick(7)} />
                    <Square value={current[8]} handleClick={() => handleClick(8)} />
                </div>
            </div>
            <div className="history">
                History:
                <ul>
                    {history.map((item, key) => {
                        return <li key={key}>
                            <button onClick={() => handleHistoryClick(key)}>
                                {key ? `Go back to move ${key}` : `Game start`}
                            </button>
                        </li>
                    })}
                </ul>
            </div>
        </div>

    )
}

export default Board;