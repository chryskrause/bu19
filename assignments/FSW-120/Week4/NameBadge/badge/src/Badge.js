import React from "react"
// import Form from "./Form"

function Badge(props){
    return(
        <div>
            <h3>First Name: {this.state.firstName}</h3>
            <h3>Last Name: {this.state.lastName}</h3>
            <h3>Email Address: {this.state.email}</h3>
            <h3>Birthplace: {this.state.placeOfBirth}</h3>
            <h3>Phone Number: {this.state.phone}</h3>
            <h3>Favorite Food: {this.state.favoriteFood}</h3>
        </div>
    )
}

export default Badge