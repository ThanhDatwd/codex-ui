import axios from "axios";

const restConnector = axios.create({
  baseURL: "https://tradingcme.com/v1/api",
});

export default restConnector;
