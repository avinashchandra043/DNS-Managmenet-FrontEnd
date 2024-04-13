import axios from "axios";

const PROD = "PROD";
const DEV = "DEV";
const currentEnvironment = DEV;

const Api = {
  PROD: {
    dnsApi: "",
  },
  DEV: {
    dnsApi: "http://localhost:5454",
  },
};

const getApiUrls = (enviroment = currentEnvironment) => {
  switch (enviroment) {
    case DEV:
      return Api.DEV;
    case PROD:
      return Api.PROD;
    default:
      return Api.DEV;
  }
};

export const API = getApiUrls(currentEnvironment);

export const baseApi = axios.create({
  baseURL: API.dnsApi,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type": "application/json",
  },
});
