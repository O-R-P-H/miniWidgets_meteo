import axios from "axios";

const defaultAxiosInstanse = axios.create({
    baseURL: "http://api.weatherapi.com/v1/",
    headers: {
        "Content-Type": "application/json",
    },
});
defaultAxiosInstanse.interceptors.request.use(
    (config) => {
        console.log("Request",config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
defaultAxiosInstanse.interceptors.request.use(
    (response) => {
        console.log("Request",response);
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
)
export default defaultAxiosInstanse;
