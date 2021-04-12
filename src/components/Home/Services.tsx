import cavity from "../../images/cavity.png";
import fluoride from "../../images/fluoride.png";
import whitening from "../../images/whitening.png";
import ServiceDetail from "./ServiceDetail";

const serviceData = [
    {
        name: "Fluoride Treatment",
        img: fluoride,
    },
    {
        name: "Cavity Filling",
        img: cavity,
    },
    {
        name: "Teeth Whitening",
        img: whitening,
    },
];

const Services = () => {
    return (
        <section className="services-container pt-5 mt-5 mb-t pb-5">
            <div className="text-center">
                <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {serviceData.map((service) => (
                        <ServiceDetail service={service} key={service.name} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
