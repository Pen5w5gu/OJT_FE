import { Company } from "../types/DataTypes";
import axiosInstance from "./Axios";
import axios from "axios";
// URL của API backend
const API_URL = "http://localhost:5128/api/Company";

// Hàm lấy tất cả công ty
export const fetchCompanies = async (): Promise<Company[]> => {
  try {
    const response = await axiosInstance.get(`${API_URL}/companies`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
  }
};
