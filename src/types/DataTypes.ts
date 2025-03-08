export interface Internship {
  internshipId: number;
  position: string;
  description: string;
  requirment: string;
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
  accountName: string;
  accountRole: string;
  accountEmail: string;
}

export enum Role {
  ADMIN = "Admin",
  STUDENT = "Student",
  HR_STAFF = "HRstaff",
}
