import { ApplyStatus } from "./StatusEnum";

export interface Internship {
  internshipId: number;
  position: string;
  description: string;
  requirement: string;
  benefits: string;
  salary: number;
  companyName: string;
  companyLocation: string;
  companyAddress: string;
  majorName: string;
  companyID: number;
}

export interface Company {
  companyId: number;
  companyName: string;
  phoneNumber: string;
  websiteUrl: string;
  address: string;
  location: string;
  accountId: number;
}

export interface Major {
  majorId: number;
  majorName: string;
}

export interface Account {
  accountId: number;
  fullname: string;
  role: string;
  email: string;
  status: string;
}



export interface StudentApplied {
  studentId: number;
  studentCode: string;
  major: string;
  address: string;
  cvImage: string;
  accountId: number;
  applyId: number;
  timeApply: string; // Date dạng string ISO
  applyStatus: string;
  internshipPosition: string;
}
