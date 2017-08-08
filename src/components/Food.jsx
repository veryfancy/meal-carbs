import React from 'react';

const Food = ({ onRemoveClick, text }) => (
    <li>
        {text}

        <button onClick={onRemoveClick}>
            Remove
        </button>
    </li>
);

export default Food;
