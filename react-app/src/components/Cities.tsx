import { useState } from "react";
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
        </div>
    )

}

export default Cities
