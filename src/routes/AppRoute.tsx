import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedLayouts from "../layouts/defautlLayougt/DefaultLayout";
import Table from "../pages/protected/tabletest/Table";
import HomeStudent from "../pages/studentPages/public/Home";
import StudentLayout from "../layouts/defautlLayougt/StudentLayout";
import Companies from "../pages/studentPages/public/Companies";
import JobOpportunities from "../pages/studentPages/protected/JobOpportunities";
import DefaultLayout from "../layouts/defautlLayougt/DefaultLayout";
import InternshipProposals from "../pages/studentPages/protected/InternshipProposals";
import CvStudent from "../pages/studentPages/protected/CvStudent";
import Profile from "../pages/Profile";
import CompanyDetails from "../pages/studentPages/protected/CompanyDetails";

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

    </Routes>
  );
};

export default AppRoute;