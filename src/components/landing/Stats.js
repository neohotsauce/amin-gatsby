import React from "react";

const Stats = ({ stats }) => {
  return (
    <div className="block bg1">
      <div className="container">
        <div className="row px-3">
          {stats.map((stat, index, array) => {
            return (
              <div
                key={index}
                className={
                  index + 1 === array.length
                    ? "col-6 col-lg-3 col-xl-3 stats"
                    : "col-6 col-lg-3 col-xl-3 stats b-right"
                }
              >
                <h1>{stat.info}</h1>
                <p>{stat.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
