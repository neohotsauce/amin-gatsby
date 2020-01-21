import React, { Fragment } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";

const Navbar = () => {
  const toggleNav = x => {
    x.currentTarget.classList.toggle("change");
  };

  return (
    <Fragment>
      <div className="navbarea"></div>

      <div className="brand_logo animated fadeInDown">
        <Link to="/" title="Aminaedi Logo">
          <img src={logo} />
        </Link>
      </div>

      <div
        className="menu_icon animated fadeInDown"
        id="menubutton"
        onClick={e => toggleNav(e)}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
      </div>

      <div id="mainmenu">
        <div id="menusection">
          <ul>
            <li className="animated fadeIn">
              <Link to="/" className="active">
                Home{" "}
              </Link>
            </li>

            <li className="animated fadeIn">
              <Link to="/story">Our Story</Link>
            </li>

            <li className="animated fadeIn">
              <Link to="/#investments">Our Investments</Link>
            </li>

            <li className="animated fadeIn">
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
