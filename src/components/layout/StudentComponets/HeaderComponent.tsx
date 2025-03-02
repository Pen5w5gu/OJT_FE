import { Link, NavLink } from "react-router-dom";
import '../../styles/studentPage.css'
import ProtectedNavLinkComponent from "./NavLink/ProtectedNavLinkComponent";
import PublicNavLinkComponent from "./NavLink/PublicNavLinkComponent";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo mr-5" to="/">
            <img src="../../../assets/images/logo.svg" className="mr-2" alt="logo" />
          </Link>
          <Link className="navbar-brand brand-logo-mini" to="/">
            <img src="../../../images/logo-mini.svg" alt="logo" />
          </Link>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          {/* <PublicNavLinkComponent /> */}
          <ProtectedNavLinkComponent />
        </div>
      </div>
    </nav>
  );
}

export default Header;