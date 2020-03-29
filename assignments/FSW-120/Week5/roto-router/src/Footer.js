import React from "react"
import {Link} from "react-router-dom"
import "./App.css"

function Footer(){
    return(
        <div className="footer">
            <Link className="footLinks">Testimonials</Link>
            <Link className="footLinks">Our blog</Link>
            <Link className="footLinks">Photo gallery</Link>
        </div>
    )
}

export default Footer