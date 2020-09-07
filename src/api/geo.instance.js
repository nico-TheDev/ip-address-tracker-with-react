import axios from "axios";

const geoInstance = axios.create();

geoInstance.interceptors.request.use((config) => {
    config.baseURL = "https://geo.ipify.org/api/";
    config.params = config.params || {};
    config.params["apiKey"] = process.env.GEO_KEY;
    return config;
});

export default geoInstance;
