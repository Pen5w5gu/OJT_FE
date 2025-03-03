import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedLayouts from "../layouts/defautlLayout/DefaultLayout";
import Table from "../pages/protected/tabletest/Table";
import InternshipList from "../pages/protected/internship/InternshipList";
import AuthLayouts from "../layouts/authLayout/AuthLayouts";
import LoginPage from "../pages/auth/login/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import { Role } from "../types/DataTypes";
import { ForbiddenError } from "../pages/exception/403-forbidden";
import ErrorLayout from "../layouts/errorLayout/ErrorLayout";

const AppRoute: React.FC = () => {
  return (
    <Routes>
      {/* Auth Routes */}
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
      </Route>

      <Route element={<ErrorLayout />}>
        <Route path="/403-forbidden" element={<ForbiddenError />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
