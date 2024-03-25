import React from 'react';
import '../styles/Calculator.css';
import { evaluate } from 'mathjs';
import { useState } from 'react';
import CalcButton from './CalcButton.js';
import CalcScreen from './CalcScreen.js';
import CalcClearButton from './CalcClearButton.js';

function Calculator() {

  const [calcInput, setCalcInput] = useState('');

  const addInput = val => {
    setCalcInput(calcInput + val);
  };
  const clearInput = () => {
    setCalcInput('');
  };
  const calculate = () => {
    if (calcInput)
      setCalcInput(evaluate(calcInput));
  };

  return (
    <div className='calculator-container'>
      <CalcScreen input={calcInput} />
      <div className='c-row'>
        <CalcButton handleClick={addInput}>1</CalcButton>
        <CalcButton handleClick={addInput}>2</CalcButton>
        <CalcButton handleClick={addInput}>3</CalcButton>
        <CalcButton handleClick={addInput}>+</CalcButton>
      </div>
      <div className='c-row'>
        <CalcButton handleClick={addInput}>4</CalcButton>
        <CalcButton handleClick={addInput}>5</CalcButton>
        <CalcButton handleClick={addInput}>6</CalcButton>
        <CalcButton handleClick={addInput}>-</CalcButton>
      </div>
      <div className='c-row'>
        <CalcButton handleClick={addInput}>7</CalcButton>
        <CalcButton handleClick={addInput}>8</CalcButton>
        <CalcButton handleClick={addInput}>9</CalcButton>
        <CalcButton handleClick={addInput}>*</CalcButton>
      </div>
      <div className='c-row'>
        <CalcButton handleClick={calculate}>=</CalcButton>
        <CalcButton handleClick={addInput}>0</CalcButton>
        <CalcButton handleClick={addInput}>.</CalcButton>
        <CalcButton handleClick={addInput}>/</CalcButton>
      </div>
      <div className='c-row'>
        <CalcClearButton handleClick={clearInput}>Clear</CalcClearButton>
      </div>
    </div>
  );
}

export default Calculator;