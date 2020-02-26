import React from "react"
// import {ThemeContextConsumer} from "./themeContext"

function Form () {
    return (
        <div>            
            <form name="todoform">
                <h3>Add your own Animal!</h3>
                    <input name="title" placeholder="Animal Name" />
                    <input name="animal-image" placeholder="Image URL" />
            <button>Submit</button>
            
            </form>
        </div>
    )
}

export default Form