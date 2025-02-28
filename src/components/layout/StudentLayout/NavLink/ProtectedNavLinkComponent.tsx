import { NavLink } from "react-router-dom"

function ProtectedNavLinkComponent() {
    return (
        <ul className="navbar-nav ">
            <li className="nav-item">
                <NavLink to="/" className="nav-link">
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/companies" className="nav-link">
                    Companies & Institutions
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                    About Us
                </NavLink>
            </li>
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                >
                    Student
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Sign out</a>
                </div>
            </li>
        </ul>
    )
}
export default ProtectedNavLinkComponent