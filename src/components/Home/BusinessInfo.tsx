import { faClock, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import BusinessInfoCard from "./BusinessInfoCard";

const infosData = [
    {
        title: "Opening Hours",
        description: "We are open 7 days",
        icon: faClock,
        background: "primary",
    },
    {
        title: "Visit Our Location",
        description: "Brooklyn, NY 10003 USA",
        icon: faMapMarker,
        background: "dark",
    },
    {
        title: "Call us now",
        description: "+15697854124",
        icon: faPhone,
        background: "primary",
    },
];

const BusinessInfo = () => {
    return (
        <section className="d-flex mb-5 justify-content-center">
            <div className="row w-75 text-white">
                {infosData.map((info) => (
                    <BusinessInfoCard info={info} />
                ))}
            </div>
        </section>
    );
};

export default BusinessInfo;
