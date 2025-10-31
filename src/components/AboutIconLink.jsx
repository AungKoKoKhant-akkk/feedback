import React from 'react';
import {FaQuestion} from "react-icons/fa";
import {Link, useLocation} from "react-router-dom";



function AboutIconLink() {
    const location = useLocation();
    if(location.pathname !== "/"){
        return null;
    }
    return (
        <div className="about-link">
            <Link to={"/about"}>
                <FaQuestion size={30} />
            </Link>
        </div>
    );
}

export default AboutIconLink;