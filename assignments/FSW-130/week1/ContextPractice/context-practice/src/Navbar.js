import React, {Component} from "react"
import ThemeContext from "./themeContext"


class Navbar extends Component {
    render(){
        const theme = this.context
    return(
        <h1 className={`${theme}-theme`}>
            <p className="navP">This is the Navbar!</p>
        </h1>
    )
}}

Navbar.contextType = ThemeContext

export default Navbar