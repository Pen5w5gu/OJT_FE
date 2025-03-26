import axiosInstance from "./Axios";
import { getStudentInStorage } from "./StudentServices";

const API_URL = "http://localhost:5028/api/Proposal";

interface ProposalResponse {
    success: boolean;
    data: any; // Có thể thay bằng interface cụ thể cho proposal data
    message?: string;
}

const fetchProposalById = async () => {
    try {
        const studentData = await getStudentInStorage();
        if (!studentData?.studentId) {
            throw new Error("Student ID not found");
        }

        const response = await axiosInstance.get<ProposalResponse>(
            `${API_URL}/${studentData.studentId}`
        );
        if (response.data?.data) {
            return response.data.data;
        }
        throw new Error(response.data?.message || "Invalid response format");
    } catch (error) {
        console.error("Error fetching proposals:", error);
        throw error; // Re-throw để component có thể handle error
    }
};

const createProposal = async (formData: FormData) => {
    try {
        const response = await axiosInstance.post<ProposalResponse>(
            `${API_URL}/CreateProposal`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        if (!response.data?.success) {
            throw new Error(response.data?.message || "Failed to create proposal");
        }

        return response.data;
    } catch (error) {
        console.error("Error creating proposal:", error);
        throw error;
    }
};

export { fetchProposalById, createProposal };