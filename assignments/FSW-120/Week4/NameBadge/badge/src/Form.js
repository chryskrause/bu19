import React from "react"
// import Badge from "./Badge"

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            aboutYou: "",
            badgeArray: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event){
        event.preventDefault()
        const {name, value} = event.target
        this.setState({
          [name]: value  
        })
      }

    handleClick = (event) => {
        event.preventDefault()
        this.setState(prevState =>{
        const newBadge = {main: `Number ${prevState.badgeArray.length + 1}:`, firstName: prevState.firstName, lastName: prevState.lastName, email: prevState.email, placeOfBirth: prevState.placeOfBirth, phone: prevState.phone, favoriteFood: prevState.favoriteFood}
        return{
            badgeArray: [...prevState.badgeArray, newBadge]
        }
    })}

    render(){
        return(
            <div>
                <form>
                    <input 
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={this.firstName}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.lastName}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        value={this.email}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="placeOfBirth"
                        placeholder="Place of Birth"
                        value={this.placeOfBirth}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={this.phone}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="favoriteFood"
                        placeholder="Favorite Food"
                        value={this.favoriteFood}
                        onChange={this.handleChange}
                    />
                    <textarea  
                        type="text" 
                        name="aboutYou" 
                        value={this.aboutYou} 
                        onClick={this.handleChange} 
                        rows="5" cols="100" 
                        placeholder="Tell us about you!" 
                    />
                    <br />
                    <button onClick={this.handleClick}>Submit</button>                                                                                                    
                </form>
                <hr></hr>
                {this.state.badgeArray.map(badge => {return(<div className="badgeForm">
                    <h1>{badge.main}</h1>
                    <h3>First Name: {badge.firstName}</h3>
                    <h3>Last Name: {badge.lastName}</h3>
                    <h3>Email Address: {badge.email}</h3>
                    <h3>Birthplace: {badge.placeOfBirth}</h3>
                    <h3>Phone Number: {badge.phone}</h3>
                    <h3>Favorite Food: {badge.favoriteFood}</h3>
                    <h2>About You: {badge.aboutYou}</h2>
                </div>)})}
            </div>
        )
    }
}

export default Form