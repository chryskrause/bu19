import React from "react"

function Animals (props){
    return(
        <div>
            <h1 className="names">Animal: {props.list.name}</h1>
            <img className="theAnimals" src={props.list.imageURL} alt="Animal Pictures" />
        </div>
    )
}

export default Animals