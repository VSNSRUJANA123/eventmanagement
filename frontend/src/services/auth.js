import axios from "axios";
import { REACT_APP_API_URL } from "../Url";
const API_URL = REACT_APP_API_URL;

export const registerUser = async (username, password) => {
  const response = await axios.post(`${API_URL}/register`, {
    username,
    password,
  });
  return response.data;
};

export const loginUser = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  const { token } = response.data;
  localStorage.setItem("token", token);
  return token;
};
