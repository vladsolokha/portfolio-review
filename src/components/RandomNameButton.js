import React from 'react';
import './RandomNameButton.css';

const RandomNameButton = ({ buttonText, clickRandomNameHandler }) => (
    <button
        type="button"
        onClick={clickRandomNameHandler}
    >
        {buttonText}
    </button>
);

export default RandomNameButton;
