import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        animal: "",
        imageURL: ""
    }
//event.target.value

    render(){
        return(
            <ThemeContextProvider value={{animal: event.target.value, imageURL: event.target.value}}>
                {this.props.children}
            </ThemeContextProvider>

        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}