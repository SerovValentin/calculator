import { useState } from "react";
import "./App.css";

function App() {
  const allButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "C", "+", "-", "="];
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [display, setDisplay] = useState("");

  const concat = (operand1, operand2) => {
    return Number(operand1) + Number(operand2);
  };

  const substr = (operand1, operand2) => {
    return Number(operand1) - Number(operand2);
  };

  const calc = {
    "+": concat(operand1, operand2),
    "-": substr(operand1, operand2),
  };

  const reset = () => {
    setOperand1("");
    setOperand2("");
    setOperator("");
    setDisplay("");
  };

  const showResult = () => {
    const res = calc[operator];
    setDisplay(res);
  };

  const valueHandler = (el) => {
    if (operator === "") {
      setOperand1(operand1 + String(el));
    } else {
      setOperand2(operand2 + String(el));
    }
  };

  const operatorHandler = (el) => {
    if (el === "+") {
      setOperator("+");
    } else if (el === "-") {
      setOperator("-");
    } else if (el === "=") {
      showResult();
    } else {
      reset();
    }
  };

  return (
    <>
      <div className="calcBox">
        <div className="display">
          {display ? display : operand1 + operator + operand2}
        </div>
        <div className="commandPanel">
          <div className="inputPanel">
            {allButtons.map((el) => {
              if (typeof el === "number") {
                return (
                  <button
                    className="valueBtn"
                    key={el}
                    onClick={() => valueHandler(el)}
                  >
                    {el}
                  </button>
                );
              }
            })}
          </div>
          <div className="operationPanel">
            {allButtons.map((el) => {
              if (typeof el === "string") {
                return (
                  <button
                    className="operationBtn"
                    key={el}
                    onClick={() => operatorHandler(el)}
                  >
                    {el}
                  </button>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
