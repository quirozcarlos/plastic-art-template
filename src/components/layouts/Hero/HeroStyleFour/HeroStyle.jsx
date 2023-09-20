import React from "react";
import { ReactSVG } from "react-svg";
// import HeroImage from "~image";

const HeroSection = () => {
  return (
    <div className="hero-section-04" style={{ height: '80vh' }}>
      <div className="hero-section-04__bg-shape" style={{ opacity: 1 }}>
        {/* <img src="./image/home-4/hero-bg.png" alt="hero image" /> */}
        <img src="./image/banners/school-place.png" alt="hero image" style={{ objectFit: 'cover' }} />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-11 col-lg-9 col-md-9 col-xs-11">
            <div className="hero-section-04__content hero-content text-center">
              {/* <h1 className="heading-light title">
                VALENTÍN HERNÁNDEZ USECHE
              </h1> */}
              {/* <p className="text-light" style={{ fontSize: 22, fontWeight: 'bold' }}>
                Escuela de Artes Plásticas
              </p> */}
            </div>
            <div className="hero-section-04__image-group">
              {/* <img src="./image/banners/school-place.png" height={350} alt="mainimage" /> */}
              <div style={{ height: 350 }} />
              {/* <div
                className="position-relative wrap"
                data-aos="fade-up"
                data-aos-delay={500}
                data-aos-duration={1000}
              >
                <div className="hero-section-04__image-group--half-shape">
                  <ReactSVG
                    src="./image/home-4/hero-circal.svg"
                    alt="chircal-bg"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section-04__shape-1 floating-Y-animation-reverse-02">
        <ReactSVG
          src="./image/home-4/hero-shape-1.svg"
          alt="shape"
          className="react-shape-w-100 fill-secondary"
        />
      </div>
      <div className="hero-section-04__shape-2 floating-Y-animation-02">
        <ReactSVG
          src="./image/home-4/hero-shape-2.svg"
          alt="shape"
          className="react-shape-w-100"
        />
      </div>
      <div className="hero-section-04__shape-3 circle-animation">
        <ReactSVG src="./image/home-4/hero-shape-3.svg" alt="shape" />
      </div>
    </div>
  );
};

export default HeroSection;
