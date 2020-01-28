import React, {Component} from 'react';
// import './App.css';
import "./index.css";
import Boxes from "./Boxes"

class App extends Component{
  constructor(){
    super()
    this.state={
      div1: "boxContainer",
      div2: Boxes
    }
  }
y
handleClick(){
 return this.state.div2
}
  render(){
  return (
    <div className={this.state.div1}>
      <Boxes />
      <Boxes />
      <Boxes />
      <Boxes />
      <button onClick={this.handleClick}>Click for color</button>
    </div>
  )
}
}

export default App;

//BEFORE SETSTATE


    // function blackWhite(){
    //   const colors = Math.floor(Math.random() * 2)
    //   if (colors === 0){
    //     return this.state.whiteBox
    //   } else if(colors === 1){
    //     return this.state.blackBox
    //   }

    // <div className={this.state.divs}>DJ React</div>
    // <div className={this.state.divs}>DJ React</div>
    // <div className={this.state.divs}>DJ React</div>
    // <div className={this.state.divs}>DJ React</div>