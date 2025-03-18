import { StudentApplied } from "../types/DataTypes";
import axiosInstance from "./Axios";


const API_URL = "http://localhost:5028/api/Student";


export const fetchStudentApplied = async (
    companyId: number,
  pageNumber: number = 1,
  pageSize: number = 10,
  major: string = "",
  searchTerm: string = ""
  ): Promise<{ items: StudentApplied[]; totalPages: number }> => {
    try {
      const response = await axiosInstance.get(`${API_URL}/company/${companyId}/applied-students`, {
        params: {
            PageNumber: pageNumber,
            PageSize: pageSize,
            major: major,
            SearchTerm: searchTerm,
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
      console.error("Error fetching applied students:", error);
      return { items: [], totalPages: 1 };
    }
  };