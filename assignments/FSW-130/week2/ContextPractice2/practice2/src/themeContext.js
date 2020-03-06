import React from "react"

const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends React.Component {
    state = {
        animal: "(Your Animal name will show up here)"
    }

        changeAnimal = (animal) => {
            this.setState({animal})
        }

    render(){
        const {animal} = this.state
        return (
            <Provider value={{animal, changeAnimal: this.changeAnimal}}>
                {this.props.children}
            </Provider>

        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}