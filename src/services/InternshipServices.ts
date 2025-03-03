import { Internship } from "../types/DataTypes";
import axiosInstance from "./Axios";
import axios from "axios";


const API_URL = "http://localhost:5128/api/Internship";

export const fetchInternships = async (): Promise<Internship[]> => {
  try {
    const response = await axiosInstance.get(`${API_URL}/GetAllInternship`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching internships:", error);
    return [];
  }
};