import axios from "axios";

const serverAddress = 'http://localhost:3000';

export const get = async (url) => {
  const response = await axios.get(`${serverAddress}${url}`);
  return response.data;
};

export const post = async (url, data) => {
  const response = await axios.post(`${serverAddress}${url}`, data);
  return response.data;
}

export const put = async (url, data) => {
  const response = await axios.put(`${serverAddress}${url}`, data);
  return response.data;
}

export const del = async (url) => {
  const response = await axios.delete(`${serverAddress}${url}`);
  return response.data;
}
