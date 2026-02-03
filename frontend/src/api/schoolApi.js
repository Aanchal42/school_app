import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // remove ',data'
});

export const addSchool = (formData) =>
  API.post("/schools", formData); // Axios automatically sets multipart/form-data for FormData

export const getSchools = () => API.get("/schools");
