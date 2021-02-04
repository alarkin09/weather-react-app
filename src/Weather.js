import React from "react";
import axios from 'axios';

import './Weather.css';

export default function Weather() {
  let weatherData = {
    city: "San Francisco",
    temperature: 11,
    date: "Friday",
    time: "9:00",
    description: "Rain",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/rain.png",
    humidity: 82,
    wind: 21
  };

  return (
    <div className="weather-app">
      <div className="weather-app-wrapper">
        <div className="row">
          <div className="col-6">
            <form>
              <div className="row">
                <div className="col-8">
                  <input
                    type="search"
                    placeholder="Enter city name"
                    className="form-control"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul className="current-date">
              <li>
                <strong>Last updated: </strong>
                <span>
                  {weatherData.date} {weatherData.time}
                </span>
              </li>
              <li className="description">{weatherData.description}</li>
            </ul>
            <div className="current-temperature">
              <img src={weatherData.imgUrl} alt={weatherData.description} />
              <strong>{weatherData.temperature} </strong>
              <span className="unit">
                <a href="/" className="active">
                  °C
                </a>{" "}
                /<a href="/">°F</a>
              </span>
            </div>
            <ul className="current-stats">
              <li>
                <strong>Humidity</strong> <span>{weatherData.humidity}</span>%
              </li>
              <li>
                <strong>Wind</strong> <span>{weatherData.wind}</span> Km/H
              </li>
            </ul>
          </div>
          <div className="row weather-forecast"></div>
        </div>
      </div>
      <div className="source-code">
        <small>
          <a
            href="https://github.com/alarkin09/final-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>
          by Allyson Larkin
        </small>
      </div>
    </div>
  );
}