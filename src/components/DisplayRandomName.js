import React from 'react';
import { connect } from 'react-redux';
import './DisplayRandomName.css';

const DisplayRandomName = ({ buttonText, clickRandomNameHandler }) => (
    <button
        type="button"
        onClick={clickRandomNameHandler}
    >
        {buttonText}
    </button>
);


export default RandomNameButton;
