import axios from "axios";
import { Renderable, Toast, ValueFunction, toast } from "react-hot-toast";
import config from "../config";

/**
 * Http Utility.
 */
const http = axios.create({
  baseURL: config.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.response.use(
  (response: any) => response,
  (error: {
    response: {
      status: number;
      data: { message: Renderable | ValueFunction<Renderable, Toast> };
    };
  }) => {
    if (
      error.response.status === 400 ||
      error.response.status === 404 ||
      error.response.status === 500
    ) {
      // handle error 400, 404 and 500 request
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please again later.");
      }
    }
    return error.response;
  }
);

export { http as default };
