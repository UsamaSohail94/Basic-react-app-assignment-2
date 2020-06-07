import React from "react"

const Gate = (props) => {
    const gateStyle = {
        fontSize: 20,
        // color: "red",
        backgroundColor: "lightgreen",
        textAlign: "center"
    }
    const h1Style = {
        color: "blue"
    }
return (
    <div style={gateStyle}>
    <h1 style={h1Style}>{props.isOpen ? "The Gate is Open": "The Gate is Closed"} </h1> 
    Note: change props bool value
    </div>
)
}

export default Gate