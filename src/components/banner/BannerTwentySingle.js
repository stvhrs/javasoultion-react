import PropTypes from "prop-types";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



const BannerTwentySingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-lg-6 col-md-6">
      <div
        className={`single-banner-2 ${
          spaceBottomClass ? spaceBottomClass : ""
        } ${data.textAlign === "right" ? "align_right" : ""}`}
      >
        <Link to={process.env.PUBLIC_URL + data.link}>
          <img src={process.env.PUBLIC_URL + data.image} alt="" />
        </Link>
        <div className="banner-content-2 banner-content-2--style2 banner-content-2--style2--pink">
          <h3>{data.title}</h3>
          <h4>
            {data.subtitle} <span>{data.price}</span>
          </h4>
          <Link to={process.env.PUBLIC_URL + data.link}>
            <i className="fa fa-long-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

BannerTwentySingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default BannerTwentySingle;
