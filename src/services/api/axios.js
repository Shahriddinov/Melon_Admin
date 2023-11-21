import axios from "axios";
import { ApiUrls } from "./utils"
import { getItem } from "../../helpers/persistanceStorage";

axios.defaults.baseURL = ApiUrls.admin;

axios.interceptors.request.use(function (config) {
  const token = getItem("token");
  const authorization = token ? `Bearer ${token}` : "";
  config.headers.Authorization = authorization;
  return config;
});

export default axios;
