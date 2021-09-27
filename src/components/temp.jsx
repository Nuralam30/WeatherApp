import React, { useState, useEffect } from 'react';
import './css/style.css';

function Temp(){

    const [ city, setCity ] = useState(null);
    const [ search, setSearch ] = useState("Dhaka");
    
    useEffect( () =>{
        const fetchApi = async() =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ search }&units=metric&appid=1aebcd5d35eded95821cecfb9e318bb2`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search]);

    return(
        <>
            <div className="temp-box">
                <div className="searchBox">
                    <input type="search" 
                    value= {search}
                    placeholder="Enter City Name" 
                    className="inputField" 
                    onChange={ (e) =>{ setSearch(e.target.value)}}/>
                </div>


                <div className="cloud cloud_one">
                     <i className="fas fa-cloud"></i>
                </div>
                <div className="cloud cloud_two">
                    <i className="fas fa-cloud"></i>
                </div>
                <div className="cloud cloud_three">
                    <i className="fas fa-cloud"></i>
                </div>

                <div className="cloud cloud_four">
                    <i className="fas fa-cloud"></i>
                </div>
                <div className="cloud cloud_five">
                    <i className="fas fa-cloud"></i>
                </div>
                <div className="cloud cloud_six">
                    <i className="fas fa-cloud"></i>
                </div>
                <div className="cloud cloud_seven">
                    <i className="fas fa-cloud"></i>
                </div>
                <div className="cloud cloud_eight">
                    <i className="fas fa-cloud"></i>
                </div>

                {!city ? 

                <p>No Data Found</p> :

                <div className='info'>
                    <h1 className="location">
                    <i className="fas fa-cloud-sun-rain"></i>
                        { search }
                    </h1>
                    <h2 className="temp">{city.temp}°Cel</h2>

                    <h3 className="maxTemp_minTemp"> Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel</h3>
                </div>
                }

            </div>
        </>
    );
}

export default Temp;