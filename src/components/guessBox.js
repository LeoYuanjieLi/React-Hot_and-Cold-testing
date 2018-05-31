import React from 'react';

import './guessBox.css';

export default function GuessBox(props) {
    const result = props.guessedArray.map((item, index) => {
        return <li key={index}>{item}</li>
    });
    return (

        <ul className="guessBox">
            {result}
        </ul>
    );
};