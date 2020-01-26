import React from "react";

const Companies = ({ companies }) => {
  return (
    <div className="block2 ">
      <div className="container">
        <div className="row px-3">
          <div className="col-lg-12 col-xl-12 col-12 " align="center">
            <h1>
              <span className="lead">SUBSIDIARY</span> COMPANIES
            </h1>
            <br />
          </div>

          {companies.map((company, index) => (
            <div
              key={index}
              className="col-lg-2 col-xl-2 col-sm-4 col-6 "
              align="center"
            >
              <a href="#">
                {" "}
                {company.image ? (
                  <img
                    src={
                      !company.image.publicURL
                        ? company.image
                        : company.image.publicURL
                    }
                    width="120px"
                  />
                ) : (
                  <img src={null} width="120px" alt="company logo" />
                )}{" "}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
