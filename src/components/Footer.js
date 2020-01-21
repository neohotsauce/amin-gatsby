import React from "react";
import { Link } from "gatsby";

import logoWhite from "../img/logo_white.png";
import s1 from "../img/s1.png";
import s2 from "../img/s2.png";
import s3 from "../img/s3.png";

const Footer = () => {
  return (
    <div className="block2 bg4">
      <div className="container">
        <div className="row px-3 pb-4 pb-lg-4 pt-lg-4 white">
          <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12 px-3 px-lg-3 py-2 py-lg-2  pb-4 white">
            <Link to="/">
              <img src={logoWhite} width="220px;" className="pullup" />
            </Link>
          </div>

          <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12 px-3 px-lg-3 py-2 py-lg-2  pb-4 white ">
            <h4 className=" lspace white roboto"> Aminaedi Equities</h4> <br />
            <p className="small3 white roboto">
              {" "}
              H.Merry Side - 4th Floor <br /> Boduthakurufaanu Magu, <br />{" "}
              Male, Rep of Maldives
            </p>
            <p className="small3 white roboto">+960 3013861 </p>
            <p className="small3 roboto">
              info@aminaedi.com <br />
            </p>
          </div>
          <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12 px-3 px-lg-3 py-2 py-lg-2  pb-4 white">
            <p className="small3 white ">
              <Link to="/" className="btn3">
                {" "}
                HOME
              </Link>
            </p>
            <p className="small3">
              <Link to="/story" className="btn3">
                {" "}
                OUR STORY
              </Link>
            </p>
            <p className="small3">
              <Link to="/#investments" className="btn3">
                {" "}
                OUR INVESTMENTS
              </Link>
            </p>
            <p className="small3">
              <Link to="/#contact" className="btn3">
                {" "}
                CONTACT
              </Link>
            </p>
            <hr />
            <br />
            <a
              href="https://www.facebook.com/aminaediequities"
              title="Facebook page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={s1} width="45px" />
            </a>
            <a
              href="https://www.instagram.com/aminaediequities/"
              title="Instgram page "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={s2} width="45px" />
            </a>
            <a
              href="https://www.linkedin.com/company/aminaedi-equities"
              title=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={s3} width="45px" />
            </a>
          </div>
        </div>

        <div className="row px-3">
          <div
            className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 px-3 px-lg-3 py-2 py-lg-2 white"
            align="center"
          >
            <hr />
            <p className="small">
              © Aminaedi Equities. Website by{" "}
              <a
                href="https://www.excorp.mv"
                target="_blank"
                className="white"
                rel="noopener noreferrer"
              >
                Excorp
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
