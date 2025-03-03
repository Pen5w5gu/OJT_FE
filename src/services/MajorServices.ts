import { Major } from "../types/DataTypes";
import axiosInstance from "./Axios";
import axios from "axios";

// URL của API backend
const API_URL = "http://localhost:5128/api/Major";

// Hàm lấy tất cả ngành học
export const fetchMajors = async (): Promise<Major[]> => {
  try {
    const response = await axiosInstance.get(`${API_URL}/GetAllMajor`);
    return response.data;
  } catch (error) {
    console.error("Error fetching majors:", error);
    return [];
  }
};
