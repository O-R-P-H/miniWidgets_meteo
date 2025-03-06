import React, { useState, useEffect } from 'react';
import { getWeatherApi } from "@/api/getWeatherApi.js";

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('Нижний Новгород');  // Можно задать город по умолчанию

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                console.log("Fetching weather for city:", city);
                const data = await getWeatherApi(city);
                console.log("Ответ:", data);
                setWeatherData(data);
            } catch (error) {
                console.error('Ошибка при получении погоды:', error);
            }
        };

        fetchWeather();
    }, [city]);

    const handleCityChange = (event) => {
        const newCity = event.target.value;
        console.log("City input changed to:", newCity);
        setCity(newCity);
    };

    return (
        <div>
            <h1>Погода в {city}</h1>
            <input type="text" value={city} onChange={handleCityChange} placeholder="Введите город" />
            {weatherData ? (
                <div>
                    <p>Температура: {weatherData.current.temp_c}°C</p>
                    <p>Условия: {weatherData.current.condition.text}</p>
                </div>
            ) : (
                <p>Загрузка...</p>
            )}
        </div>
    );
};

export default App;
