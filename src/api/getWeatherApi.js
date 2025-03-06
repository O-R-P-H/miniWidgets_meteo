import DefaultAxiosInstanse from "@/api/DefaultAxiosInstanse.js";

export const getWeatherApi = async (city) => {
    try {
        const response = await DefaultAxiosInstanse.get('current.json', {
            params: {
                key: 'ecb9e8da83e74c94b3c232555250503',  // API-ключ
                q: city.trim(),  // Просто передаем город без encodeURIComponent()
                lang: 'ru',
                aqi: 'no',
            },
        });

        if (!response.data || !response.data.current) {
            throw new Error("Invalid API response: " + JSON.stringify(response.data));
        }

        return response.data;
    } catch (error) {
        console.error('Ошибка при получении данных о погоде:', error);
        if (error.response) {
            console.error('Ошибка ответа API:', error.response.data);
        } else if (error.request) {
            console.error('Ошибка запроса:', error.request);
        } else {
            console.error('Общая ошибка:', error.message);
        }
        throw error;
    }
};
