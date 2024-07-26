import { useState } from "react";

function Array() {
    const[foods, setFoods] = useState(["Austin", "Honolulu", "Perth"])

    function handleAddCity(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods([...foods, newFood]);
        // setFoods(f => [...f, newFood]); Also fine
    }

    function handleRemoveCity(index){
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (<div>
        <h2>List of cities</h2>
        <ul>
            {foods.map((food, index) => 
            <li key={index} onClick={() => handleRemoveCity(index)}>
                {food}
            </li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter city"></input>
        <button onClick={handleAddCity}>Add city</button>
    </div>)
}

export default Array