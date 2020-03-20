import React from 'react';
import './App.css';
// import { render } from 'react-dom';
// import allNames from "./allNames"
// import Names from "./Names"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      fullName: "",
      namesList: ["Leslie Knope,", " Bobby Newport, "]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }


handleChange(event){
  event.preventDefault()
  const {name, value} = event.target
  this.setState({
    [name]: value  
  })
}

// handleClick = () => {
//   this.setState(prevState => {
//     return
//     {
//     namesList: [...prevState.namesList, this.state.fullName]
//   }})
// }

handleClick = (e) => {
  e.preventDefault()
  this.setState(prevState => {
    return {
      namesList: [...prevState.namesList, this.state.fullName]
    }
  })
}

// handleClick(e){
//   e.preventDefault()
//   this.setState(prevState => {
//     return{
//       namesList: [...prevState.namesList, {fullName}]
//     }
//   })
// }

  render(){
    const {fullName} = this.state
    return (
      <form>
        <input
          type="text" 
          value={fullName} 
          name="fullName" 
          placeholder="First and Last Name" 
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add Name</button>
        <br />
        {/* {allNames.map(list => <Names key={list.id} list={list} />)} */}
    <h1>{this.state.namesList}</h1>
        {/* <h1>{fullName}</h1> */}
      </form>
  )
}}

export default App

// Now, build a simple react app with an input box, an <h1>, a button, and an ordered list. The user will type names into the input box.
// When the user types in the input box, the <h1> should update to show the same text as the input box.
// When the user clicks the button, the value of the input box should be added to a running list of names that have been previous entered.
//  (Hint: you'll need to set state and map over an array to do this).
