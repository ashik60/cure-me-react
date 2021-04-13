import Navbar from "../Shared/Navbar";
import BusinessInfo from "./BusinessInfo";
import "./Header.css";
import HeaderMain from "./HeaderMain";

const Header = () => {
    return (
        <div className="header-container">
            <Navbar />
            <HeaderMain />
            <BusinessInfo />
        </div>
    );
};

export default Header;
