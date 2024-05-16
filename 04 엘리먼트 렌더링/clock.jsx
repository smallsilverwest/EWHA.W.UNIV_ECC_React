import React from "react";

function Clock(props) {
    return (
        <div>
            <h1> HI, react! </h1>
            <h2> Clock: {new Date().toLocaleTimeString()} </h2>
        </div>
    )
}

export default Clock;