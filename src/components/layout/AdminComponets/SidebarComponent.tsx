import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCompanyByAccountID } from "../../../services/CompanyServices";
import { Account } from "../../../types/DataTypes";
import AuthService from "../../../services/AuthService";

const Sibar: React.FC = () => {
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
            <a className="nav-link" href="/manager/welcome">
              <i className="icon-grid menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/manager/company/list">
              <i className="icon-grid menu-icon"></i>
              <span className="menu-title">Companies</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/manager/internship/list">
              <i className="icon-grid menu-icon"></i>
              <span className="menu-title">Internships</span>
            </a>
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
export default Sibar;
