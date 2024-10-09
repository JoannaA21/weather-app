import React, {useState} from 'react';

export default function SearchBar({ onSearch }) {
    const [city, setCity] = useState('');

    function handleSearch() {
        if(city.trim() === "") {
            alert('Enter a city name');
        }else{
            onSearch(city);
            setCity('');
        }
    }

    return(
        <>
            <div className="search-container">
                <input 
                type="text" 
                placeholder='Enter City Location' 
                value={city} 
                onChange={(event) => setCity(event.target.value)} 
                className='search'/>
                <button type='button' onClick = {handleSearch} className="btnSearch">Search</button>
            </div>
        </>
    )
}
