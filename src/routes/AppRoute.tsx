import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedLayouts from "../layouts/defautlLayougt/DefaultLayout";
import Table from "../pages/protected/tabletest/Table";

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
        <Route element={<ProtectedLayouts />}>
          <Route path="/" element={<Table />} />

        </Route>
  
      </Routes>
    );
  };
  
  export default AppRoute;