import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({mappedstat}) =>{
    
    return(
        <div className="bg-white shadow col-12 col-sm-5 col-lg-3 col-xxl-2 p-3 border rounded text-center mb-4">
            <p className="fs-3 fw-medium d-flex align-items-center justify-content-center">
                <mappedstat.icon className="text-warning me-2"/> 
                {mappedstat.label}
            </p>
            <div className="d-flex justify-content-around align-items-center">
                <span className="fs-4 text-info">{mappedstat.totals}</span>
                <Link to={mappedstat.link} className="">Details <FaAngleDoubleRight /></Link>
            </div>
        </div>
    )
};

export default Card;