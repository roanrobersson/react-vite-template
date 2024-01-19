import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const createAxios = (baseURL: string) => {
	const newInstance = axios.create({ baseURL });

	return newInstance;
};

const api = createAxios(API_BASE_URL);

export default api;
