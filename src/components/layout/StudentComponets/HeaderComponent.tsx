import { Link, NavLink } from "react-router-dom";
import ProtectedNavLinkComponent from "./NavLink/ProtectedNavLinkComponent";
import PublicNavLinkComponent from "./NavLink/PublicNavLinkComponent";
import logo from "../../../../public/FPT_University_logo.webp";

function Header() {
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
          {/* <PublicNavLinkComponent /> */}
          <ProtectedNavLinkComponent />
        </div>
      </div>
    </nav>
  );
}

export default Header;