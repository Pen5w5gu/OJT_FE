// File: src/services/AuthService.ts
import { jwtDecode } from "jwt-decode";
import axiosInstance from "./Axios";
import { Account } from "../types/DataTypes";

interface JwtPayload {
  id: string;  // ID của user
  name: string;    // Tên user
  email: string;   // Email user
  role: string;    // Vai trò user
  exp: number;     // Thời gian hết hạn token (UNIX timestamp)
}

const AuthService = {
  getToken: (): string | null => {
    return localStorage.getItem("accessToken");
  },

  setToken: (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken);
  },

  removeToken: () => {
    localStorage.removeItem("accessToken");
  },

  decodeToken: (): JwtPayload | null => {
    const token = AuthService.getToken();
    if (!token) return null;
    try {
      return jwtDecode(token) as JwtPayload;;
    } catch (error) {
      console.error("Invalid token", error);
      return null;
    }
  },

  getUserInfo: (): Account | null => {
    const decoded = AuthService.decodeToken();
    if (!decoded) return null;
    
    return {
      accountId: Number(decoded.id),  // Chuyển về kiểu số
      accountName: decoded.name,
      accountEmail: decoded.email,
      accountRole: decoded.role,
    };
  },

  isTokenExpired: (): boolean => {
    const decoded = AuthService.decodeToken();
    console.log("Decoded Token:", decoded); // Kiểm tra nội dung token
    if (!decoded) return true;
    return decoded.exp * 1000 < Date.now();
},


  login: async (email: string, password: string) => {
    const response = await axiosInstance.post("api/Auth/signin", { email, password });
    if (response.data.accessToken) {
        AuthService.setToken(response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken); // Lưu refreshToken
    }
    return response.data;
}

  
};

export default AuthService;
