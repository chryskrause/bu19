import React from 'react';
import './App.css';
// import { render } from 'react-dom';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      allNames: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }


handleChange(event){
  this.setState({
    [event.target.name]: event.target.value    
  })
}

handleClick(){
     
  )
}
  render(){
    return (
      <form>
        <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange}/>
        <br />
        <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
        <br />
        <button onClick={this.handleClick}>Add Name</button>
        <br />
        <h1> {this.state.firstName} {this.state.lastName}</h1>
        <p></p>
      </form>
  )
}}

export default App

// Now, build a simple react app with an input box, an <h1>, a button, and an ordered list. The user will type names into the input box.
// When the user types in the input box, the <h1> should update to show the same text as the input box.
// When the user clicks the button, the value of the input box should be added to a running list of names that have been previous entered.
//  (Hint: you'll need to set state and map over an array to do this).
