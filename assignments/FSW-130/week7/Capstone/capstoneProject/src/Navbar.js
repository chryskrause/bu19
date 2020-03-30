import React from "react"
import {Link} from "react-router-dom"
import './App.css';

function Navbar(){
    return(
        <div>
            <Link to="/">Your Things  </Link>
            <Link to="/beauty">Beautiful Things Ideas  </Link>
            <Link to="/ugly">Ugly Things Ideas  </Link>
        </div>
    )
}

export default Navbar