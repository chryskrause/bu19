import React from "react"
import { Link } from "react-router-dom"
import './App.css'

function Navbar(){
    return(
        <div className="navbar">
            <Link to="/" className="links">Home</Link>
            <Link to="/about" className="links">About</Link>
            <Link to="/services" className="links">Services</Link>
        </div>
    )
}

export default Navbar