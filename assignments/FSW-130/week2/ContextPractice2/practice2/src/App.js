import React from 'react'
import Animals from "./Animals.js"
import animalList from "./animalList"
// import logo from './logo.svg';
// import './App.css'
// import Form from "./Form"
import {ThemeContextConsumer} from "./themeContext"

class App extends React.Component {

  state = {
    newAnimal: ""
  }

// handleChange() {
//   this.setState(prevState => {
//     return {
//       newAnimal: prevState.newAnimal.value
//     }
//   })
// }

  handleChange = (e) => {
    e.preventDefault()
    const {name, value} = e.target 
    this.setState({[name]: value})
  }

  render(){
  const allAnimals = animalList.map(list => <Animals key={list.id} list={list} />)
  return (
    <div>
      <ThemeContextConsumer>
                {({animal, changeAnimal}) => (
                    <form name="todoform">
                        <h3>Add your own Animal! Just choose a name and we will add a pic later!</h3>
                        <p>The animal you've chosen: {animal}!  Check back later for picture!</p>
                        <input 
                            type="text"
                            name="newAnimal" 
                            placeholder="Animal Name" 
                            value={this.state.newAnimal}
                            onChange={this.handleChange}
                            />
                            {/* <button onClick={this.handleChange}>Submit</button> */}
                        <button onClick={() => changeAnimal(this.state.newAnimal)}>Submit</button>            
                    </form>
                )}   
            </ThemeContextConsumer>
      {allAnimals}
    </div>
  )
}}

export default App


