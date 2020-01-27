import React from "react";
import { Link } from "gatsby";

const TrustBadges = ({ badges }) => {
  return (
    <div className="block2 ">
      <div className="container">
        <div className="row px-3">
          <div className="col-lg-12 col-xl-12 col-12 " align="center">
            <h1>
              <span className="extralarge">TRUSTED</span> BY
            </h1>
            <br />
            <div className="row justify-content-center">
              {badges.map((badge, index) =>
                index > 9 ? null : (
                  <div key={index} className="col-lg-3 col-md-4 col-6">
                    {badge.image ? (
                      <img
                        src={
                          !badge.image.publicURL
                            ? badge.image
                            : badge.image.publicURL
                        }
                        alt=""
                        className="img-fluid"
                      />
                    ) : (
                      <img src={null} alt="badge" className="img-fluid" />
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <Link className="btn1 mx-auto" to="/trusted-brands">
          VIEW ALL...
        </Link>
      </div>
    </div>
  );
};

export default TrustBadges;
