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

export const getStudentByAccountId = async (
  accountId: number
) => {
  try {
    const response = await axiosInstance.get(`${API_URL}/Student/${accountId}`);
    if (response.data && response.data.data) {
      return response.data.data
    }
    throw new Error("Invalid response format");
  } catch (error) {
    console.error("Error fetching applied students:", error);
  }
}

export const getStudentInStorage = async () => {
  const studentDataString = localStorage.getItem("studentData");
  if (!studentDataString) {
    throw new Error("Student data not found in localStorage");
  }
  // Parse JSON để lấy đối tượng
  const studentData = JSON.parse(studentDataString);
  return studentData
}

export const applyJob = async (internshipId: string) => {
  const studentData = await getStudentInStorage();
  const status: string = "Pending";
  try {
    const response = await axiosInstance.post(`${API_URL}/CreateApply`, {
      timeApply: new Date().toISOString(),
      status: status,
      studentId: studentData.studentId,
      internshipId: internshipId,
    })
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching applied students:", error);
  }
}

export const getListApplied = async () => {
  const studentData = await getStudentInStorage();
  try {
    const response = await axiosInstance.get(`${API_URL}/studentapply/${studentData.studentId}`);
    if (response.data && response.data.data) {
      return response.data
    }
    throw new Error("Invalid response format");

  } catch (error) {
    console.error("Error fetching applied list:", error);

  }
}