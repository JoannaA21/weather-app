import React, {useState} from 'react';

export default function SearchBar() {
    const [city, setCity] = useState('');

    function handleSearch({onSearch}) {
        if(city.trim() === "") {
            alert('Enter a city name');
        }else{
            onSearch(city);
        }
    }

    return(
        <>
            <input 
            type="text" 
            placeholder='Enter city name' 
            value={city} 
            onChange={(event) => setCity(event.target.value)} />
            <button type='button' onClick = {handleSearch}>Search</button>
        </>
    )
}
