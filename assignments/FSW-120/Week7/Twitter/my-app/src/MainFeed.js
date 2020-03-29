import React from "react"
import "./index.css"

function MainFeed(props){
    return(
        <div className="homeFeed">
            <h3 className="names">Name: {props.box.name}</h3>
            <img className="pics" src={props.box.imageURL} alt="Profile" />
            <h2 className="info">About me: {props.box.details}</h2>
            <br />
            <br />
        </div>
    )
}

export default MainFeed