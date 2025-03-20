import { Link, NavLink } from "react-router-dom";
import ProtectedNavLinkComponent from "./NavLink/ProtectedNavLinkComponent";
import PublicNavLinkComponent from "./NavLink/PublicNavLinkComponent";
import logo from "/FPT_University_logo.webp";
import { useEffect, useState } from "react";
import AuthService from "../../../services/AuthService";
import { Account } from "../../../types/DataTypes";

function Header() {
  const [user, setUser] = useState<Account | null>(AuthService.getUserInfo());

  useEffect(() => {
    const updateUser = () => {
      const userInfo = AuthService.getUserInfo();
      setUser(userInfo);
    };

    window.addEventListener("storage", updateUser); // Lắng nghe sự thay đổi trong localStorage
    return () => {
      window.removeEventListener("storage", updateUser);
    };
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <div className="text-center bg-light navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo mr-5" to="/">
            <img src={logo} className="mr-2" alt="logo" />
          </Link>
          <Link className="navbar-brand brand-logo-mini" to="/">
            <img src="../../../images/logo-mini.svg" alt="logo" />
          </Link>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          {user == null ? (
            <PublicNavLinkComponent />
          ) : (
            <ProtectedNavLinkComponent user={user} />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;