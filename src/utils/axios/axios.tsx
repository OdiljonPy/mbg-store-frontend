import { refreshUser } from "@/slices/auth/refresh";
import axios from "axios";

const defaultOptions = {
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
};

const API = axios.create(defaultOptions);

API.interceptors.request.use(function (config) {
	let locale = localStorage.getItem("locale") || 'uz'
	if(locale === 'default') locale = 'uz'
	const token = localStorage.getItem("access_token");
	config.headers.Authorization = token ? `Bearer ${token}` : "";
	config.headers['Accept-Language'] = locale
	return config;
});

API.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config;
		if (
			error.response.status === 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				await refreshUser();
				return API.request(originalRequest);
			} catch (e: any) {
				if (e.response.status === 401) {
					localStorage.removeItem("access_token");
					localStorage.removeItem("refresh_token");
					window.location.href = "/";
				}
			}
		}
		throw error;
	}
);

export default API;
