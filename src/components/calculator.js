import React, { useCallback, useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [updatedNumber, setUpdatedNumber] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [mathSymbol, setMathSymbol] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleNumber = useCallback(
    (number) => {
      setDisplayValue(updatedNumber + number);
      setUpdatedNumber(updatedNumber + number);
    },
    [updatedNumber]
  );

  // handle symbol - remove this line
  const handleSymbol = useCallback(
    (symbol) => {
      setFirstNumber(updatedNumber);
      setUpdatedNumber("");
      setMathSymbol(symbol);
    },
    [updatedNumber]
  );

  const handleEquals = useCallback(() => {
    let num1 = parseInt(firstNumber);
    let num2 = parseInt(updatedNumber);
    switch (mathSymbol) {
      case "+":
        setDisplayValue(num1 + num2);
        break;
      case "-":
        setDisplayValue(num1 - num2);
        break;
      case "*":
        setDisplayValue(num1 * num2);
        break;
      case "/":
        setDisplayValue(num1 / num2);
        break;
    }
  }, [firstNumber, updatedNumber, mathSymbol]);

  const handleClear = () => {
    setDisplayValue("");
    setMathSymbol("");
    setUpdatedNumber("");
    setFirstNumber("");
  };

  return (
    <div className="container">
      <div className="buttons-wrapper">
        <div className="display">{displayValue}</div>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((number) => (
          <button className="numbers" onClick={handleNumber.bind(this, number)}>
            {number}
          </button>
        ))}
        {["+", "-", "*", "/"].map((symbol) => (
          <button className="symbols" onClick={handleSymbol.bind(this, symbol)}>
            {symbol}
          </button>
        ))}
        <button className="symbols" onClick={handleEquals}>
          =
        </button>
        <button className="symbols" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
