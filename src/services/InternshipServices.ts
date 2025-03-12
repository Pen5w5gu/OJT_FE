import { Company, Internship } from "../types/DataTypes";
import axiosInstance from "./Axios";
import axios from "axios";


const API_URL = "http://localhost:5028/api/Internship";

<<<<<<< HEAD
const fetchInternships = async (): Promise<Internship[]> => {
=======
export const fetchInternships = async (
  pageNumber: number = 1,
  pageSize: number = 10,
  searchTerm: string = "",
  companyId: number = 0,
  majorId: number = 0
): Promise<{ items: Internship[]; totalPages: number }> => {
>>>>>>> origin/QMN_test_2
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
<<<<<<< HEAD

const fetchAllInternships = async (
  pageNumber: number = 1,
  pageSize: number | null = null,
  searchTerm: string = "",
  MajorId: number | null = null,
  CompanyId: number | null = null,


): Promise<{ items: Internship[]; totalPages: number }> => {
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
    if (response.data && response.data) {
      return {
        items: response?.data?.data.items || [],
        totalPages: response?.data?.data.totalPages || 0
      }
    }
    throw new Error("Invalid response format");
  } catch (error) {
    console.error("Error fetching internship:", error);
    return { items: [], totalPages: 0 };
  }
}
const fetchInternshipById = async (id: string): Promise<Internship | null> => {
  try {
    const response = await axiosInstance.get(`${API_URL}/GetInternship/${id}`);
    if (response.data) {
      return response.data.data
    }
    throw new Error("Invalid response format");
  } catch (error) {
    console.error("Error fetching companies:", error);
    return null;
  }
}

export { fetchInternships, fetchInternshipById, fetchAllInternships };
=======
>>>>>>> origin/QMN_test_2
