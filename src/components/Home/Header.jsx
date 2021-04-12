import BusinessInfo from "./BusinessInfo";
import "./Header.css";
import HeaderMain from "./HeaderMain";
import Navbar from "./Navbar";

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
