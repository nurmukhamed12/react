import { useState } from "react";
import Table from "./Table";
import axios from "axios";
import "./Style.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const plus = () => {
    setResult(Number(num1) + Number(num2));
  };

  const minus = () => {
    setResult(Number(num1) - Number(num2));
  };

  const multiplay = () => {
    setResult(Number(num1) * Number(num2));
  };

  const divide = () => {
    setResult(Number(num1) / Number(num2));
  };

  const power = () => {
    setResult(Math.pow(Number(num1), Number(num2)));
  };

  return (
    <div className="calc">
      <div>
        <div className="nums">
          <input
            type="text"
            className="input"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <input
            type="text"
            className="input"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <div className="operations">
          <button className="btn" onClick={plus}>
            +
          </button>
          <button className="btn" onClick={minus}>
            -
          </button>
          <button className="btn" onClick={multiplay}>
            *
          </button>
          <button className="btn" onClick={divide}>
            /
          </button>
          <button className="btn" onClick={power}>
            ^ (Power)
          </button>
        </div>
      </div>
      <div className="answer">
        <h1>{result}</h1>
      </div>
    </div>
  );
}

export default App;


