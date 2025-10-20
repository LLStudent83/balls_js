import Axios, { type AxiosRequestConfig } from "axios";

const AXIOS_INSTANCE = Axios.create({ baseURL: "" });

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
	const source = Axios.CancelToken.source();

	AXIOS_INSTANCE.interceptors.request.use(
		(requestConfig) => requestConfig,
		(error) => Promise.reject(error),
	);

	AXIOS_INSTANCE.interceptors.response.use(
		(response) => response,
		(error) => {
			if (error.response?.status === 401) {
				console.log("Токен истёк — редирект на login");
			}
			return Promise.reject(error);
		},
	);

	const promise = AXIOS_INSTANCE({ ...config, cancelToken: source.token }).then(
		({ data }) => data,
	);
	return promise;
};
