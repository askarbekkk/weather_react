import React, {useState, useEffect} from "react";
import Weather from "./components/Weather";
import axios from "axios";

function App() {
    const [weather, setWeather] = useState({})
    const [city, setCity] = useState('')
    const [notFound, setNotFound] = useState(false)
    const getWeather = () => {

        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city || 'Dubai'}&units=metric&appid=6b4c292e3e049dbf64d6c2441cc77864`)
            .then(result => {
                setWeather(result.data)
                setNotFound(false)
            })
            .catch(() => setNotFound(true))

    }

    const handleClick = () => {
        getWeather()
        setCity('')
    }
    useEffect(() => {
        getWeather()
    }, [])
    console.log(weather)
    // if (weather.main === undefined){
    //     return 'Loading...'
    // }
    return (

        <div>
            {weather.main === undefined ? 'Loading' :
                <div>
                    <input type="text" value={city} onChange={(e => setCity(e.target.value))}/>
                    <button onClick={handleClick}>View</button>
                    {notFound && <div>Такой страны нет</div>}
                    {!notFound && <Weather weather={weather}/>}

                </div>
            }
        </div>
    )
}

export default App;
