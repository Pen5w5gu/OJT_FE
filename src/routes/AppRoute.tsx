import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedLayouts from "../layouts/defautlLayougt/DefaultLayout";
import Table from "../pages/protected/tabletest/Table";
import HomeStudent from "../pages/public/HomeStudent";
import StudentLayout from "../layouts/defautlLayougt/StudentLayout";

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

      </Route>

    </Routes>
  );
};

export default AppRoute;