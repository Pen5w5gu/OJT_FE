import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/layout/StudentComponets/HeaderComponent";
import FooterComponent from "../../components/layout/StudentComponets/FooterComponent";
import SidebarComponent from "../../components/layout/StudentComponets/SidebarComponent";
import '../../components/styles/studentPage.css'


// import "./_variables.scss"
// import "./_vertical-wrapper.scss"
// import "../defaultLayout.scss";

const StudentLayout: React.FC = () => {
    return (
        <div className="container-scroller min-h-screen flex flex-col">
            <HeaderComponent />
            <Outlet />
        </div>
    );
};

export default StudentLayout;
