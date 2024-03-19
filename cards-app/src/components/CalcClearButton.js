import React from 'react';
import '../styles/CalcClearButton.css';

const CalcClearButton = (props) => (
    <div className='clear-button'>
        {props.children}
    </div>

);

export default CalcClearButton;