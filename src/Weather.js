import React from "react";
import axios from 'axios';

export default function Weather (props) {
    let apiKey = `29a44231d6c7563fcc1740ef29d751ed`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    function handleResponse (response){
        alert(`It is currently ${response.data.main.temp} °C in ${response.data.name}`);
    }
    axios.get(apiUrl).then(handleResponse);
    return (
        <h2>Hello from weather!</h2>
    );
}