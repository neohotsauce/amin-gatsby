import React, { Fragment, useEffect, useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";

const Navbar = ({ location }) => {
  const [pagePath, setPath] = useState("");

  useEffect(() => {
    setPath(location ? location.pathname.substr(1) : "404");
  }, [location]);

  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-md navbar-dark fixed-top"
        id="banner"
      >
        <Link className="navbar-brand" to="/">
          <img src={logo} className="img-fluid" />{" "}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className={pagePath === "" ? "nav-item active" : "nav-item"}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li
              className={pagePath === "about" ? "nav-item active" : "nav-item"}
            >
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li
              className={
                pagePath === "services" ? "nav-item active" : "nav-item"
              }
            >
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li
              className={
                pagePath === "projects" ? "nav-item active" : "nav-item"
              }
            >
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li
              className={
                pagePath === "development" ? "nav-item active" : "nav-item"
              }
            >
              <Link className="nav-link" to="/development">
                Developments
              </Link>
            </li>
            <li
              className={pagePath === "news" ? "nav-item active" : "nav-item"}
            >
              <Link className="nav-link" to="news">
                News
              </Link>
            </li>
            <li
              className={
                pagePath === "contact" ? "nav-item active" : "nav-item"
              }
            >
              <Link className="nav-link" to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
