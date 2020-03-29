import React from "react"
import "./index.css"

function DetailFeed(props){
    return(
        <div className="detFeed">
            <h3 className="names">Name: {props.box1.name}</h3>
            <img className="pics" src={props.box1.imageURL} alt="Profile" />
            <h2 className="info">About me: {props.box1.details2}</h2>
            <br />
            <br />
        </div>
    )
}

export default DetailFeed