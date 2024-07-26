import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Cities = () => {
    const [inputs, setInputs] = useState({
        cities_name:"",
        cities_rate:""
    })

    const[successMessage, setSuccessMessage] = useState(null);
    const[errorMessage, setErrorMessage] = useState(null);

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    const handleToMain = () => {
        navigate("/");
    }

    const handleSubmit = async e => {
        console.log(inputs)
        try{
            const res = await axios.post("http://localhost:8800/api/cities/addCities", inputs)
            console.log(res.data)
        } catch (err){
            console.log(err)
        }
    }

    return (
        <div className='auth'>
            <h1>Add cities</h1>
            <form>
                <input type='text' placeholder='cities_name' name='cities_name' autoComplete='off' onChange={handleChange}/>
                <input type='text' placeholder='cities_rate' name='cities_rate' autoComplete='off' onChange={handleChange}/>
                <button type='button' onClick={handleSubmit}>Add City</button>
                {errorMessage && <p>{errorMessage}</p>}
                {successMessage && <p>{successMessage}</p>}
            </form>

            {/* Display all cities */}
            <CityList />

            {/* Search a city */}
            <SearchACity />
        </div>
    )

}

const CityList = () => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        // Fetch all cities from the server
        const fetchCities = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/cities/getAllCity");
                setCities(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchCities();
    }, []);

    return (
        <div>
            <h1>All Cities</h1>
            <ul>
                {cities.map(city => (
                    <li key={city.cities_id}>
                        {city.cities_name} - {city.cities_rate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const SearchACity = () => {
    // Get input to search
    const [cities, searchCitiesInput] = useState({
        // Add info
        cities_id:""
    })

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    // Display output
    const [citiesOutput, searchCitiesOutput] = useState([]);

    const handleChange = e =>{
        searchCitiesInput(prev=>({...prev, [e.target.name]: e.target.value}))
    }


    const searchAProduct = async e => {
        console.log(cities)
        try{
            const res = await axios.post("http://localhost:8800/api/cities/searchACity",cities)
            console.log(res.data)
            searchCitiesOutput(res.data);
            setSuccessMessage(res.data.success);
        }catch(err){
            console.log(err);
            setErrorMessage(err.message);
        }
    }

    return (
        <div>
            <h1>Search A City</h1>
            <form>
                <input type='text' placeholder='cities_id' name='cities_id' autoComplete='off' onChange={handleChange} />
                <button type='button' onClick={searchAProduct}>Search a city</button>
                {errorMessage && <p>{errorMessage}</p>}
                {successMessage && <p>{successMessage}</p>}
            </form>
            <ul>
                {citiesOutput.map(cities => (
                    <li key={cities.cities_id}>
                        {cities.cities_name} - {cities.cities_rate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cities
