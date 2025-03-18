import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedLayouts from "../layouts/defautlLayout/DefaultLayout";
import HomeStudent from "../pages/public/Home";
import StudentLayout from "../layouts/defautlLayout/StudentLayout";
import Companies from "../pages/public/Companies";
import JobOpportunities from "../pages/protected/student/JobOpportunities";
import DefaultLayout from "../layouts/defautlLayout/DefaultLayout";
import InternshipProposals from "../pages/protected/student/InternshipProposals";
import CvStudent from "../pages/protected/student/CvStudent";
import Profile from "../pages/protected/student/Profile";
import CompanyDetail from "../pages/protected/student/CompanyDetail";
import InternshipList from "../pages/protected/internship/InternshipList";
import AuthLayouts from "../layouts/authLayout/AuthLayouts";
import LoginPage from "../pages/auth/login/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import { Role } from "../types/DataTypes";
import { ForbiddenError } from "../pages/exception/403-forbidden";
import ErrorLayout from "../layouts/errorLayout/ErrorLayout";
import CompanyList from "../pages/protected/company/CompanyList";
import InternshipDetail from "../pages/protected/student/InternshipDetail";
import WelcomeManager from "../pages/protected/WelcomeManager";
import StudentAppliedList from "../pages/protected/manager-student/StudentAppliedList";

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
        <Route path="/company/list" element={<Companies />} />
        <Route path="/company/detail/:id" element={<CompanyDetail />} />
        <Route path="/internship/list" element={<JobOpportunities />} />
        <Route path="/internship/detail/:id" element={<InternshipDetail />} />
        <Route path="/cvStudent" element={<CvStudent />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route element={<AuthLayouts />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedLayouts />}>
        <Route
          path="/manager/welcome"
          element={
            <ProtectedRoute allowedRoles={[Role.ADMIN, Role.HR_STAFF]}>
              <WelcomeManager />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manager/internship/list"
          element={
            <ProtectedRoute allowedRoles={[Role.ADMIN, Role.HR_STAFF]}>
              <InternshipList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manager/company/list"
          element={
            <ProtectedRoute allowedRoles={[Role.ADMIN, Role.HR_STAFF]}>
              <CompanyList />
            </ProtectedRoute>
          }
        />

<Route
          path="/manager/student-applied/company/:companyId"
          element={
            <ProtectedRoute allowedRoles={[Role.ADMIN, Role.HR_STAFF]}>
            <StudentAppliedList />
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