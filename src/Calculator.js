import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = parseFloat(num1) * parseFloat(num2);
    setResult(product);
  };

  const handleDivision = () => {
    const quotient = parseFloat(num1) / parseFloat(num2);
    setResult(quotient);
  };

  return (
    <div className="calculator">
      <label htmlFor="Num1">Num1</label>
      <br />
      <input type="number" value={num1} onChange={handleNum1Change} />
      <br />
      <label htmlFor="Num2">Num2</label>
      <br />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <br />

      <div className="button-container">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
     
      </div>
<br /><br />
      <div>Result: {result}</div>
    </div>
  );
}

export default Calculator;
