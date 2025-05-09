import PropTypes from "prop-types";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



const Logo = ({ imageUrl, logoClass }) => {
  return (
    <div className={`${logoClass ? logoClass : ""}`}>
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img width={"320"} alt="" src={process.env.PUBLIC_URL + imageUrl} />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string
};

export default Logo;
