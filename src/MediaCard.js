import React from "react"

const MediaCard = ({title, body, imgURL}) => {
    return (
        <div className ="Media">
        <h1 >Media Card</h1>
        <span>Title :{title}</span>
        <p>Body: <strong>{body}</strong></p>
        <img src={imgURL} alt="cat image"/>
        
        </div>
        )
}

export default MediaCard