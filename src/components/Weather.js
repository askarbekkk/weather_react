import React from 'react';

const Weather = ({weather}) => {
    return (
        <div>
            <div> Город: {weather.name}</div>
            <div> Температура: {weather.main.temp}</div>
         <div> Скорость  ветра: {weather.wind.speed}</div>
         <div> Влажность: {weather.main.humidity}</div>
         <div> Давление: {weather.main.pressure}</div>
        </div>
    );
};

export default Weather;
