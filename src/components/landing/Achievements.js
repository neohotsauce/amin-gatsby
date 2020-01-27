import React from "react";
import { Link } from "gatsby";

const Achievements = ({ achievements }) => {
  return (
    <div className="block2 bg3">
      <div className="container">
        <div className="row px-3">
          <div className="col-lg-12 col-xl-12 col-12 " align="center">
            <h1> ACHIEVEMENTS</h1>
            <br />
            <br />
          </div>
        </div>

        <div className="row px-3">
          {achievements.map((item, index) =>
            index > 3 ? null : (
              <div key={index} className="col-6 col-lg-3 col-xl-3 ">
                {item.image ? (
                  <img
                    src={
                      !item.image.publicURL ? item.image : item.image.publicURL
                    }
                    className="img-fluid mb-3 mb-lg-4"
                  />
                ) : (
                  <img
                    src={null}
                    className="img-fluid mb-3 mb-lg-4"
                    alt="award"
                  />
                )}

                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            )
          )}
        </div>
      </div>
      <div className="d-flex mt-5">
        <Link className="btn1 mx-auto" to="/achievements">
          VIEW ALL...
        </Link>
      </div>
    </div>
  );
};

export default Achievements;
