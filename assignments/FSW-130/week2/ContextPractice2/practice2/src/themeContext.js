import React from "react"
import animalList from "./animalList"

const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends React.Component {
    state = {
        animal: "(Your Animal name will show up here)",
        animalArray: animalList
    }

        changeAnimal = (animal, image, e) => {
            e.preventDefault()
            this.setState({animal})
            this.setState(prevState => {
                console.log(prevState.animalArray[prevState.animalArray.length-1])
                console.log(image)
                console.log(prevState.animalArray.length)
                return {
                    animalArray: [...prevState.animalArray, {name: animal, id: prevState.animalArray.length+1, imageURL: image}]
                }
            })
        }

    render(){
        const {animal} = this.state
        const {animalArray} = this.state
        return (
            <Provider value={{animal, animalArray, changeAnimal: this.changeAnimal}}>
                {this.props.children}
            </Provider>

        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}