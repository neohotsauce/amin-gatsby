import React from "react";

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
              {badges.map((badge, index) => (
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
