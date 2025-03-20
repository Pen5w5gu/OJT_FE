import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getCompanyByAccountID } from "../../../services/CompanyServices";
import { Account } from "../../../types/DataTypes";
import AuthService from "../../../services/AuthService";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [companyId, setCompanyId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const user = AuthService.getUserInfo();
        if (!user) {
          setError("User not authenticated.");
          return;
        }

        const company = await getCompanyByAccountID(user.accountId);
        if (company) {
          setCompanyId(company.companyId);
        } else {
          setError("No company found for this account.");
        }
      } catch (err) {
        setError("Failed to fetch company.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, []);

  const handleNavigate = () => {
    if (companyId) {
      navigate(`/manager/student-applied/company/${companyId}`);
    } else {
      alert("You do not have permission to access student applications.");
    }
  };
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/manager/welcome">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Dashboard</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/manager/company/list">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Companies</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/manager/internship/list">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Internships</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/manager/account/list">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Accounts</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <button className="nav-link btn btn-link" onClick={handleNavigate} disabled={loading}>
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Applied Students</span>
          </button>
        </li>
      </ul>
    </nav>

  );
}
export default Sidebar;
