import React, { Fragment, useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";

const Navbar = ({ location, pageContext }) => {
  const navCollapse = useRef(null);

  const [pagePath, setPath] = useState("");
  const [isExpanded, expand] = useState(false);

  const toggleShow = () => {
    if (isExpanded) {
      return expand(false);
    }
    return expand(true);
  };

  const page = pageContext.templateKey || { templateKey: null };

  useEffect(() => {
    setPath(location ? location.pathname.substr(1) : "404");
  }, [location]);

  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => {
        return navCollapse.current.classList.remove("collapsing");
      }, 500);
      setTimeout(() => {
        return (navCollapse.current.style.height = "100vh");
      }, 1);
      navCollapse.current.classList.add("show");
      return navCollapse.current.classList.add("collapsing");
    }
    // collapse
    setTimeout(() => {
      navCollapse.current.classList.remove("show");
      return navCollapse.current.classList.remove("collapsing");
    }, 500);
    setTimeout(() => {
      return (navCollapse.current.style.height = "0");
    }, 1);

    return navCollapse.current.classList.add("collapsing");
  }, [isExpanded]);

  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="banner"
      >
        <Link className="navbar-brand" to="/">
          <img src={logo} className="img-fluid" />{" "}
        </Link>

        <button
          onClick={toggleShow}
          className="navbar-toggler"
          type="button"
          // data-toggle="collapse"
          // data-target="#collapsibleNavbar"
          // aria-controls="collapsibleNavbar"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          ref={navCollapse}
          className="collapse navbar-collapse"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav ml-auto">
            <li className={pagePath === "" ? "nav-item active" : "nav-item"}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li
              className={
                pagePath === "about" || page === "about-page"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li
              className={
                pagePath === "services" || page === "services-page"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li
              className={
                pagePath === "projects" || page === "projects-page"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li
              className={
                pagePath === "developments" ||
                page === "development-post" ||
                pagePath === "developments/"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link className="nav-link" to="/developments">
                Developments
              </Link>
            </li>
            <li
              className={
                pagePath === "news" ||
                pagePath === "news/" ||
                page === "news-post"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link className="nav-link" to="news">
                News
              </Link>
            </li>
            <li
              className={
                pagePath === "contact" || page === "contact-page"
                  ? "nav-item active"
                  : "nav-item"
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
