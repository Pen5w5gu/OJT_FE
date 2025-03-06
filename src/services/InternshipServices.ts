import { Internship } from "../types/DataTypes";
import axiosInstance from "./Axios";
import axios from "axios";


const API_URL = "http://localhost:5028/api/Internship";

export const fetchInternships = async (): Promise<Internship[]> => {
  try {
    const response = await axiosInstance.get(`${API_URL}/GetAllInternship`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching internships:", error);
    return [];
  }
};

export const fetchAllInternships = async (
  pageNumber: number = 1,
  pageSize: number | null = null,
  searchTerm: string = "",
  MajorId: number | null = null,
  CompanyId: number | null = null,


): Promise<Internship[]> => {
  try {
    const response = await axiosInstance.get(`${API_URL}/Internship-page-by-company`, {
      params: {
        SearchTerm: searchTerm,
        PageNumber: pageNumber,
        PageSize: pageSize,
        MajorId: MajorId,
        CompanyId: CompanyId
      }
    });
    if (response.data && response.data.data) {
      return response.data.data.items
    }
    throw new Error("Invalid response format");
  } catch (error) {
    console.error("Error fetching internship:", error);
    return []
  }
}