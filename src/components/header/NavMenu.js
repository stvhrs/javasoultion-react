import PropTypes from "prop-types";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  const [isFocused0, setFocus0] = useState(false);
  const [isFocused1, setFocus1] = useState(false);
  const [isFocused2, setFocus2] = useState(false);
  const [isFocused3, setFocus3] = useState(false);
  return (
    <div
      className={` ${sidebarMenu
        ? "sidebar-menu"
        : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
        } `}
    >
      <nav>
        <ul>
          <li>
            <Link onMouseEnter={() => setFocus0(true)}
              onMouseLeave={() => setFocus0(false)}
              className="hoverColor"
              style={{
                color: isFocused0 ? "black" : '#916d07'
              }} to={process.env.PUBLIC_URL + "/"}>
              HOME</Link>
          </li>
          <li>
            <Link onMouseEnter={() => setFocus1(true)}
              onMouseLeave={() => setFocus1(false)}
              className="hoverColor"
              style={{
                color: isFocused1 ? "black" : '#916d07'
              }}  to={process.env.PUBLIC_URL + "/about"}>
              TENTANG KAMI</Link>
          </li>
          <li>
            <Link onMouseEnter={() => setFocus2(true)}
              onMouseLeave={() => setFocus2(false)}
              className="hoverColor"
              style={{
                color: isFocused2 ? "black" : '#916d07'
              }}  to={process.env.PUBLIC_URL + "/contact"}>
              LOKASI TOKO</Link>
          </li>
          <li>
            <Link onMouseEnter={() => setFocus3(true)}
              onMouseLeave={() => setFocus3(false)}
              className="hoverColor"
              style={{
                color: isFocused3 ? "black" : '#916d07'
              }}  to={process.env.PUBLIC_URL + "/contact"}>
              CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default multilanguage(NavMenu);
