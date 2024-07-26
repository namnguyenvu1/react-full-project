import React from 'react'

function Button(){
    const handleClick = () => console.log("Ouch");
    return(<button onClick={handleClick}>Click me =)</button>)
}

export default Button