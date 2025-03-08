import React, { useState, useEffect } from "react";
import { getWeatherApi } from "@/api/getWeatherApi.js";

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city] = useState("Нижний Новгород"); // Теперь в useState

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await getWeatherApi(city);
                setWeatherData(data);
            } catch (error) {
                console.error("Ошибка при получении погоды:", error);
            }
        };

        fetchWeather();
    }, [city]); // city теперь в зависимостях

    return (
        <div className="widget-container">
            {weatherData ? (
                <>
                    <h1 className="city-name">{city}</h1>
                    <p className="country">{weatherData.location.country}</p>
                    <img
                        src={weatherData.current.condition.icon}
                        alt={weatherData.current.condition.text}
                        className="weather-icon"
                    />
                    <div className="temperature">{weatherData.current.temp_c}°</div>
                    <p className="weather-condition">{weatherData.current.condition.text}</p>
                    <div className="info-container">
                        <div className="info-box">
                            <p className="info-label">wind</p>
                            <p className="info-value">{weatherData.current.wind_kph} km/h</p>
                        </div>
                        <div className="info-box">
                            <p className="info-label">chance of rain</p>
                            <p className="info-value">{weatherData.current.humidity}%</p>
                        </div>
                        <div className="info-box">
                            <p className="info-label">humidity</p>
                            <p className="info-value">{weatherData.current.humidity}%</p>
                        </div>
                    </div>
                </>
            ) : (
                <p className="loading">Загрузка...</p>
            )}
        </div>
    );
};

export default App;
