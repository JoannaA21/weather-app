import axios from 'axios';


export async function fetchData(city) {
    const apiKey = '96ab653288c0a882887fa1fb7eac9c85'
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        return response.data
    }catch(error){
        console.log(error.message);
    }
}