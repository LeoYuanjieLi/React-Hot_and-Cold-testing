import React from 'react';

import './card.css';

export default function Card(props) {
    return (
        <div className="card">
            <h2>{props.feedback}</h2>
        </div>
    );
};
