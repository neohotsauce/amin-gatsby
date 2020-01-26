import React from "react";
import PropTypes from "prop-types";

const BannerRoll = ({ banners }) => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade "
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        {banners.map((banner, index) => {
          return (
            <div
              className={index === 0 ? "carousel-item active" : "carousel-item"}
              data-interval="10000"
              key={index}
            >
              {banner.image ? (
                <img
                  src={
                    !banner.image.publicURL
                      ? banner.image
                      : banner.image.publicURL
                  }
                  className="d-block w-100"
                  alt="..."
                />
              ) : (
                <img src={null} className="d-block w-100" alt="banner" />
              )}

              <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                <h1>{banner.text}</h1>
              </div>
            </div>
          );
        })}
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    // <div
    //   id="carouselExampleIndicators"
    //   className="carousel slide carousel-fade animated fadeIn"
    //   data-ride="carousel"
    //   data-interval="3000"
    // >
    //   <ol className="carousel-indicators">
    //     <li
    //       data-target="#carouselExampleIndicators"
    //       data-slide-to="0"
    //       className="active"
    //     ></li>
    //     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    //     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    //   </ol>
    //   <div className="carousel-inner">
    //     {banners.map((banner, index) => {
    //       return (
    //         <div
    //           key={index}
    //           className={index === 0 ? "carousel-item active" : "carousel-item"}
    //           data-interval="10000"
    //         >
    //           {!banner.image.publicURL ? (
    //             <img src={banner.image} className="d-block w-100" alt="..." />
    //           ) : (
    //             <img
    //               src={banner.image.publicURL}
    //               className="d-block w-100"
    //               alt="..."
    //             />
    //           )}
    //           <div className="carousel-caption  animated fadeInUp">
    //             <h1>{banner.text}</h1>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>

    //   <a
    //     className="carousel-control-prev"
    //     href="#carouselExampleIndicators"
    //     role="button"
    //     data-slide="prev"
    //   >
    //     <span className="sr-only">Previous</span>
    //   </a>
    //   <a
    //     className="carousel-control-next"
    //     href="#carouselExampleIndicators"
    //     role="button"
    //     data-slide="next"
    //   >
    //     <span className="sr-only">Next</span>
    //   </a>
    // </div>
  );
};

BannerRoll.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default BannerRoll;
