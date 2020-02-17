import React from "react"
import ThemeContext from "./themeContext"

function Footer (){
    return(
        <ThemeContext.Consumer>
            {theme => 
             <h4 className={`${theme}-theme`}>Home</h4> 
            }      
             
        </ThemeContext.Consumer>        
    )
}

export default Footer