import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/layout/HeaderComponent";
import FooterComponent from "../../components/layout/FooterComponent";
import SidebarComponent from "../../components/layout/SidebarComponent";

// import "./_variables.scss"
// import "./_vertical-wrapper.scss"
// import "../defaultLayout.scss";

const ErrorLayout: React.FC = () => {
  return (
    <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center text-center error-page bg-primary">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ErrorLayout;
