import React from "react"
import { ThemeContextConsumer } from "./themeContext"

class YourForm extends React.Component {
    constructor(){
        super()
        this.state = {
        yourTitle: "",
        yourNewImg: "",
        yourDescription: "",
        uglyIdeas: ["Your choices: "]
    }
    this.handleChange = this.handleChange.bind(this)
    this.changeUgly = this.changeUgly.bind(this)
}

    handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({[name]: value
        })
    }

    changeUgly = (event) => {
        event.preventDefault()
        this.setState(prevState => {
            return{
                uglyIdeas: [...prevState.uglyIdeas,<br />, this.state.yourTitle,<br />, this.state.yourDescription,<br />, <img src={this.state.yourNewImg} alt="" />]
                
            }

        })

    }



    render(){
        return(
            <ThemeContextConsumer>
                {({changeUgly}) => (
        <div>
            <form name="uglyForm">
                <h3>Create your own webpage! Just choose a title, image URL and description, and it will appear here.  Use links in the Navigation bar for examples!</h3>
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
                {/* <button onClick={(e) => changeUgly(this.state.yourTitle, this.state.yourNewImg, this.state.yourDescription, e)}>Submit</button> */}
                <button onClick={this.changeUgly}>Submit</button>
            </form>
                <h1>{this.state.uglyIdeas}</h1>                
        </div>
            )}
            </ThemeContextConsumer>
        )
    }
}

export default YourForm