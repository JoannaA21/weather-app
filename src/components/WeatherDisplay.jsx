import React from 'react';

export default function WeatherDisplay ({weatherData}) {

    //if no data 
    if(!weatherData){
        return <p>Please enter a city to see weather information.</p>
    }

    const {coord, weather, main, name, sys } = weatherData;
    const iconCode = weather[0].icon; // Extract the icon code from the API response
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`; // Construct the URL for the weather icon


    return(
        <>
            <div className="weather-info">
                <p className="city-name">{name.toUpperCase()}</p>
                <h1 className="temperature">{Math.ceil(main.temp - 273.15)}°C</h1> {/* Kelvin to Celcius: 288K − 273.15*/}
                <img src={iconUrl} alt={weather[0].description} className="weather-icon" />
                <p className="weather-description">{weather[0].description.toUpperCase()}</p>
                <p className="temp-range">H: {Math.ceil(main.temp_max - 273.15)}°C &nbsp; L: {Math.ceil(main.temp_min - 273.15)}°C</p>
            </div>
        </>
    )
}
