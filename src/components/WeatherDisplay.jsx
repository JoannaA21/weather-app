import React from 'react';

export default function WeatherDisplay ({weatherData}) {

    if(!weatherData){
        return <p>Please enter a city to see weather information.</p>
    }

    const {coord, weather, main, name, sys } = weatherData;

    return(
        <>
            <h1>{name}</h1>
            <h2>{Math.ceil(main.temp - 273.15)}°C</h2> {/* Kelvin to Celcius: 288K − 273.15*/}
            <p>{weather.description}</p>
            <p>H: {Math.ceil(main.temp_max - 273.15)}°C &nbsp; L: {Math.ceil(main.temp_max - 273.15)}°C</p>
        </>
    )
}
