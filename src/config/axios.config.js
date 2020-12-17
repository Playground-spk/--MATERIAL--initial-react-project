import axios from "axios";
import { storeGetAccessToken } from "../services/store.service";

axios.defaults.baseURL = "";
//axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    if (config.url.includes("/authAPI")) {
      return config;
    }

    const token = storeGetAccessToken();
   

    config.headers["x-access-token"] = token;
    return config;
  },
  (error) => {
    throw error;
  }
);

axios.interceptors.response.use(
  (config) => {
    if (!config?.data?.status) {
      if (config?.data?.msg?.info === "Token is expired") {
        localStorage.removeItem("store");
        window.location.reload();
        return  Promise.reject(config?.data?.msg?.info)
      }
      return  Promise.reject(config?.data?.msg?.info)
    }
    return config;
  },
  (error) => {
    console.log(error);
    // if (error.response.status === 401) {
    //   localStorage.removeItem(getAccessToken());

    //   window.location.reload();
    // }
    return Promise.reject(error);
  }
);

export default axios;
