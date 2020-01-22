import React, { Fragment } from "react";
import { Link } from "gatsby";

import footerLogo from "../../img/footer-logo.jpg";

const Footer = () => {
  return (
    <Fragment>
      <div className="block bg1">
        <div className="container-fluid">
          <div className="row px-3 px-lg-5">
            <div className="col-lg-3 col-xl-3 col-12 white" align="left">
              <img src={footerLogo} className="img-fluid" />
              <br />
              <br />
              <p className="small">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla
              </p>
              <br />
            </div>

            <div className="col-lg-6 col-xl-6 col-12 " align="center">
              <br />
            </div>

            <div className="col-lg-3 col-xl-3 col-12 white" align="right">
              <br />
              <p>
                World Dream - 2nd Floor, Handhuvaree Hingun <br />
                Male' City, Rep of Maldives
              </p>
              <br />
              <p>
                Phone: +960 3324369 <br /> Fax: +960 3328424 <br /> Email:
                projects@aminconstruction.net
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="block3 bgfooter white">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12 col-12" align="center">
              <br />
              <p>
                ©Amin Construction. All Rights Reserved! <br /> Website by{" "}
                <a href="https://www.excorp.mv/">Excorp</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
