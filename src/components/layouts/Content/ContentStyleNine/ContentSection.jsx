import React from "react";
import { ReactSVG } from "react-svg";

const ContentSection = () => {
  return (
    <div className="content-section-09">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-9 col-sm-9 col-xs-11">
            <div className="content-section-09__image-group text-center mb-mobile-lg">
              <img src="./image/school/vision.jpeg" alt="content-image" />
              <div className="content-section-09__image-group--shape-1 shape-x-1 fill-secondary">
                <ReactSVG
                  src="./image/home-4/content-1-shape-1.svg"
                  alt="shape"
                />
              </div>
              <div className="content-section-09__image-group--shape-2 shape-x-2">
                <ReactSVG
                  src="./image/home-4/content-1-shape-2.svg"
                  alt="shape"
                />
              </div>
            </div>
          </div>
          <div
            className="col-xl-5 offset-xl-1 col-lg-6 col-md-9 col-xs-11"
            data-aos="fade-up"
            data-aos-delay={500}
            data-aos-duration={1000}
          >
            <div className="content-section-09__texts text-center text-lg-start">
              <div className="block-title">
                {/* <h6 className="subtitle text-secondary mb-20">
                  Visión Institucional
                </h6> */}
                <h2 className="title">
                  Visión Institucional
                </h2>
                <p className="text-dark">
                  Proponemos brindar una educación de calidad en artes plásticas obteniendo el reconocimiento nacional e
                  internacional sin dejar de lado la riqueza cultural de la región; contamos con un equipo de maestros,
                  docentes, personal de apoyo, administrativo y  talleristas comprometidos con la labor educativa,
                  asociada  en la formación de valores como la identidad, la libertad, la sensibilidad,
                  el compromiso  y la creatividad en la estética, que beneficie el desarrollo integral de los estudiantes a fin
                  de obtener un crecimiento personal y profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
