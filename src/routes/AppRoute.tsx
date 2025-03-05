import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedLayouts from "../layouts/defautlLayout/DefaultLayout";
import Table from "../pages/protected/tabletest/Table";
import HomeStudent from "../pages/studentPages/public/Home";
import StudentLayout from "../layouts/defautlLayout/StudentLayout";
import Companies from "../pages/studentPages/public/Companies";
import JobOpportunities from "../pages/studentPages/protected/JobOpportunities";
import DefaultLayout from "../layouts/defautlLayout/DefaultLayout";
import InternshipProposals from "../pages/studentPages/protected/InternshipProposals";
import CvStudent from "../pages/studentPages/protected/CvStudent";
import Profile from "../pages/Profile";
import CompanyDetails from "../pages/studentPages/protected/CompanyDetails";
import InternshipList from "../pages/protected/internship/InternshipList";
import AuthLayouts from "../layouts/authLayout/AuthLayouts";
import LoginPage from "../pages/auth/login/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import { Role } from "../types/DataTypes";
import { ForbiddenError } from "../pages/exception/403-forbidden";
import ErrorLayout from "../layouts/errorLayout/ErrorLayout";
import CompanyList from "../pages/protected/company/CompanyList";

const AppRoute: React.FC = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      {/* <Route element={<AuthLayouts />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/google-callback" element={<GoogleCallbackPage />} />
        </Route> */}

      {/* Protected Routes */}
      <Route element={<StudentLayout />}>
        <Route path="/" element={<HomeStudent />} />
        <Route path="/Companies" element={<Companies />} />
        <Route path="/CompanyDetails" element={<CompanyDetails />} />
        <Route path="/JobOpportunities" element={<JobOpportunities />} />
        <Route path="/InternshipProposals" element={<InternshipProposals />} />
        <Route path="/CvStudent" element={<CvStudent />} />
        <Route path="/Profile" element={<Profile />} />
      </Route>

      <Route element={<DefaultLayout />}>
        <Route path="/help" element={<Table />} />
      </Route>

      <Route element={<AuthLayouts />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedLayouts />}>
        <Route path="/" element={<Table />} />
        <Route
          path="/internship/list"
          element={
            <ProtectedRoute allowedRoles={[Role.ADMIN, Role.HR_STAFF]}>
              <InternshipList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/company/list"
          element={
            <ProtectedRoute allowedRoles={[Role.ADMIN, Role.HR_STAFF]}>
              <CompanyList />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route element={<ErrorLayout />}>
        <Route path="/403-forbidden" element={<ForbiddenError />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
