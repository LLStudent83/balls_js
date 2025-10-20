import axios, { type AxiosInstance } from "axios";

export function customInstance(baseUrl: string): AxiosInstance {
	const instance: AxiosInstance = axios.create({
		baseURL: baseUrl,
		timeout: 10000,
	});

	instance.interceptors.request.use(
		(config) => config,
		(error) => Promise.reject(error),
	);

	instance.interceptors.response.use(
		(response) => response,
		(error) => {
			if (error.response?.status === 401) {
				console.log("Токен истёк — редирект на login");
			}
			return Promise.reject(error);
		},
	);

	return instance;
}
