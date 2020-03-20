import React from "react"
import { ThemeContextConsumer } from "./themeContext"

class Form extends React.Component {
    state = {
        yourTitle: "",
        yourNewImg: "",
        yourDescription: ""
    }

    handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    changeUgly = (title, image, description, e) => {
        e.preventDefault()
        this.setState(prevState => {
            return{
              uglyThingRender: [...prevState, {yourTitle: title, yourNewImg: image, yourDescription: description}]  
            }
        })
    }

    render(){
        const {uglyThingRender} = this.state
        return(
            <ThemeContextConsumer>
                {({changeUgly}) => (
        <div>
            <form name="uglyForm">
                <h3>Add your own ugly thing!! Add your selection in the input forms!</h3>
                <input 
                    type="text"
                    name="yourTitle"
                    placeholder="Title"
                    value={this.state.yourTitle}
                    onChange={this.handleChange}
                    />
                <input 
                    type="text"
                    name="yourNewImg"
                    placeholder="Image URL"
                    value={this.state.yourNewImg}
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    name="yourDescription"
                    placeholder="Description"
                    value={this.state.yourDescription}
                    onChange={this.handleChange}                
                />
                <br />
                <button onClick={(e) => changeUgly(this.state.yourTitle, this.state.yourNewImg, this.state.yourDescription, e)}>Submit</button>
            </form>
            {uglyThingRender}
        </div>
            )}
            </ThemeContextConsumer>
        )
    }
}

export default Form