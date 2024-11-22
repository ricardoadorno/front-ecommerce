import axios, { type AxiosInstance } from "axios";

const config = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json,multipart/form-data",
    "Access-Control-Allow-Methods": "GET,PATCH,POST,DELETE,OPTIONS",
  },
};

export default (path: string, headers?: any): AxiosInstance =>
  axios.create({
    ...config,
    baseURL: `${config.baseURL}/${path}`,
    headers: {
      common: headers,
    },
  });
