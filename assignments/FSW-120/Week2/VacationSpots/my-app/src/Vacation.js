import React from "react"

function Vacation (props) {
    return (
    <div>
        <h2 style={{textAlign: "center", textDecoration: "underline"}}>Place: {props.place}</h2>
        <h2 style={{textAlign: "center", color: "blue"}}>Price: {props.price}</h2>
        <h2 style={{textAlign: "center", color: "gray"}}>Time to go: {props.timeToGo}</h2>
    </div>
    )
}

export default Vacation