import React from "react"
import "./App.css"

function Home(){
    return(
        <div>
            <div className="homeTop">
            <h1 className="welcome">Welcome to React Plumbing!</h1><br /><br />
            <img src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Plumbing1" />
            <img src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Plumbing2" />
            <img src="https://images.unsplash.com/photo-1521207418485-99c705420785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Plumbing3" />
            <br /> <br />
            </div>
            <hr></hr>
            <div className="homeBottom">
                <h2>For all of your plumbing needs!</h2>
                <p>React Plumbing is proud to announce that we are now American Standard’s flagship dealer in the Unites States! You can rest easy knowing your home will be comfortable year round with high-quality, dependable and affordable heating and air conditioning solutions.</p>
                <p>React Plumbing is here to provide services to you from Washington down to Florida!  We are everywhere! Our services are both professional and guaranteed. So when life unexpectedly gives you pesky plubming issues, call us for your plumbing, heating and air conditioning needs!</p>
            </div>
        </div>
    )
}

export default Home