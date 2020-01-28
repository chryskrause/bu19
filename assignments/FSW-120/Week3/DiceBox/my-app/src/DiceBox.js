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
    }
diceRoll = Math.floor(Math.random() * 6)

render(){
    return(
        <div>
            {this.diceroll}
            <button>Roll!</button>
        </div>
    )
}
}

export default DiceBox