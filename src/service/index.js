import axios from "axios";
import { showErrorMessage } from "@utils/helper";

const instance = axios.create();
instance.defaults.baseURL = process.env.REACT_APP_BASE_URL;

instance.interceptors.request.use(
  function (request) {
    if (localStorage.getItem("token")) {
      request.headers = {
        Authorization: `Bearer localStorage.getItem("token")`,
      };
    }
    return request;
  },
  function (error) {
    showErrorMessage(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    showErrorMessage(error);
    return Promise.reject(error);
  }
);
