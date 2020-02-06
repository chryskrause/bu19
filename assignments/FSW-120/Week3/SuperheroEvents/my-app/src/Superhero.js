import React from "react"
import './index.css';

function Superhero(props){
    return(
        <div className="superhero-stuff">
            <h1 className="name1">Name: {props.list.name} </h1>
            <h3 className="show2">Show: {props.list.show} </h3>
            <h5 className="phrase">Catch Phrase:  "{props.list.catchPhrase}" </h5>
            <img className="heropics" src={props.list.imageName} alt="Superhero images"/>
        </div>
    )
}

export default Superhero

