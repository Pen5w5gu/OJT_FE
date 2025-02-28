import { NavLink } from "react-router-dom"

function PublicNavLinkComponent() {
    return (
        <>
            <ul className="navbar-nav ms-auto"> {/* Changed to ms-auto */}
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
                <li className="nav-item">
                    <button className="btn btn-primary">
                        Log in
                    </button>
                </li>
            </ul>
            <div className="Profile">
                <button
                    className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                    type="button"
                    data-toggle="offcanvas"
                >
                    <span className="icon-menu"></span>
                </button>
            </div>
        </>
    )
}
export default PublicNavLinkComponent