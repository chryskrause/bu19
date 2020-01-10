import React from "react"

function BoxInfo(props) {
    console.log(props)
    return (
        <div>
            <h1 style={{backgroundColor: "lightgreen"}}>{props.contact.name}</h1>
            <h3>{props.contact.subtitle}</h3>
            <p style={{backgroundColor: "lightgray"}}>{props.contact.information}</p>
        </div>
    )
}

export default BoxInfo