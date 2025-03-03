import { Company } from "../types/DataTypes";
import axiosInstance from "./Axios";

const API_URL = "http://localhost:5128/api/Company";

// Hàm lấy danh sách công ty với tìm kiếm, phân trang và lọc
export const fetchCompanies = async (
  pageNumber: number = 1,
  pageSize: number = 10,
  searchTerm: string = "",
  location: string = ""
): Promise<{ items: Company[]; totalPages: number }> => {
  try {
    const response = await axiosInstance.get(`${API_URL}/companies`, {
      params: {
        SearchTerm: searchTerm,
        Location: location,
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
    console.error("Error fetching companies:", error);
    return { items: [], totalPages: 1 };
  }
};
