import React from "react"
import feed from "./feed"
import DetailFeed from "./DetailFeed"

function Detail (){
    const detailFeed = feed.map(box1 => <DetailFeed key={box1.id} box1={box1}/>)
    return(
        <div>
            {detailFeed}
        </div>
    )
}

export default Detail