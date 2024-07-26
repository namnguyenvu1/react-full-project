import { useState } from "react";

function ObjectArray() {
    const[cars, setCars] = useState([]);
    const[carYear, setCarYear] = useState(new Date().getFullYear())
    const[carMake, setCarMake] = useState("")
    const[carModel, setCarModel] = useState("")


    function handleAddCar(){
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};

        setCars([...cars, newCar]);
        // setFoods(f => [...f, newFood]); Also fine
    }

    function handleRemoveCar(index){
        setCars(cars.filter((_, i) => i !== index));
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }

    function handleMakeChange(event){
        setCarMake(event.target.value);
    }

    function handleModelChange(event){
        setCarModel(event.target.value);   
    }

    return (<div>
        <h2>List of cars</h2>
        <ul>
            {cars.map((car, index) => 
            <li key={index} onClick={() => handleRemoveCar(index)}>
                {car.year} {car.make} {car.model}
            </li>)}
        </ul>
        <input type="number" id="carYear" placeholder="Enter car year" onChange={handleYearChange}></input>
        <input type="text" id="carMake" placeholder="Enter car make" onChange={handleMakeChange}></input>
        <input type="text" id="carModel" placeholder="Enter car model" onChange={handleModelChange}></input>
        <button onClick={handleAddCar}>Add car</button>
    </div>)
}

export default ObjectArray