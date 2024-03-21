import React from 'react';
import '../styles/CalcButton.css';

function CalcButton(props) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };

  return (
    <div
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  );
}

export default CalcButton;