import React, { useState } from "react";
// import "./App.css";

function Divide(props) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState(props.operator);
  const [answer, setAnswer] = useState(0);

  let compute = () => {
    let numbers = parseInt(num1) / parseInt(num2);
    setAnswer(numbers);
  };
  const handleChange = event => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "num1") {
      setNum1(val);
    }
    if (nam === "operator") {
      setOperator(val);
    }
    if (nam === "num2") {
      setNum2(val);
    }
    if (nam === "equal") {
    }
  };
  return (
    <div>
      <div>
        <input type="number" value={num1} name="num1" onChange={handleChange} />

        <div className="operator">{operator} </div>

        <input type="number" value={num2} name="num2" onChange={handleChange} />
      </div>
      <button className="equal" name="equal" onClick={compute}>
        =
      </button>
      <div className="output">{answer}</div>
    </div>
  );
}

export default Divide;