import React from "react"
import {Link} from "react-router-dom"
import "./index.css"

function Navbar(props){
    return (
        <div className="nav">
            <Link className="navItem" to="/">Home</Link>
            <Link className="navItem" to="/about">About</Link>
            <Link className="navItem" to="/contact">Contact Us</Link>
            <Link className="navItem" to="/detail">Full Detail Page</Link>
        </div>
    )
}

export default Navbar