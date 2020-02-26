import React from "react"
import "./index.css"

function Vacation (props) {
    return (
    <div className="vacationDiv">
        <h2 style={{textAlign: "center", textDecoration: "underline"}}>Place: {props.place}</h2>
        <h2 style={{textAlign: "center", color: "darkred"}}>Price: {props.price}</h2>
        <h2 style={{textAlign: "center", color: "darkblue"}}>Time to go: {props.timeToGo}</h2>
    </div>
    )
}

export default Vacation