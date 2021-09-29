import React from 'react';
import './square.scss';

const Square = ({value, handleClick}) => {

    return (
        <div className = "square" onClick={handleClick}>
            {value}
        </div>
    )
}

export default Square;