import { Internship } from "../types/DataTypes";
import axiosInstance from "./Axios";
import axios from "axios";


const API_URL = "http://localhost:5028/api/Internship";

export const fetchInternships = async (
  pageNumber: number = 1,
  pageSize: number = 10,
  searchTerm: string = "",
  companyId: number = 0,
  majorId: number = 0
): Promise<{ items: Internship[]; totalPages: number }> => {
  try {
    const response = await axiosInstance.get(`${API_URL}/Internship-page-by-company`, {
      params: {
        CompanyId: companyId,
        MajorId: majorId,
        SearchTerm: searchTerm,
        PageNumber: pageNumber,
        PageSize: pageSize,
      },
    });

    if (response.data && response.data.data) {
      return {
        items: response.data.data.items || [],
        totalPages: response.data.data.totalPages || 1,
      };
    }

    throw new Error("Invalid response format");
  } catch (error) {
    console.error("Error fetching internships:", error);
    return { items: [], totalPages: 1 };
  }
};
