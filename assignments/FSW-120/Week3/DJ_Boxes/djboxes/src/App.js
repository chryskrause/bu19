import React from 'react';
import "./index.css"
// import logo from './logo.svg';
// import './App.css';
// import Box from "./Box"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      boxStyle: "box1"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      boxStyle: "box2"
    })
  }

  render(){
    return (
      <div className="boxes">
        <div className={this.state.boxStyle}>DJ React</div>
        <div className={this.state.boxStyle}>DJ React</div>
        <div className={this.state.boxStyle}>DJ React</div>
        <div className={this.state.boxStyle}>DJ React</div>

      <button onClick={this.handleClick}>Switch color</button>
      </div>
    );
  }}


export default App;
