import React, { useState } from 'react'

function Input(){
    let [name, setName] = useState();

    function handleNameChange(event){
        setName(event.target.value);
    }

  return (
    <div>
        <h3>Enter your city</h3>
        <input value={name} onChange={handleNameChange}></input>
        <p>Selected: {name}</p>
        <button>Select</button>
    </div>
  )
}

export default Input