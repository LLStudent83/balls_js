import Axios, { type AxiosRequestConfig } from "axios";

const AXIOS_INSTANCE = Axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL || "",
});

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
	AXIOS_INSTANCE.interceptors.request.use(
		(requestConfig) => requestConfig,
		(error) => Promise.reject(error),
	);

	AXIOS_INSTANCE.interceptors.response.use(
		(response) => response,
		(error) => Promise.reject(error),
	);

	return AXIOS_INSTANCE(config).then(({ data }) => data);
};
