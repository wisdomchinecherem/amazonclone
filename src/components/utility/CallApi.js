import axios from "axios";
import { BASE_URL } from "./Constant";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const CallApi = async (resource) => {
  console.log(resource);
  const { data } = await axios.get(`${BASE_URL}/${resource}`, config);
  return data;
};
