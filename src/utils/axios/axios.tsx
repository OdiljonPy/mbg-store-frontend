import axios from "axios";

const defaultOptions = {
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	// headers: {
	//     'Content-Type': 'application/json',
	// },
};

const API = axios.create(defaultOptions);

API.interceptors.request.use(function (config) {
	const token = localStorage.getItem("access_token");
	config.headers.Authorization = token ? `Bearer ${token}` : "";
	return config;
});

API.interceptors.response.use(
	(config) => config,
	async (error) => {
		if (error.response.status === 401 && error.config) {
			localStorage.removeItem("access_token");
			localStorage.removeItem("refresh_token");
			window.location.href = "/";
		}
	}
);

export default API;
