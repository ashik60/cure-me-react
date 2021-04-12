import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BusinessInfoCard.css";

const BusinessInfoCard = ({ info }: any) => {
    return (
        <div className="col-md-4 info-card">
            <div className={`d-flex info-container bg-${info.background}`}>
                <div className="h1 pr-3">
                    <FontAwesomeIcon icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <p>
                        <small>{info.description}</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BusinessInfoCard;
