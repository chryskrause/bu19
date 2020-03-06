import React from "react"

class DiceBox extends React.Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
// diceRoll = Math.floor(Math.random() * 6)
handleClick(){
    this.setState(prevState => {
        return{
            num1: prevState.num1 + (Math.floor(Math.random() * 6)),
            num2: prevState.num2 + (Math.floor(Math.random() * 6)),
            num3: prevState.num3 + (Math.floor(Math.random() * 6)),
            num4: prevState.num4 + (Math.floor(Math.random() * 6)),
            num5: prevState.num5 + (Math.floor(Math.random() * 6))
        }
    })
}

render(){
    return(
        <div>
            {this.state.num1}<br></br>
            {this.state.num2}<br></br>
            {this.state.num3}<br></br>
            {this.state.num4}<br></br>
            {this.state.num5}<br></br>
            <button onClick={this.handleClick}>Roll!</button>
        </div>
    )
}
}

export default DiceBox
