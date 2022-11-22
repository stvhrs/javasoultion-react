import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          {/* <h5>Who Are We</h5> */}
          <h1>Welcome To Java Solution</h1>
          <h3 >
          Java Solution adalah cairan anti serangga , terobosan terbaru yang sangat efektif untuk mencegah dan membasmi berbagai macam serangga, seperti kecoa, kutu, rayap, dll. Bahan aktif dari Java Solution ini melekat pada area yang disemprot dan bertahan hingga 1 tahun.
          </h3>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
