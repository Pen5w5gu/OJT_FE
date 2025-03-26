import { Account } from "../types/DataTypes";
import axiosInstance from "./Axios";

const API_URL = "http://localhost:5028/api/Account";

const fetchAllAccounts = async (
    pageNumber: number = 1,
    pageSize: number = 10,
    searchTerm: string = "",
    role: string = "",
    status: string = ""

): Promise<{ items: Account[], totalPages: number }> => {
    try {
        const response = await axiosInstance.get(`${API_URL}/accounts`, {
            params: {
                searchTerm: searchTerm,
                role: role,
                status: status,
                PageNumber: pageNumber,
                PageSize: pageSize,
            }
        });
        if (response.data && response.data.data) {
            return {
                items: response.data.data.items || [],
                totalPages: response.data.data.totalPages || 1
            }
        }

        throw new Error("Invalid response format")
    } catch (error) {
        console.error("Error fetching internships:", error);
        return { items: [], totalPages: 1 };
    }
}

export { fetchAllAccounts }