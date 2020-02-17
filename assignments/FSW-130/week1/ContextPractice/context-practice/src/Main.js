import React from "react"
import ThemeContext from "./themeContext"

function Main () {
    return(
        <ThemeContext.Consumer>
            {theme =>
                <div className={theme + "-theme"}>
                    <h2>Content with React JS ({theme === "light" ? "Light" : "Dark"} Theme)</h2>
                    <img className="pic" src="https://raddevon.com/wp-content/uploads/2018/10/react.jpg" alt="React"/>
                </div>
            }
        </ThemeContext.Consumer>
    )
}

export default Main



