import Appointment from "./Appointment";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Doctors from "./Doctors";
import FeaturedService from "./FeaturedService";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeaturedService />
            <Appointment />
            <Testimonials />
            <Blogs />
            <Doctors />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
