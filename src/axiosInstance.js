// import { useSelector } from "react-redux";
import Axios from "axios";

const axiosInstance = Axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosInstance;

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

axiosInstance.interceptors.request.use((request) => {
  request.baseURL = process.env.SERVER_ADDRESS;
  // request.baseURL = "https://snappfood.ir/mobile/v3/";
  return request;
});

const errorHandler = (error) => {
  console.log(
    "%c ERROR (interceptor) responce =>",
    "background: #8B0000; color: #ffffff; font-size:$smFontSize; font-weight: bold;",
    error.response
  );

  return Promise.reject({ ...error });
};

const successHandler = (response) => {
  console.log(
    "%c SUCCESS (interceptor) responce =>",
    "background: #006400; color: #ffffff; font-size:$smFontSize; font-weight: bold;",
    response
  );

  return response;
};
