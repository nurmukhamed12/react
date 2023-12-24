import React, { Component } from "react";


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      result: 0,
    };
  }

  handleNum1Change = (e) => {
    this.setState({ num1: e.target.value });
  };

  handleNum2Change = (e) => {
    this.setState({ num2: e.target.value });
  };

  plus = () => {
    const { num1, num2 } = this.state;
    this.setState({ result: Number(num1) + Number(num2) });
  };

  minus = () => {
    const { num1, num2 } = this.state;
    this.setState({ result: Number(num1) - Number(num2) });
  };

  multiply = () => {
    const { num1, num2 } = this.state;
    this.setState({ result: Number(num1) * Number(num2) });
  };

  divide = () => {
    const { num1, num2 } = this.state;
    this.setState({ result: Number(num1) / Number(num2) });
  };

  power = () => {
    const { num1, num2 } = this.state;
    this.setState({ result: Math.pow(Number(num1), Number(num2)) });
  };

  squareRoot = () => {
    const { num1 } = this.state;
    this.setState({ result: Math.sqrt(Number(num1)) });
  };

  render() {
    const { num1, num2, result } = this.state;

    return (
      <div className="calc">
        <div>
          <div className="nums">
            <input
              type="text"
              className="input"
              value={num1}
              onChange={this.handleNum1Change}
            />
            <input
              type="text"
              className="input"
              value={num2}
              onChange={this.handleNum2Change}
            />
          </div>
          <div className="operations">
            <button className="btn" onClick={this.plus}>
              +
            </button>
            <button className="btn" onClick={this.minus}>
              -
            </button>
            <button className="btn" onClick={this.multiply}>
              *
            </button>
            <button className="btn" onClick={this.divide}>
              /
            </button>
            <button className="btn" onClick={this.power}>
              ^ 
            </button>
            <button className="btn" onClick={this.squareRoot}>
              √ 
            </button>
          </div>
        </div>
        <div className="answer">
          <h1>{result}</h1>
        </div>
      </div>
    );
  }
}

export default Calculator;
