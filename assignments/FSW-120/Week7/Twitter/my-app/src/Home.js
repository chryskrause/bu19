import React from "react"
import feed from "./feed"
import MainFeed from "./MainFeed"

function Home (){
    const {feeds, updateFeed} = setState{feed}
    const homeFeed = feed.map(box => <MainFeed key={box.id} box={box}/>)
    return(
        <div>
            {homeFeed}
            <h1>Would you like to build an account with us?  Just enter your information below!</h1>
            <h3>Name: </h3><input />
            <h3>Give us a picture of yourself</h3><a href="">Upload</a>
            <h3>Give us a bit of information about you: </h3><textarea />
            <button>Submit</button>
        </div>
    )
}

export default Home