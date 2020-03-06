import React from "react"
import {ThemeContextConsumer} from "./themeContext"

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            newAnimal: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name] : value})
        }

    render(){
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
        </div>
    )
}}

export default Form

      {/* <Form />
      <ThemeContextConsumer>
        {({animal}) => (
          <p>The animal you've chosen: {animal}!  Check back later for picture!</p>
        )}
      </ThemeContextConsumer> */}