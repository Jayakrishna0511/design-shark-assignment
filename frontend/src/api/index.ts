import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5002/api/upload', 
});

export const uploadFile = async (formData: FormData) => {
  return API.post('/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
