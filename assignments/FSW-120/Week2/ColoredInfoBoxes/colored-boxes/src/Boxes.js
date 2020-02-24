import React from "react"

function Boxes (props){
    return (
        <div style={props.style}>
            <h1>{props.Title}</h1>
            <h3>{props.Subtitle}</h3>
            <p>{props.Information}</p>

        </div>
    )
}

export default Boxes