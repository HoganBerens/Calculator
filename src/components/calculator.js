import React, { useCallback, useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [updatedNumber, setUpdatedNumber] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [mathSymbol, setMathSymbol] = useState("");
  const [displayValue, setDisplayValue] = useState("0");

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
        setUpdatedNumber(num1 + num2);
        break;
      case "-":
        setDisplayValue(num1 - num2);
        setUpdatedNumber(num1 - num2);
        break;
      case "*":
        setDisplayValue(num1 * num2);
        setUpdatedNumber(num1 * num2);
        break;
      case "/":
        setDisplayValue(num1 / num2);
        setUpdatedNumber(num1 / num2);
        break;
    }
  }, [firstNumber, displayValue, updatedNumber, mathSymbol]);

  const handleClear = () => {
    setDisplayValue("0");
    setMathSymbol("");
    setUpdatedNumber("");
    setFirstNumber("");
  };

  return (
    <div className="container">
      <div className="calculator-boundary">
        <div className="display">{displayValue}</div>
        <div className="buttons-wrapper">
          <div className="numbers-wrapper">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map(
              (number, index) => (
                <button
                  key={index}
                  className="numbers"
                  onClick={handleNumber.bind(this, number)}
                >
                  {number}
                </button>
              )
            )}
          </div>
          <div className="operator-wrapper">
            {["+", "-", "*", "/"].map((symbol, index) => (
              <button
                key={index}
                className="symbols"
                onClick={handleSymbol.bind(this, symbol)}
              >
                {symbol}
              </button>
            ))}
          </div>
        </div>
        <div className="special-symbols-container">
          <button className="clear" onClick={handleClear}>
            Clear
          </button>
          <button className="equals" onClick={handleEquals}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
