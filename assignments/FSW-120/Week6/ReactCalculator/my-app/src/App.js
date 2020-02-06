import React, {useState} from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [answer, setAnswer] = useState("")

  function add(){
    setAnswer(setAnswer => setNum1 + setNum2)
  }
  function subtract(){
    setAnswer(setNum1 - setNum2)
  }
  function multiply(){
    setAnswer(setNum1 * setNum2)
  }
  function divide(){
    setAnswer(setNum1 / setNum2)
  }
  function handleChange(){
    
  }

  return (
    <div>
      <form>
        <input
          type="text" 
          value={num1} 
          name="num1" 
          placeholder="First Number"
          onChange={handleChange} />
          <input
          type="text" 
          value={num2} 
          name="num2" 
          placeholder="Second Number"
          onChange={handleChange} />
          <button onClick={add}>Add</button>
          <button onClick={subtract}>Subtract</button>
          <button onClick={multiply}>Multiply</button>
          <button onClick={divide}>Divide</button>
      </form>
      <h1>{answer}</h1>
    </div>
  );
}

export default App;
