import { React, useState } from "react";
import { withRouter } from "react-router-dom";
import "./Navbar.css";

import { FaAlignRight } from "react-icons/fa";
import logo from './../images/sursumLogo.png'

function Navbar(props) {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded(!expanded);
  };



  return (
    <div>
      <div id="Header">
        <img src={logo} id="NavbarLogo" alt="Logo" href="/" />
        <div id="Navbar">
          <button onClick={() => toggle()} id="ExpandNavbar">
            <FaAlignRight />
          </button>
          <ul className={expanded ? "NavbarList show-nav" : "NavbarList"}>
            <li className="NavbarListItem">
              <a className="InlineLink" href="/">
                Home
              </a>
            </li>
            <li className="NavbarListItem">
              <a className="InlineLink" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>{" "}
        {/*End navbar*/}
      </div>{" "}
      {/* End header*/}
      <div className="Spacer">{/* Spacing */}</div>
    </div>
  );
}

export default withRouter(Navbar);
