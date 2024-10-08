import { useState, useEffect } from 'react'
import {fetchData} from './api/FetchData'
import SearchBar from './components/SearchBar'
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState(null)


  useEffect(() =>{
    const getData = async() => {
      try{
        const response = await fetchData(city);
        console.log(response)
        setData(response);
      }catch(error){
        setError('Failed to fetch data');
        setData(null);
      }
    };

    getData();
  }, [city]);


  const handleSearch = (cityName) => {
    if(cityName.trim === ("")) {
      setError('Please enter a valid city.');
    }else{
      setCity(cityName);
      setError(null);
    }
  }


  return (
    <>
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch}/>
      <WeatherDisplay weatherData={data}/>
      </div>
    </>
  )
}

export default App