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

handleClick = (e) => {
  e.preventDefault()
  this.setState(prevState => {
    return {
      namesList: [...prevState.namesList, this.state.fullName]
    }
  })
}



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


