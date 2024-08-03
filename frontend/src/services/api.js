import axios from "axios";
import { REACT_APP_API_URL } from "../Url";

const API_URL = REACT_APP_API_URL;

export const createEvent = async (event) => {
  const response = await axios.post(`${API_URL}/events`, event, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const getEvents = async () => {
  const response = await axios.get(`${API_URL}/events`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const getSessions = async () => {
  const response = await axios.get(`${API_URL}/sessions`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
