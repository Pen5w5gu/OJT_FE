import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/layout/HeaderComponent";
import FooterComponent from "../../components/layout/FooterComponent";
import SidebarComponent from "../../components/layout/SidebarComponent";

// import "./_variables.scss"
// import "./_vertical-wrapper.scss"
// import "../defaultLayout.scss";

const DefaultLayout: React.FC = () => {
  return (
    <div className="container-scroller">
      <HeaderComponent />
      <div className="container-fluid page-body-wrapper">
        <SidebarComponent />
        <div className="main-panel">
          <div className="content-wrapper">
            <Outlet />

          </div>
          <FooterComponent />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
