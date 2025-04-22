import axios from "axios";
import Cookies from "js-cookie";

const baseURL = import.meta.env.VITE_PUBLIC_API_URL;

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use(
  (config) => {
    const jwt = Cookies.get("jwt_token");
    if (jwt) {
      config.headers.Authorization = `Bearer ${jwt}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;