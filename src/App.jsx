import { useState, useEffect } from 'react'
import {fetchData} from './api/FetchData'
import SearchBar from './components/SearchBar'

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState(null)


  useEffect(() =>{

    const getData = async() => {
      try{
        const response = await fetchData('calgary');
        setData(response);
      }catch(error){
      setError('Failed to fetch data');
      }
    };

    getData();
  });

  return (
    <>
    <h1>Weather App</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Display the data in a readable format
      ) : (
        <p>Loading...</p> // Show a loading message while data is being fetched
      )}
    </>
  )
}

export default App



// In App.js:
// Use React state to store the error message.
// If the API call fails, store the error message in the state.
// Conditionally render an error message below the search bar if the state indicates an error.
// Handle cases when the input is empty before making an API request (e.g., show a message prompting the user to enter a city).
